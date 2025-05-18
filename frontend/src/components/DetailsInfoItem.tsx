import React from "react";

interface Props {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  className?: string;
}

const DetailsInfoItem = ({ icon, label, children, className = "" }: Props) => {
  return (
    <div className={`${className}`}>
      <div className="text-sm font-medium text-gray-500 mb-1 flex items-center">
        <span className="mr-2 text-gray-400">{icon}</span>
        {label}
      </div>
      <div className="text-gray-800">{children}</div>
    </div>
  );
};

export default DetailsInfoItem;
