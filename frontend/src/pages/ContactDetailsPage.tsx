import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Building,
  Calendar,
  ChevronLeft,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useRecentContacts } from "src/hooks/useRecentContacts";
import useContactQuery from "src/hooks/useContactQuery";
import DetailsInfoItem from "src/components/DetailsInfoItem";
import ContactDetailsLoading from "src/components/ContactDetailsLoading";
import { formatDate } from "src/utils";
import BaseAvatar from "src/components/BaseAvatar";

const ContactDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addRecentContact } = useRecentContacts();

  const { data: contact, isLoading, isError } = useContactQuery(Number(id));

  const backToContacts = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (contact) {
      addRecentContact(contact);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contact]);

  const renderContent = () => {
    if (isLoading) {
      return <ContactDetailsLoading />;
    }

    if (isError || !contact) {
      return (
        <div className="bg-red-50 text-red-600 p-6 rounded-lg text-center">
          <p className="text-xl mb-4">Contact not found</p>
          <p>
            The contact you're looking for doesn't exist or has been removed.
          </p>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <BaseAvatar
            src={contact.avatar}
            alt={`${contact.first_name}'s avatar`}
            size={32}
            className="border-4 border-white shadow"
          />

          <div className="flex-grow text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              {contact.first_name} {contact.last_name}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <DetailsInfoItem icon={<Phone size={18} />} label="Phone">
                <a
                  href={`tel:${contact.phone}`}
                  className="text-blue-600 hover:underline"
                >
                  {contact.phone || "—"}
                </a>
              </DetailsInfoItem>

              <DetailsInfoItem icon={<Mail size={18} />} label="Email">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {contact.email || "—"}
                </a>
              </DetailsInfoItem>

              <DetailsInfoItem icon={<Building size={18} />} label="Company">
                {contact.company || "—"}
              </DetailsInfoItem>

              <DetailsInfoItem icon={<MapPin size={18} />} label="Address">
                {contact.address || "—"}
              </DetailsInfoItem>

              <DetailsInfoItem icon={<Calendar size={18} />} label="Created At">
                {formatDate(contact.createdAt, "YYYY MMMM DD")}
              </DetailsInfoItem>
            </div>

            {contact.note && (
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Note</h3>
                <p className="text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  {contact.note}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 pb-16 h-screen overflow-auto">
      <button
        onClick={backToContacts}
        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6"
      >
        <ChevronLeft size={20} className="mr-1" />
        <span>Back to contacts</span>
      </button>
      {renderContent()}
    </div>
  );
};

export default ContactDetailsPage;
