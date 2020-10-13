import React from "react"
import avatar1 from "../../../assets/avatar1.png"
import avatar2 from "../../../assets/avatar2.png"
import avatar3 from "../../../assets/avatar3.png"
import socialSlider from "../../../assets/socialSlider.png"
import maltisa from "../../../assets/Maltisa.jpg"
import { useTranslation } from 'react-i18next';
import 'aos/dist/aos.css';

export const Avatar1 = () => {
    const { t } = useTranslation();
    return (

        <div className="avatar-section" >
            <img src={avatar1} className="avatar-img" />
            <div className="avatar-body" data-aos="zoom-in">
                <h4>Beart Rahmani</h4>
                <h3>{t('avatar.job')}</h3>
                <div className="avatar-description">
                    <p>{t('avatar.p')}</p>
                </div>
                <img alt="" src={socialSlider}></img>
            </div>
        </div>
    )
}

export const Avatar2 = () => {
    const { t } = useTranslation();
    return (
        <div className="avatar-section">
            <img src={avatar2} className="avatar-img" />
            <div className="avatar-body" data-aos="zoom-in">
                <h4>Burim Selimi</h4>
                <h3>{t('avatar.job1')}</h3>
                <div className="avatar-description">
                    <p>{t('avatar.p1')}</p>
                </div>
                <img alt="" src={socialSlider}></img>
            </div>
        </div>

    )
}

export const Avatar3 = () => {
    const { t } = useTranslation();
    return (
        <div className="avatar-section">
            <img src={maltisa} className="avatar-img" />
            <div className="avatar-body" data-aos="zoom-in">
                <h4>Maltisa Kenovci</h4>
                <h3>{t('avatar.job2')}</h3>
                <div className="avatar-description">
                    <p>{t('avatar.p2')}</p>
                </div>
                <img alt="" src={socialSlider}></img>
            </div>
        </div>
    )
}
export const Avatar4 = () => {
    const { t } = useTranslation();
    return (
        <div className="avatar-section">
            <img src={avatar3} className="avatar-img" />
            <div className="avatar-body" data-aos="zoom-in">
                <h4>Melinda Abazi</h4>
                <h3>{t('avatar.job3')}</h3>
                <div className="avatar-description">
                    <p>{t('avatar.p3')}</p>
                </div>
                <img alt="" src={socialSlider}></img>
            </div>
        </div>
    )
}