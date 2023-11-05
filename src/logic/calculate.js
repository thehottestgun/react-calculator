import Big from "big.js";
import { BtnDeleteAll, OperationSigns } from "../constants/buttonCodes";
import isNumber from "./isNumber";
import operate from "./operation";

export default function calculate(state, name) {
  if (name === BtnDeleteAll) {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(name)) {
    if (name === "0" && state.next === "0") {
      return {};
    }

    if (state.operation) {
      if (state.next) {
        return { next: state.next + name };
      }
      return { next: name };
    }
    if(state.next){
        const next  = state.next === '0' ? name : state.next + name;
        return {
            next,
            total: state.next
        };
    }
    return {
        next: name,
        total: name
    };
  } else if(OperationSigns.includes(name)){
    if(state.next){
        const result = operate(state.total ?? 0, state.next, state.operation, name);
        return {
            next: name === '=' ? state.next : null,
            total: result,
            operation: name === '=' ? state.operation : name
        }
    }
    return {
        next: null,
        total: state.next,
        operation: name
    }
  }
}
