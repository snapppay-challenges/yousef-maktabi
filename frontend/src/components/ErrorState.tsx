import { RefreshCw } from "lucide-react";

interface Props {
  refetch: () => void;
}

const ErrorState = ({ refetch }: Props) => (
  <div className="flex flex-col items-center justify-center h-full p-4">
    <p className="text-red-500 mb-4">Error loading contacts.</p>
    <button
      onClick={refetch}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center"
    >
      <RefreshCw size={16} className="mr-2" />
      Try Again
    </button>
  </div>
);

export default ErrorState;
