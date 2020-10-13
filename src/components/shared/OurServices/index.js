import React from "react"
import Slider from "./Slider"
import { useTranslation } from 'react-i18next';
const OurServices = () => {
    const { t } = useTranslation();
    return (
        <div className="services-container">
            <div className="services">
                <p>{t('services.p')}</p>
                <h1>{t('services.h1')}</h1>
            </div>
            <div className="ourServicesSlider">
                <Slider />
            </div>
        </div>
    )
}

export default OurServices