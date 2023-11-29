import ReactDOM from 'react-dom/client'
import React from 'react';
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { store } from './state/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <ThemeProvider>
      <Provider store={store}>
    <App />
  </Provider>
      </ThemeProvider>
    </React.StrictMode>
  );