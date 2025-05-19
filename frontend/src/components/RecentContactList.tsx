import { Clock } from "lucide-react";
import { Contact } from "src/types/contact";
import RecentContactListItem from "./RecentContactListItem";

interface Props {
  contacts: Contact[];
}

const RecentContacts = ({ contacts }: Props) => {
  if (contacts.length === 0) return null;

  return (
    <div className="mb-6">
      <div className="flex items-center mb-3">
        <Clock size={16} className="text-gray-500 mr-2" />
        <h2 className="text-sm font-medium text-gray-500">Recently Viewed</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {contacts.map((contact) => {
          return <RecentContactListItem contact={contact} />;
        })}
      </div>
    </div>
  );
};

export default RecentContacts;
