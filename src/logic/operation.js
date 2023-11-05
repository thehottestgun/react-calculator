import Big from "big.js";
import {
  BtnAddition,
  BtnDivision,
  BtnMultiplication,
  BtnResult,
  BtnReversal,
  BtnSubtraction,
} from "../constants/buttonCodes";

export default function operate(
  numberOne,
  numberTwo,
  lastOperation,
  currentOperation
) {
  if (lastOperation) {
    return operate(numberOne, numberTwo, null, lastOperation);
  }
  if (currentOperation === BtnAddition) {
    return (parseFloat(numberOne) + parseFloat(numberTwo)).toString();
  } else if (currentOperation === BtnSubtraction) {
    return (parseFloat(numberOne) - parseFloat(numberTwo)).toString();
  } else if (currentOperation === BtnMultiplication) {
    return(parseFloat(numberOne) * parseFloat(numberTwo)).toString();
  } else if(currentOperation === BtnDivision){
    return(parseFloat(numberOne) / parseFloat(numberTwo)).toString();
  } else if (currentOperation === BtnReversal) {
    return numberOne * -1;
  } else if (currentOperation === BtnResult) {
    return operate(numberOne, numberTwo, null, lastOperation);
  }
}
