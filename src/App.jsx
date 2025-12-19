import React from "react";
import { useState, useEffect } from "react";
import Calculator from "./components/Calculator.jsx";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-main-bg)]">
      <div className="w-full max-w-[360px] md:max-w-[420px] lg:max-w-[540px] px-4">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
