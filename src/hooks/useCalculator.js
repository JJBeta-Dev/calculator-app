import { useState } from "react";

export const useCalculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNumber, setWaitingForNumber] = useState(false);

  const inputNumber = (num) => {
    if (waitingForNumber) {
      setDisplay(num === "." ? "0." : num);
      setWaitingForNumber(false);
      return;
    }

    if (num === "." && display.includes(".")) return;
    if (display === "0" && num === "0") return;

    if (display === "0" && num !== ".") {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const doCalculation = (prev, current, op) => {
    if (op === "+") return prev + current;
    if (op === "-") return prev - current;
    if (op === "x") return prev * current;
    if (op === "/") {
      if (current === 0) return "Error";
      return prev / current;
    }
    return current;
  };

  const inputOperator = (op) => {
    if (operator !== null && previousValue !== null && !waitingForNumber) {
      const result = doCalculation(previousValue, Number(display), operator);
      if (result === "Error") {
        setDisplay("Error");
        setPreviousValue(null);
        setOperator(null);
        return;
      }
      setDisplay(String(result));
      setPreviousValue(result);
    } else {
      setPreviousValue(Number(display));
    }

    setOperator(op);
    setWaitingForNumber(true);
  };

  const calculate = () => {
    if (operator === null || previousValue === null) return;

    const result = doCalculation(previousValue, Number(display), operator);
    
    if (result === "Error") {
      setDisplay("Error");
    } else {
      setDisplay(String(result));
    }
    
    setPreviousValue(null);
    setOperator(null);
    setWaitingForNumber(true);
  };

  const reset = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperator(null);
    setWaitingForNumber(false);
  };

  const del = () => {
    if (display === "Error") {
      reset();
      return;
    }
    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  const onKeyPress = (label, type) => {
    if (type === "num") return inputNumber(label);
    if (type === "op") return inputOperator(label);
    if (label === "=") return calculate();
    if (label === "RESET") return reset();
    if (label === "DEL") return del();
  };

  return {
    display,
    onKeyPress,
  };
};
