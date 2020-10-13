import React from "react"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Avatar1, Avatar2, Avatar3, Avatar4 } from "./Avatar"

const AvatarSlider = () => {
    const responsive = {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 3
        }
    }
    return (

        <div className="slider">
            <div className="avatar-container">
                <h2>MEET OUR TEAM</h2>
            </div>
            <AliceCarousel responsive={responsive}
                autoPlay autoPlayInterval="3000" buttonsDisabled={true} >
                <Avatar1 />
                <Avatar2 />
                <Avatar3 />
                <Avatar4 />
                <Avatar1 />
                <Avatar2 />
                <Avatar3 />
                <Avatar4 />
            </AliceCarousel>
        </div>

    )
}

export default AvatarSlider