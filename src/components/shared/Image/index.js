import React from "react"

const Image=(props)=>{
    return(
        <div className="image-comp" data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <img src={props.img} alt="" />
        </div>
    )
}

export default Image