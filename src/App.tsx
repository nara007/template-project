import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';

import Main from './pages/Main';
import queryClient from './service/queryClient';
import { store } from './stores/store';

/**
 * The main application component which sets up the global providers.
 * 
 * This component wraps the entire application with the necessary providers:
 * - 'Provider' to provide Redux store.
 * - 'QueryClientProvider' to provide the query client for data fetching.
 */
function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
