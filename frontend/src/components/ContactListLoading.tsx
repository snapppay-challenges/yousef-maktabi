import React from "react";
import ContactCardLoading from "./ContactCardLoading";

interface Props {
  itemCount?: number;
}

const ContactListLoading = ({ itemCount = 8 }: Props) => {
  return (
    <div className="flex-grow overflow-hidden">
      {Array.from({ length: itemCount }).map((_, index) => {
        return <ContactCardLoading key={index} />;
      })}
    </div>
  );
};

export default ContactListLoading;
