import ReactDOM from 'react-dom/client';

import { AppApolloProvider } from './Apollo/AppApolloProvider.tsx';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppApolloProvider>
    <App />
  </AppApolloProvider>,
);
