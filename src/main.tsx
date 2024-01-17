import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { App } from "./App";
import { FavoriteProvider } from './contexts/FavoriteContext';
import { LoadingProvider } from './contexts/LoadingContext';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster />
    <FavoriteProvider>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </FavoriteProvider>
  </React.StrictMode>
);