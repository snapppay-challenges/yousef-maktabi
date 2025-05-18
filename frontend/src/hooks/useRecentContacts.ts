import { useState, useEffect } from "react";
import { Contact } from "../types/contact";

const STORAGE_KEY = "recent-viewed-contacts";
const MAX_RECENT_CONTACTS = 4;

export const useRecentContacts = () => {
  const [recentContacts, setRecentContacts] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setRecentContacts(JSON.parse(stored));
    }
  }, []);

  const addRecentContact = (contact: Contact) => {
    setRecentContacts((prev) => {
      const filtered = prev.filter((c) => c.id !== contact.id);
      const updated = [contact, ...filtered].slice(0, MAX_RECENT_CONTACTS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  return {
    recentContacts,
    addRecentContact,
  };
};
