import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Seashell } from "./seashell.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Seashell />
  </StrictMode>,
);
