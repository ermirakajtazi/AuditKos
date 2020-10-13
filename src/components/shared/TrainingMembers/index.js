import React from "react"
import traningMembers from "../../../assets/traningMembers.png"
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
const TrainingMember = () => {
    const { t } = useTranslation();
    return (
        <div className="training-container">
            <div className="training-body">
                <h3>{t('training.h3')}</h3>
                <p>{t('training.p')}</p>
            </div>
            <img src={traningMembers} data-aos="zoom-in-left"></img>
        </div>
    )
}

export default TrainingMember