import React from "react"

const Banner = (props) => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${props.img})`, height: `${props.height}` }}>
            {props.children}
        </div>
    )
}

export default Banner