import React, { Component } from "react"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Card1, Card2, Card3, Card4 } from "./SliderCards"



const SliderCards = () => {
    const responsive = {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 4
        }
    }
    return (

        <div className="slider1">
            <AliceCarousel responsive={responsive} autoPlay autoPlayInterval="3000" buttonsDisabled={true} >
                <Card1 />
                <Card2 />
                <Card3 />
                <Card4 />
                <Card1 />
                <Card2 />
                <Card3 />
                <Card4 />
            </AliceCarousel>
        </div>

    )
}

export default SliderCards
