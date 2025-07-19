import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-stone-900 text-white text-4xl font-mono">
        <span className="animate-pulse">L</span>
        <span className="animate-bounce delay-75">o</span>
        <span className="animate-bounce delay-150">a</span>
        <span className="animate-bounce delay-200">d</span>
        <span className="animate-bounce delay-300">i</span>
        <span className="animate-bounce delay-500">n</span>
        <span className="animate-bounce delay-700">g</span>
        <span className="animate-bounce delay-1000">.</span>
        <span className="animate-bounce delay-1100">.</span>
        <span className="animate-bounce delay-1200">.</span>
      </div>
    );
  }

  return <App />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
