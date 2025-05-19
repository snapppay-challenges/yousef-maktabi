import React from "react";
import { Link } from "react-router-dom";
import { Contact } from "src/types/contact";
import BaseAvatar from "./BaseAvatar";

interface Props {
  contact: Contact;
}

const RecentContactListItem = ({ contact }: Props) => {
  return (
    <Link
      key={contact.id}
      to={`/contacts/${contact.id}`}
      className="group bg-white rounded-lg p-3 border border-gray-100 hover:border-blue-100 hover:shadow-sm transition-all"
    >
      <div className="flex items-center">
        <BaseAvatar
          src={contact.avatar}
          alt={`${contact.first_name}-${contact.last_name}`}
        />

        <div className="ml-2 overflow-hidden">
          <p className="text-sm font-medium text-gray-900 truncate group-hover:text-blue-600">
            {contact.first_name} {contact.last_name}
          </p>
          <p className="text-xs text-gray-500 truncate">{contact.phone}</p>
        </div>
      </div>
    </Link>
  );
};

export default RecentContactListItem;
