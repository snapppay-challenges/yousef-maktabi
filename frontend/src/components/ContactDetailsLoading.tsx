const ContactDetailsSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 animate-pulse">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
        <div className="flex-grow">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <div className="h-3 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-5 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div>
              <div className="h-3 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-5 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div>
              <div className="h-3 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-5 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div>
              <div className="h-3 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-5 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>

          <div className="h-3 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="h-20 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsSkeleton;
