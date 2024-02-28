import ReactDOM from 'react-dom/client';
import pcg from '../package.json';

import { AppApolloProvider } from './Apollo/AppApolloProvider.tsx';

import App from './App.tsx';
import initI18n from './i18n';

import './global.scss';

const init = async () => {
  await initI18n();

  console.log('version:', pcg.version); //eslint-disable-line

  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container!);

  root.render(
    <AppApolloProvider>
      <App />
    </AppApolloProvider>,
  );
};

init();
