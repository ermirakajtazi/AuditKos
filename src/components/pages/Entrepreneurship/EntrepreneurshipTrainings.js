import React from "react"
import { Button } from "../../shared/Button"
import idCard from "../../../assets/idCard.png"
import enterWork from "../../../assets/enterWork.png"
import document from "../../../assets/document.png"
import research from "../../../assets/research.png"
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const EntrepreneurshipTrainings = () => {
    const { t } = useTranslation();
    return (
        <div className="benefits1">
            <h2>{t('enter.h1')}</h2>
            <div className="benefits-container">
                <div className="benefits-list-second">
                    <div className="list-container" data-aos="zoom-in-left">
                        <div className="image"><img src={idCard}></img></div>
                        <div className="enterpre-h5">
                            <h5>{t('enter.h3')}</h5>
                        </div>
                    </div>
                    <div className="list-container" data-aos="zoom-in-left">
                        <div className="image"><img src={document}></img></div>
                        <div className="enterpre-h5">
                            <h5>{t('enter.h32')}</h5>
                        </div>
                    </div>
                </div>
                <div className="benefits-list">
                    <div className="list-container" data-aos="zoom-in-right">
                        <div className="image"><img src={enterWork}></img></div>
                        <div className="enterpre-h5">
                            <h5>{t('enter.h31')}</h5>
                        </div>
                    </div>
                    <div className="list-container" data-aos="zoom-in-right">
                        <div className="image"><img src={research}></img></div>
                        <div className="enterpre-h5">
                            <h5>{t('enter.h33')}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="benefits-button">
                <Button buttonStyle="btn--secondary" buttonSize="btn--medium" name={t('btn.apply')} />
            </div>
        </div>
    )
}

export default EntrepreneurshipTrainings