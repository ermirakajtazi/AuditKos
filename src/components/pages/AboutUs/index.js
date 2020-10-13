import React from "react"
import Header from "../../shared/Header"
import Banner from "../../shared/Banner"
import NavBar from "../../shared/NavBar"
import ChooseUs from "./ChooseUs"
import OurAdvantages from "./OurAdvantages"
import MeetOurTeam from "../../shared/MeetOurTeam"
import CardImage from "../../shared/CardImage"
import Subscribe from "../../shared/Subscribe"
import SuccesfulCases from "../../shared/SuccesfulCases"
import Footer from "../../shared/Footer"
import aboutbanner from "../../../assets/aboutbanner.png"
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
    const { t } = useTranslation();
    return (
        <div id="container">
            <Header />
            <Banner img={aboutbanner} height={"939px"}>
                <div className="banner-content">
                    <h1>{t('certificate.p')}</h1>
                    <p>{t('aboutUs.p')}</p>
                </div>
            </Banner>
            <NavBar />
            <ChooseUs />
            <OurAdvantages />
            <MeetOurTeam />
            <CardImage />
            <Subscribe />
            <SuccesfulCases />
            <Footer />
        </div>
    )
}

export default AboutUs