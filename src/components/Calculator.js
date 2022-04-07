import Display from "./Display";
import Keypad from "./Keypad";
import calculatorStyles from "./Calculator.module.css";

const Calculator = () => {
  return (
    <div className={calculatorStyles.body}>
      <Display />
      <Keypad />
    </div>
  );
};
export default Calculator;
