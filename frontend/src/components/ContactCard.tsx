import { Link } from "react-router-dom";
import { Building, Mail, MapPin, Phone } from "lucide-react";
import { Contact } from "src/types/contact";
import BaseAvatar from "./BaseAvatar";

interface Props {
  contact: Contact;
}

const ContactCard = ({ contact }: Props) => {
  return (
    <Link to={`/contacts/${contact.id}`} className="block w-full mb-3 ">
      <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-200">
        <BaseAvatar
          src={contact.avatar}
          size={12}
          alt={`${contact.first_name}'s avatar`}
        />
        <div className="ml-4 flex-grow">
          <div className="flex justify-between">
            <h3 className="font-medium text-gray-900 group-hover:text-blue-600">
              {contact.first_name} {contact.last_name}
            </h3>
            <span className="text-xs text-gray-500 flex items-center">
              <Building size={12} className="mr-1" />
              {contact.company}
            </span>
          </div>
          <p className="text-sm text-gray-500 flex items-center gap-x-1">
            <MapPin size={12} />
            {contact.address || "—"}
          </p>
          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
            <span className="text-xs text-gray-500 flex items-center">
              <Phone size={12} className="mr-1 text-gray-400" />
              {contact.phone || "—"}
            </span>
            <span className="text-xs text-gray-500 flex items-center">
              <Mail size={12} className="mr-1 text-gray-400" />
              {contact.email || "—"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ContactCard;
