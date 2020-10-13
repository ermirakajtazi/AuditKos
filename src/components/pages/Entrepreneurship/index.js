import React from "react"
import Header from "../../shared/Header"
import Banner from "../../shared/Banner"
import NavBar from "../../shared/NavBar"
import EntrepreneurshipCertification from "./EntrepreneurshipCertification"
import EntrepreneurshipTrainings from "./EntrepreneurshipTrainings"
import Subscribe from "../../shared/Subscribe"
import SuccesfulCases from "../../shared/SuccesfulCases"
import Footer from "../../shared/Footer"
import cmaBanner from "../../../assets/cmaBanner.png"
import { useTranslation } from 'react-i18next';

const Entrepreneurship = () => {
    const { t } = useTranslation();
    return (
        <div id="container">
            <Header />
            <Banner img={cmaBanner} height={"642px"}>
                <div className="banner-content-pages">
                    <p>{t('certificate.p')}</p>
                    <h1>{t('enter.h1')}</h1>
                </div>
            </Banner>
            <NavBar />
            <EntrepreneurshipCertification/>
            <EntrepreneurshipTrainings/>
            <Subscribe />
            <SuccesfulCases />
            <Footer />
        </div>
    )
}

export default Entrepreneurship