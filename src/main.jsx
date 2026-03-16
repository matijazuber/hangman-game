import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Hangman from "./hangman.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Hangman />
  </StrictMode>,
);
