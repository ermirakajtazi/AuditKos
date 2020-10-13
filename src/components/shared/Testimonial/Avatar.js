import React from "react"

const Avatar=(props)=>{
    return(
        <div className="avatar-content" data-aos="fade-right">
            <img data-aos="zoom-in-up" src={props.img} alt="" className="avatar"/>
        </div>
    )
}

export default Avatar