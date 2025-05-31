import { useCallback, useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useRecentContacts } from "src/hooks/useRecentContacts";
import { useContactsQuery } from "src/hooks/useContactsQuery";
import SearchBar from "src/components/SearchBar";
import RecentContactList from "src/components/RecentContactList";
import ContactListLoading from "src/components/ContactListLoading";
import EmptyState from "src/components/EmptyState";
import ContactCard from "src/components/ContactCard";
import ErrorState from "src/components/ErrorState";
import ContactListHeader from "src/components/ContactListHeader";
import { SEARCH_URL_QUERY } from "src/constants";

const ContactListPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	/** Note (Mohammadreza): There is no need to define a separate searchQuery state. 
   * You can directly derive searchQuery from searchParams as follows:
  const searchQuery = searchParams.get(SEARCH_URL_QUERY) || ""; */

	const [searchQuery, setSearchQuery] = useState(
		searchParams.get(SEARCH_URL_QUERY) || "",
	);
	const { recentContacts } = useRecentContacts();
	const loadMoreRef = useRef<HTMLDivElement>(null);

	const handleSearch = useCallback(
		(query: string) => {
			setSearchQuery(query);
			setSearchParams(query ? { [SEARCH_URL_QUERY]: query } : {});
		},
		[setSearchParams],
	);

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
		if (!hasNextPage || isFetchingNextPage) return;
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				fetchNextPage();
			}
		});

		const node = loadMoreRef.current;
		if (node) observer.observe(node);

		return () => observer.disconnect();
	}, [fetchNextPage, hasNextPage, isFetchingNextPage]);

	if (isError) {
		return <ErrorState refetch={refetch} />;
	}

	return (
		<div className='max-w-3xl mx-auto px-4 py-6 h-screen flex flex-col'>
			<ContactListHeader contactCount={contactCount || 0} />

			<SearchBar
				onSearch={handleSearch}
				initialValue={searchQuery}
				className='mb-6'
			/>

			{!searchQuery && <RecentContactList contacts={recentContacts} />}
			{/** Note (Mohammadreza): The nested ternary expressions can be refactored into clearer conditional rendering statements for improved readability and maintainability.*/}
			{isLoading ? (
				<div className='flex-grow overflow-auto'>
					{<ContactListLoading />}
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
				<div className='flex-grow overflow-auto'>
					{contacts.map((contact) => (
						<ContactCard key={contact.id} contact={contact} />
					))}

					{hasNextPage && (
						<div ref={loadMoreRef} className='py-4 text-center'>
							{isFetchingNextPage && (
								<div className='flex items-center justify-center'>
									<div className='animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500'></div>
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
