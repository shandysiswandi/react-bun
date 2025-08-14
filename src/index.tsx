import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./tailwind.css";

// biome-ignore lint/style/noNonNullAssertion: Root element is guaranteed in index.html
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
