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
        return(<>
            <div className="button-panel-component">
                {CalculatorLayout.map((calculatorRow, rowIndex) => {
                    return(
                    <div key={rowIndex} className="calculator-row">
                        {calculatorRow.map((button, buttonIndex) => {
                            const orange = buttonIndex === calculatorRow.length -1;
                            const wide = false;
                            return(
                                <Button key={buttonIndex} name={button} orange={orange} wide={wide} clickHandler={this.props.clickHandler}/>
                            );
                        })}
                    </div>);
                })}
            </div>
        </>)
    }
}
