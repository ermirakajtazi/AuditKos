import React from "react"
import { Button } from "../Button"
import cards from "../../../assets/cards.png"
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Partnership = () => {
    const { t } = useTranslation();
    return (
        <div className="partnership-container">
            <div className="cert" data-aos="zoom-in-right">
                <h1>{t('partnership.h1')}</h1>
                <h3>{t('partnership.h3')}</h3>
                <p>{t('partnership.p')}</p>
                <Button buttonStyle="btn--secondary" buttonSize="btn--medium" name={t('btn.readMore')} />
            </div>
            <div data-aos="zoom-in-left">
                <img src={cards}></img>
            </div>
        </div>
    )
}

export default Partnership