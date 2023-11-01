import React from "react";
import PropTypes from 'prop-types';
import './styles/Button.css'

export default class Button extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        orange: PropTypes.bool, 
        wide: PropTypes.bool,
        clickHandler: PropTypes.func
    };

    handleClick = () => {
        this.clickHandler(this.props.name);
    }

    render(){
        const className = [
            "button-component",
            this.props.orange ? "orange" : "",
            this.props.wide ? "wide" : ""
        ];

        return (
            <div className={className.join(" ").trim()}>
                <button onClick={this.handleClick}>{this.props.name}</button>
            </div>
        )
    }

}