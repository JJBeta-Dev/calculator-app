import React from "react";
import { useCalculator } from "../hooks/useCalculator"

const Display = ({ value }) => {
  const { state } = useCalculator();

  return (
    <div className="bg-[var(--color-screen-bg)] h-20 w-full rounded-2xl mb-4 flex items-center justify-end">
      <div className="text-[var(--color-text-display)] px-5 p-4 text-[32px] font-semibold">
        <h2>{value}</h2>
      </div>
    </div>
  );
};

export default Display;
