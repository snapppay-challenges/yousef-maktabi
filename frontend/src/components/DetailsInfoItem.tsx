import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  label: string;
  children: ReactNode;
  className?: string;
}

const DetailsInfoItem = ({ icon, label, children, className = "" }: Props) => {
  return (
    <div
      className={`flex items-center md:items-start justify-between md:flex-col ${className}`}
    >
      <div className="text-sm text-gray-500 mb-1 flex items-center">
        <span className="mr-2 text-gray-400">{icon}</span>
        {label}
      </div>
      <div className="text-gray-800 font-medium text-left">{children}</div>
    </div>
  );
};

export default DetailsInfoItem;
