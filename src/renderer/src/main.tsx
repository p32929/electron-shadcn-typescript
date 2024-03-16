import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global.css";
import App from './App';
import { ThemeProvider } from './components/theme-provider';
import { Provider } from 'react-redux';
import { store } from './lib/StatesController';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
