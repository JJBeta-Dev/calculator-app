import ThemeSwitcher from "./ThemeSwitcher";
import Display from "./Display";
import Keypad from "./KeyPad.jsx";
import { useCalculator } from "../hooks/useCalculator";

const Calculator = () => {
  const { display, onKeyPress } = useCalculator();

  return (
    <div className="flex flex-col gap-4">
      <ThemeSwitcher />
      <Display value={display} />
      <Keypad onKeyPress={onKeyPress} />
    </div>
  );
};

export default Calculator;
