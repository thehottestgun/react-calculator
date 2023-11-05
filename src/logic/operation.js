import Big from "big.js";
import { BtnAddition, BtnResult, BtnReversal } from "../constants/buttonCodes";

export default function operate(numberOne, numberTwo, lastOperation, currentOperation){
    if(currentOperation === BtnAddition){
        return (parseInt(numberOne) + parseInt(numberTwo)).toString();
    }
    else if(currentOperation === BtnReversal){
        return numberOne * -1;
    }
    else if(currentOperation === BtnResult){
        return(operate(numberOne, numberTwo, null, lastOperation));
    }
}