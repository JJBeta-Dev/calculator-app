import { useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";

export const useCalculator = () => {
  const context = useContext(CalculatorContext);
  return context;
};
