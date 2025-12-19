import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./providers/ThemeProvider";
import { CalculatorProvider } from "./providers/CalculatorProvider"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <CalculatorProvider>
        <App />
      </CalculatorProvider>
    </ThemeProvider>
  </StrictMode>
);
