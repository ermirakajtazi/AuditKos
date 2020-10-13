import React from "react"
import Header from "../../shared/Header"
import Banner from "../../shared/Banner"
import NavBar from "../../shared/NavBar"
import { Audit } from "./Audit"
import OurServices from "../../shared/OurServices";
import FirstClassAuditor from "../../shared/FirstClassAuditor"
import MeetOurTeam from "../../shared/MeetOurTeam"
import CardImage from "../../shared/CardImage"
import Subscribe from "../../shared/Subscribe"
import SuccesfulCases from "../../shared/SuccesfulCases"
import Footer from "../../shared/Footer"
import { Button } from "../../shared/Button"
import homeBanner from "../../../assets/homeBanner.png"
import { useTranslation } from 'react-i18next';


function Home() {
    const { t } = useTranslation();
    return (
        <div id="container">
            <Header />
            <Banner img={homeBanner} height={"939px"}>
                <div className="about">
                    <h1 className="aboutTitle">{t('about.aboutTitle')}</h1>
                    <p className="aboutDescription">{t('about.aboutDescription')}</p>
                    <div className="home-header-btn">
                        <Button buttonStyle="btn--secondary" buttonSize="btn--medium" name={t('btn.appoint')} />
                        <div className="outline-button">
                            <Button buttonStyle="btn--outline" buttonSize="btn--small" name={t('btn.services')} />
                        </div>
                    </div>
                </div>
            </Banner>
            <NavBar />
            <Audit />
            <OurServices />
            <FirstClassAuditor />
            <MeetOurTeam />
            <CardImage />
            <SuccesfulCases />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Home