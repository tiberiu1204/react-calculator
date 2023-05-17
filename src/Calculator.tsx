import "./Calculator.css";
import { Button, ButtonType } from "./Button";
import { useState } from "react";

const Calculator = () => {
  const buttons: ButtonType[] = Object.values(ButtonType);
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operands = ["%", "+", "-", "=", "/", "×", "√x", "1/x", "x²"];
  const [inputNumber, setInputNumber]: [string, (value: string) => void] =
    useState("0");
  const [resultNumber, setResultNumber]: [string, (value: string) => void] =
    useState("");

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

  const changeInputNumber: (value: string) => void = (value) => {
    if (value == ButtonType.DEL) {
      inputNumber.length > 1
        ? setInputNumber(inputNumber.slice(0, -1))
        : setInputNumber("0");
    }

    if (value == ButtonType.CE) {
      setInputNumber("0");
    }

    if (value == ButtonType.NEGATE) {
      Number(inputNumber) > 0
        ? setInputNumber("-" + inputNumber)
        : setInputNumber(inputNumber.slice(1, inputNumber.length));
    }

    if (value == ButtonType.POINT) {
      if (!inputNumber.includes(".")) {
        setInputNumber(inputNumber + ".");
      }
    }

    if (value == ButtonType.C) {
      setInputNumber("0");
      setResultNumber("");
    }

    if (numbers.includes(value)) {
      if (inputNumber == "0") {
        setInputNumber(value);
      } else {
        setInputNumber(inputNumber + value);
      }
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-screen-wraper">
        <div className="calculator-screen">
          <div className="calculator-screen-result">{resultNumber}</div>
          <div className="calculator-screen-input">{inputNumber}</div>
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
                changeInputNumber(item);
              }}
            ></Button>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
