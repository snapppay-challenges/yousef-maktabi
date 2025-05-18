import React from "react";
import ContactCardLoading from "./ContactCardLoading";

interface Props {
  itemCount: number;
}

const ContactListLoading = ({ itemCount }: Props = { itemCount: 8 }) => {
  return (
    <div className="flex-grow overflow-hidden">
      {Array.from({ length: itemCount }).map((_, index) => {
        return <ContactCardLoading key={index} />;
      })}
    </div>
  );
};

export default ContactListLoading;
