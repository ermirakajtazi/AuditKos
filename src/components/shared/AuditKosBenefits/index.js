import React from "react"
import { Button } from '../Button/index';
import download from '../../../assets/download.png'
import book from '../../../assets/book.png'
import exam from '../../../assets/exam.png'
import online from '../../../assets/online.png'
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
const AuditKosBenefits = (props) => {
    const { t } = useTranslation();
    return (
        <div className="benefits" style={{
            backgroundImage: `url(${props.img})`
        }} >
            <h2>{t('benefits.h2')}</h2>
            <div className="benefits-container">
                <div className="benefits-list">
                    <div className="list-container" data-aos="zoom-in-right">
                        <div className="image"><img src={download}></img></div>
                        <h3>{t('benefits.title')}</h3>
                        <p>{t('benefits.paragraph')}</p>
                    </div>
                    <div className="list-container" data-aos="zoom-in-right">
                        <div className="image"><img src={exam}></img></div>
                        <h3>{t('benefits.title1')}</h3>
                        <p>{t('benefits.paragraph1')}</p>
                    </div>
                </div>
                <div className="benefits-list" data-aos="zoom-in-left">
                    <div className="list-container">
                        <div className="image"><img src={book}></img></div>
                        <h3>{t('benefits.title2')}</h3>
                        <p>{t('benefits.paragraph2')}</p>
                    </div>
                    <div className="list-container" data-aos="zoom-in-left">
                        <div className="image"><img src={online}></img></div>
                        <h3>{t('benefits.title3')}</h3>
                        <p>{t('benefits.paragraph3')}</p>
                    </div>
                </div>
            </div>
            <div className="benefits-button">
                <Button buttonStyle="btn--secondary" buttonSize="btn--medium" name={t('btn.apply')} />
            </div>
        </div >
    )
}

export default AuditKosBenefits