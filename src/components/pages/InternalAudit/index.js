import React from "react"
import Header from "../../shared/Header"
import Banner from "../../shared/Banner"
import NavBar from "../../shared/NavBar"
import CertificatedInternal from "./CertificatedInternal"
import TrainingMembers from "../../shared/TrainingMembers"
import AuditKosBenefits from "../../shared/AuditKosBenefits"
import RealChange from "../../shared/RealChange"
import ProfessionalInternal from "./ProfessionalInternal"
import Subscribe from "../../shared/Subscribe"
import SuccesfulCases from "../../shared/SuccesfulCases"
import Footer from "../../shared/Footer"
import internalBanner from "../../../assets/internalBanner.png"
import internalBenefits from "../../../assets/internalBenefits.png"
import { useTranslation } from 'react-i18next';
const InternalAudit = () => {
    const { t } = useTranslation();
    return (
        <div id="container">
            <Header />
            <Banner img={internalBanner} height={"642px"}>
                <div className="banner-content-pages">
                    <p>{t('certificate.p')}</p>
                    <h1>{t('internal.h1')}</h1>
                </div>
            </Banner>
            <NavBar />
            <CertificatedInternal />
            <TrainingMembers />
            <AuditKosBenefits img={internalBenefits} />
            <RealChange />
            <ProfessionalInternal />
            <Subscribe />
            <SuccesfulCases />
            <Footer />
        </div>
    )
}

export default InternalAudit