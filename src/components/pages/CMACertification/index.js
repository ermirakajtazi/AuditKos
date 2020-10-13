import React from "react"
import Header from "../../shared/Header"
import Banner from "../../shared/Banner"
import NavBar from "../../shared/NavBar"
import CMA from "./CMA"
import CMATranings from "./CMATranings"
import CMAList from "./CMAList"
import Subscribe from "../../shared/Subscribe"
import SuccesfulCases from "../../shared/SuccesfulCases"
import Footer from "../../shared/Footer"
import cmaBanner from "../../../assets/cmaBanner.png"
import { useTranslation } from 'react-i18next';
const CMACertification = () => {
    const { t } = useTranslation();
    return (
        <div id="container">
            <Header />
            <Banner img={cmaBanner} height={"642px"}>
                <div className="banner-content-pages">
                    <p>{t('certificate.p')}</p>
                    <h1>{t('cma.h1')}</h1>
                </div>
            </Banner>
            <NavBar />
            <CMA />
            <CMATranings />
            <CMAList />
            <Subscribe />
            <SuccesfulCases />
            <Footer />
        </div>

    )
}

export default CMACertification