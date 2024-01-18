import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // Ensure this import is correct
import { Toaster } from "react-hot-toast";
import { FavoriteProvider } from './contexts/FavoriteContext';
import { LoadingProvider } from './contexts/LoadingContext';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FavoriteProvider>
      <LoadingProvider>
        <Toaster position="top-center" />
        <App />  // Main App component
      </LoadingProvider>
    </FavoriteProvider>
  </React.StrictMode>
);
