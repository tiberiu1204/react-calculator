import "./Button.css";

export enum ButtonType {
  MOD = "MOD",
  CE = "CE",
  C = "C",
  DEL = "DEL",
  INVERSE = "INVERSE",
  SQUARED = "SQUARED",
  SQURT = "SQRT",
  DIVIDED = "DIVIDED",
  SEVEN = "SEVEN",
  EIGHT = "EIGHT",
  NINE = "NINE",
  TIMES = "TIMES",
  FOUR = "FOUR",
  FIVE = "FIVE",
  SIX = "SIX",
  MINUS = "MINUS",
  ONE = "ONE",
  TWO = "TWO",
  THREE = "THREE",
  PLUS = "PLUS",
  NEGATE = "NEGATE",
  ZERO = "ZERO",
  POINT = "POINT",
  EQUALS = "EQUALS",
}

interface Props {
  type: ButtonType;
}

export const Button = ({ type }: Props) => {
  return <div className="calculator-button">{type}</div>;
};

export default Button;
