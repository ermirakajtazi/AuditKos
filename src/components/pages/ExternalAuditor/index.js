import React from "react"
import Header from "../../shared/Header"
import Banner from "../../shared/Banner"
import NavBar from "../../shared/NavBar"
import CertificatedExternal from "./CertificatedExternal"
import TrainingMembers from "../../shared/TrainingMembers"
import AuditKosBenefits from "../../shared/AuditKosBenefits"
import RealChange from "../../shared/RealChange"
import Professions from "./Professions"
import Subscribe from "../../shared/Subscribe"
import SuccesfulCases from "../../shared/SuccesfulCases"
import Footer from "../../shared/Footer"
import externalBanner from "../../../assets/externalBanner.png"
import externalBenefits from "../../../assets/externalBenefits.png"
const ExternalAuditor = () => {
    return (
        <div id="container">
            <Header />
            <Banner img={externalBanner} height={"642px"}>
                <div className="banner-content-pages">
                    <p>Training for</p>
                    <h1>External Auditor</h1>
                </div>
            </Banner>
            <NavBar />
            <CertificatedExternal />
            <TrainingMembers />
            <AuditKosBenefits img={externalBenefits} />
            <RealChange />
            <Professions />
            <Subscribe />
            <SuccesfulCases />
            <Footer />
        </div>
    )
}

export default ExternalAuditor