import { User } from "lucide-react";

interface Props {
  contactCount: number | undefined;
}

const ContactListHeader = ({ contactCount = 0 }: Props) => {
  return (
    <div className="flex items-center mb-6">
      <div className="flex items center text-blue-600 mr-3">
        <User size={24} />
      </div>
      <h1 className="text-2xl font-semibold text-gray-800">
        Contacts
        <span className="ml-2 text-sm text-gray-500 self-end mb-1">
          ({contactCount})
        </span>
      </h1>
    </div>
  );
};

export default ContactListHeader;
