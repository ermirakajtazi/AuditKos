import React from "react"

const STYLES = ["btn--primary","btn--secondary","btn--third", "btn--outline","btn--outline1","btn--outline2"]
const SIZES = ["btn--xssmall","btn--small","btn--medium", "btn--large","btn--exlarge"]

export const Button = ({  type,onClick, buttonSize, buttonStyle,name }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    return (
        <div>
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} type={type} onClick={onClick}>{name}</button>
        </div>
    )
}