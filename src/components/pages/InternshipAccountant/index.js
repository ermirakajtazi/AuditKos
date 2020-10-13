import React from "react"
import Header from "../../shared/Header"
import Banner from "../../shared/Banner"
import NavBar from "../../shared/NavBar"
import CertifiedAccountant from "./CertifiedAccountant"
import TrainingMembers from "./TrainingMembers"
import AuditKosBenefits from "../../shared/AuditKosBenefits"
import PartnershipICB from "../../shared/PartnershipICB"
import ProfessionalAccountant from "./ProfessionalAccountant"
import Subscribe from "../../shared/Subscribe"
import SuccesfulCases from "../../shared/SuccesfulCases"
import Footer from "../../shared/Footer"
import internshipBanner from "../../../assets/internshipBanner.png"
import internshipBenefits from "../../../assets/internshipBenefits.png"
import { useTranslation } from 'react-i18next';
const InternshipAccountant=()=>{
    const { t } = useTranslation();
    return(
        <div id="container">
          <Header/>
          <Banner img={internshipBanner} height={"642px"}>
                <div className="banner-content-pages">
                    <p> {t('certificate.p')}</p>
                    <h1>{t('accountant.h1')}</h1>
                </div>
            </Banner>
            <NavBar />
          <CertifiedAccountant/>
          <TrainingMembers/>
          <AuditKosBenefits img={internshipBenefits}/>
          <PartnershipICB/>
          <ProfessionalAccountant/>
          <Subscribe/>
          <SuccesfulCases />
          <Footer/>
        </div>
    )
}

export default InternshipAccountant