import "./Calculator.css";
import { Button, ButtonType } from "./Button";

const Calculator = () => {
  const buttons: ButtonType[] = Object.values(ButtonType);

  const getColor: (index: number) => "white" | "grey" | "blue" = (index) => {
    console.log(index);
    const line: number = Math.floor(index / 4);
    const collumn: number = index % 4;
    if (line > 1 && collumn < 3) {
      return "white";
    } else if (index == 23) {
      return "blue";
    }
    return "grey";
  };

  return (
    <div className="calculator">
      <div className="calculator-screen-wraper"></div>
      <div className="calculator-buttons-wraper">
        {buttons.map((item, index) => {
          return (
            <Button type={item} color={getColor(index)} key={item}></Button>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
