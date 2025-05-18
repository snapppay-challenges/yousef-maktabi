const ContactCardLoading = () => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 animate-pulse mb-3">
      <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
      <div className="ml-4 flex-grow">
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-1/4 mb-2"></div>
        <div className="flex gap-4">
          <div className="h-2 bg-gray-200 rounded w-1/3"></div>
          <div className="h-2 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactCardLoading;
