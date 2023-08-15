import "./Calculator.css";
import { Button, ButtonType } from "./Button";
import { useState } from "react";

const Calculator = () => {
  const buttons: ButtonType[] = Object.values(ButtonType);
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const [inputNumber, setInputNumber] = useState("0");
  const [expression, setExpression] = useState("");
  const [binaryChosen, setBinaryChosen] = useState(true);
  const [unaryChosen, setUnaryChosen] = useState(true);

  const getColor: (index: number) => "white" | "grey" | "blue" = (index) => {
    const line: number = Math.floor(index / 4);
    const collumn: number = index % 4;
    if (line > 1 && collumn < 3) {
      return "white";
    } else if (index == 23) {
      return "blue";
    }
    return "grey";
  };

  const getInput: (value: string) => void = (value) => {
    if (value == ButtonType.DEL && binaryChosen == false) {
      if (inputNumber.length > 1) {
        setInputNumber(inputNumber.slice(0, -1));
      } else {
        setInputNumber("0");
        setBinaryChosen(true);
      }
    }

    if (value == ButtonType.CE) {
      setBinaryChosen(true);
      setInputNumber("0");
    }

    if (value == ButtonType.NEGATE) {
      if (Number(inputNumber) > 0) {
        setInputNumber("-" + inputNumber);
      } else if (Number(inputNumber) < 0) {
        setInputNumber(inputNumber.slice(1, inputNumber.length));
      }
      setUnaryChosen(true);
    }

    if (value == ButtonType.POINT) {
      if (binaryChosen == true) {
        setInputNumber("0.");
      } else {
        if (!inputNumber.includes(".")) {
          setInputNumber(inputNumber + ".");
        }
      }
      setBinaryChosen(false);
    }

    if (value == ButtonType.C) {
      setBinaryChosen(true);
      setInputNumber("0");
      setExpression("");
    }

    if (value == ButtonType.SQRT) {
      let result: number = Math.sqrt(Number(inputNumber));
      setInputNumber(String(result));
      setBinaryChosen(true);
      setUnaryChosen(true);
    }

    if (value == ButtonType.SQUARED) {
      let result: number = Math.pow(Number(inputNumber), 2);
      setInputNumber(String(result));
      setBinaryChosen(true);
      setUnaryChosen(true);
    }

    if (value == ButtonType.INVERSE) {
      let result: number = 1 / Number(inputNumber);
      setInputNumber(String(result));
      setBinaryChosen(true);
      setUnaryChosen(true);
    }

    if (value == ButtonType.PERCENT) {
      if (!expression) {
        return;
      } else {
        let result: number =
          (Number(expression.slice(0, expression.length - 1)) *
            Number(inputNumber)) /
          100;
        setInputNumber(String(result));
      }
      setBinaryChosen(true);
      setUnaryChosen(true);
    }

    if (
      value == ButtonType.PLUS ||
      value == ButtonType.MINUS ||
      value == ButtonType.TIMES ||
      value == ButtonType.DIVIDED ||
      (value == ButtonType.EQUALS && expression)
    ) {
      let newExpression: string = "";
      console.log(binaryChosen == false || unaryChosen == true);
      if (
        binaryChosen == false ||
        unaryChosen == true ||
        value == ButtonType.EQUALS
      ) {
        if (!expression) {
          newExpression = inputNumber;
        } else {
          let left: number = Number(expression.slice(0, expression.length - 1));
          let right: number = Number(inputNumber);
          let operand: string = expression.slice(
            expression.length - 1,
            expression.length
          );
          let result: number = compute(left, right, operand);
          newExpression = String(result);
          setInputNumber(String(result));
        }
      } else {
        newExpression = expression.slice(0, expression.length - 1);
      }

      switch (value) {
        case ButtonType.PLUS:
          setExpression(newExpression + "+");
          break;
        case ButtonType.MINUS:
          setExpression(newExpression + "-");
          break;
        case ButtonType.TIMES:
          setExpression(newExpression + "*");
          break;
        case ButtonType.DIVIDED:
          setExpression(newExpression + "/");
          break;
        case ButtonType.EQUALS:
          setExpression("");
          setInputNumber(newExpression);
          setUnaryChosen(true);
          setBinaryChosen(true);
          return;
      }
      setBinaryChosen(true);
      setUnaryChosen(false);
    }

    if (
      numbers.includes(value) &&
      (inputNumber.length < 23 || binaryChosen == true)
    ) {
      if (value == "0" && inputNumber[0] == "0" && !inputNumber.includes("."))
        return;
      if (binaryChosen == true) {
        setInputNumber(value);
      } else {
        setInputNumber(inputNumber + value);
      }
      setBinaryChosen(false);
    }
  };
  return (
    <div className="calculator">
      <div className="calculator-screen-wraper">
        <div className="calculator-screen">
          <div className="calculator-screen-result">
            <span className="overflow-content">{expression}</span>
          </div>
          <div className="calculator-screen-input">
            <span className="overflow-content">{inputNumber}</span>
          </div>
        </div>
      </div>
      <div className="calculator-buttons-wraper">
        {buttons.map((item, index) => {
          return (
            <Button
              type={item}
              color={getColor(index)}
              key={index}
              onClick={() => {
                getInput(item);
              }}
            ></Button>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;

function compute(left: number, right: number, operand: string) {
  switch (operand) {
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "*":
      return left * right;
    case "/":
      return left / right;
    default:
      return 0;
  }
}
