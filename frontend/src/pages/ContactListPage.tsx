import React, { useCallback, useState, useRef, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { RefreshCw, User } from "lucide-react";
import { useRecentContacts } from "../hooks/useRecentContacts";
import RecentContacts from "../components/RecentContacts";

import ContactListLoading from "../components/ContactListLoading";
import ContactCard from "../components/ContactCard";
import { useContactsQuery } from "../hooks/useContactsQuery";
import EmptyState from "../components/EmptyState";

const ContactListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { recentContacts } = useRecentContacts();
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    refetch,
  } = useContactsQuery(searchQuery);

  const contacts = data?.pages.flatMap((page) => page.items) || [];
  const contactCount = data?.pages[0].meta.total;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-4">
        <p className="text-red-500 mb-4">Error loading contacts.</p>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center"
        >
          <RefreshCw size={16} className="mr-2" />
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 h-screen flex flex-col">
      <div className="flex items-center mb-6">
        <div className="flex items center text-blue-600 mr-3">
          <User size={24} />
        </div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Contacts
          {data && (
            <span className="ml-2 text-sm text-gray-500 self-end mb-1">
              ({contactCount})
            </span>
          )}
        </h1>
      </div>

      <SearchBar onSearch={handleSearch} className="mb-6" />

      {!searchQuery && <RecentContacts contacts={recentContacts} />}

      {isLoading ? (
        <div className="flex-grow overflow-auto">
          {<ContactListLoading itemCount={8} />}
        </div>
      ) : contacts.length === 0 ? (
        <EmptyState
          message={
            searchQuery
              ? `No contacts found for "${searchQuery}"`
              : "No contacts found"
          }
        />
      ) : (
        <div className="flex-grow overflow-auto">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}

          {hasNextPage && (
            <div ref={loadMoreRef} className="py-4 text-center">
              {isFetchingNextPage && (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactListPage;
