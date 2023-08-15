import "./Button.css";

export enum ButtonType {
  PERCENT = "%",
  CE = "CE",
  C = "C",
  DEL = "DEL",
  INVERSE = "1/x",
  SQUARED = "x²",
  SQRT = "√x",
  DIVIDED = "/",
  SEVEN = "7",
  EIGHT = "8",
  NINE = "9",
  TIMES = "×",
  FOUR = "4",
  FIVE = "5",
  SIX = "6",
  MINUS = "-",
  ONE = "1",
  TWO = "2",
  THREE = "3",
  PLUS = "+",
  NEGATE = "+/-",
  ZERO = "0",
  POINT = ".",
  EQUALS = "=",
}

interface Props {
  color: "white" | "grey" | "blue";
  onClick: () => void;
  type: ButtonType;
}

export const Button = ({ color, onClick, type }: Props) => {
  return (
    <div className="calculator-button-wrapper">
      <button
        type="button"
        className={`calculator-button ${color}`}
        onClick={onClick}
      >
        {type}
      </button>
    </div>
  );
};

export default Button;
