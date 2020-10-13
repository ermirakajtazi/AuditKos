import React from "react"
import { Button } from "../../shared/Button"
import classImg from "../../../assets/classImg.png"
import flexibility from "../../../assets/flexibility.png"
import assessment from "../../../assets/assessment.png"
import online from "../../../assets/online.png"
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
const CMATranings = () => {
    const { t } = useTranslation();
    return (
        <div className="benefits1">
            <h2>{t('cma.benefits')}</h2>
            <div className="benefits-container">
                <div className="benefits-list">
                    <div className="list-container"  data-aos="zoom-in-left">
                        <div className="image"><img src={classImg}></img></div>
                        <h3>{t('cma.h3')}</h3>
                        <p className="paragraphB">{t('cma.paragraph')}</p>
                    </div>
                    <div className="list-container" data-aos="zoom-in-left">
                        <div className="image"><img src={flexibility}></img></div>
                        <h3>{t('cma.h31')}</h3>
                        <p>{t('cma.paragraph1')}</p>
                    </div>
                </div>
                <div className="benefits-list-second">
                    <div className="list-container"  data-aos="zoom-in-right">
                        <div className="image"><img src={assessment}></img></div>
                        <h3>{t('cma.h32')}</h3>
                        <p>{t('cma.paragraph2')}</p>
                    </div>
                    <div className="list-container"  data-aos="zoom-in-right">
                        <div className="image"><img src={online}></img></div>
                        <h3>{t('cma.h33')}</h3>
                        <p>{t('cma.paragraph3')}</p>
                    </div>
                </div>
            </div>
            <div className="benefits-button">
                <Button buttonStyle="btn--secondary" buttonSize="btn--medium" name={t('btn.apply')} />
        </div>
        </div>
    )
}

export default CMATranings