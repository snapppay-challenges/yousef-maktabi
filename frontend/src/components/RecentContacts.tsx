import { Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Contact } from "src/types/contact";

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
          return (
            <Link
              key={contact.id}
              to={`/contacts/${contact.id}`}
              className="group bg-white rounded-lg p-3 border border-gray-100 hover:border-blue-100 hover:shadow-sm transition-all"
            >
              <div className="flex items-center">
                <img
                  src={contact.avatar}
                  alt={`${contact.first_name}-${contact.last_name}`}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="ml-2 overflow-hidden">
                  <p className="text-sm font-medium text-gray-900 truncate group-hover:text-blue-600">
                    {contact.first_name} {contact.last_name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {contact.phone}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RecentContacts;
