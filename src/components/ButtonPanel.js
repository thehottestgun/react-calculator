import Button from "./Button";
import { CalculatorLayout } from "../constants/buttonCodes";
import React from "react";
import PropTypes from "prop-types";
import './styles/ButtonPanel.css'
export default class ButtonPanel extends React.Component {
    static propTypes = {
        clickHandler: PropTypes.func
    }

    handleClick = buttonCode => {
        this.props.clickHandler(buttonCode);
    }

    render(){
        const clickHandler = this.props.clickHandler;
        return(<>
            <div className="button-panel-component">
                {CalculatorLayout.map((calculatorRow, rowIndex) => {
                    return(
                    <div key={rowIndex} className="calculator-row">
                        {calculatorRow.map((button, buttonIndex) => {
                            const orange = buttonIndex === calculatorRow.length -1;
                            const wide = button === '0';
                            return(
                                <Button key={buttonIndex} name={button} orange={orange} wide={wide} clickHandler={clickHandler}/>
                            );
                        })}
                    </div>);
                })}
            </div>
        </>)
    }
}
