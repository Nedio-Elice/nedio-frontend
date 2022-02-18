import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from './App';
import GlobalStyle from './styles/globalStyle';
import { store, persistor } from './store/root';
import ToastProvider from './components/Toast/ToastProvider';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <ToastProvider>
          <App />
        </ToastProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
