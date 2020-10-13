import React from "react"
import Header from "../../shared/Header"
import Banner from "../../shared/Banner"
import NavBar from "../../shared/NavBar"
import CertifiedAccounting from "./CertifiedAccounting"
import TraningMembers from "../../shared/TrainingMembers"
import AuditKosBenefits from "./../../shared/AuditKosBenefits"
import PartnershipICB from "../../shared/PartnershipICB"
import Professions from "./Professions"
import Subscribe from "../../shared/Subscribe"
import SuccesfulCases from "../../shared/SuccesfulCases"
import Footer from "../../shared/Footer"
import accountingBanner from "../../../assets/accountingBanner.png"
import accountingBenefits from "../../../assets/accountingBenefits.png"
import { useTranslation } from 'react-i18next';
const AccountingTechnician = () => {
    const { t } = useTranslation();
    return (
        <div id="container">
            <Header />
            <Banner img={accountingBanner} height={"642px"}>
                <div className="banner-content-pages">
                    <p>{t('certificate.p')}</p>
                    <h1>{t('certificate.h1')}</h1>
                </div>
            </Banner>
            <NavBar />
            <CertifiedAccounting />
            <TraningMembers />
            <AuditKosBenefits img={accountingBenefits} />
            <PartnershipICB />
            <Professions />
            <Subscribe />
            <SuccesfulCases />
            <Footer />
        </div>
    )
}

export default AccountingTechnician