import React from "react"
import { Button } from "../../shared/Button"
import Image from "../../shared/Image"
import adgroup from "../../../assets/adgroup.png"
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
const ChooseUs = () => {
    const { t } = useTranslation();
    return (
        <div className="section-1">
            <div className="choose-us" data-aos="fade-up">
                <div>
                    <h1>{t('aboutUs.title')}</h1>
                    <p>{t('aboutUs.paragraph')}</p>
                    <div className="about-btn">
                        <Button buttonStyle="btn--secondary" buttonSize="btn--medium" name={t('btn.learnM')} />
                    </div>
                </div>
                <div>
                    <h1>{t('aboutUs.title1')}</h1>
                    <p>{t('aboutUs.paragraph1')}</p>
                    <Button buttonStyle="btn--secondary" buttonSize="btn--medium" name={t('btn.learnM')} />
                </div>
            </div>
            <div className="choose-us">
                <div className="img-Comp">
                    <Image img={adgroup} />
                </div>
                <div data-aos="fade-up">
                    <h1>{t('aboutUs.title2')}</h1>
                    <p className="paragraph">{t('aboutUs.paragraph2')} </p>
                    <Button buttonStyle="btn--secondary" buttonSize="btn--medium" name={t('btn.learnM')} />
                </div>
            </div>
        </div>
    )
}

export default ChooseUs