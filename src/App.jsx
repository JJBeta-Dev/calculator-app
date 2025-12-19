import React from "react";
import Calculator from "./components/Calculator.jsx";
import { CalculatorProvider } from "./providers/CalculatorProvider.jsx";
import "./index.css";

function App() {
  return (
    <CalculatorProvider>
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-main-bg)]">
        <div className="w-full max-w-[360px] md:max-w-[420px] lg:max-w-[540px] px-4">
          <Calculator />
        </div>
      </div>
    </CalculatorProvider>
  );
}

export default App;
