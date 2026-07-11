import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import "./nativeSetup.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary onBack={() => window.location.reload()} actionLabel="Reload">
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);