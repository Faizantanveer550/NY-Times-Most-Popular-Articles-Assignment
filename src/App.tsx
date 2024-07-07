import { QueryClient, QueryClientProvider } from "react-query";
import { MostPopularArticlesListing } from "./pages";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";

export const queryClient = new QueryClient({
  defaultOptions: {},
});

export const AppContent = () => {
  return (
    <div className="App">
      <MostPopularArticlesListing />
    </div>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}

export default App;
