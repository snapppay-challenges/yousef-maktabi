import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ContactListPage from "./pages/ContactListPage";
import ContactDetailsPage from "./pages/ContactDetailsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/contacts" element={<ContactListPage />} />
            <Route path="/contacts/:id" element={<ContactDetailsPage />} />
            <Route path="/" element={<Navigate to="/contacts" replace />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
