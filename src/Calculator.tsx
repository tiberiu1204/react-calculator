import "./Calculator.css";
import { Button, ButtonType } from "./Button";

const Calculator = () => {
  const buttons = Object.values(ButtonType);
  return (
    <div className="calculator">
      <div className="calculator-screen-wraper"></div>
      <div className="calculator-buttons-wraper">
        {buttons.map((item) => {
          return <Button type={item} key={item}></Button>;
        })}
      </div>
    </div>
  );
};

export default Calculator;
