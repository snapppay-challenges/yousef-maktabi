import React from "react";
import { UserSearch } from "lucide-react";

interface Props {
  message?: string;
  icon?: React.ReactNode;
}

const EmptyState = ({
  message = "No contacts found",
  icon = <UserSearch size={48} className="text-gray-300" />,
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="mb-4">{icon}</div>
      <p className="text-gray-500 text-lg">{message}</p>
    </div>
  );
};

export default EmptyState;
