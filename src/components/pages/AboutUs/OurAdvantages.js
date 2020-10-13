import React from "react"
import work from "../../../assets/work.png"
import chat from "../../../assets/chat.png"
import watch from "../../../assets/watch.png"
import { useTranslation } from 'react-i18next';
const OurAdvantages = () => {
    const { t } = useTranslation();
    return (
        <div className="advatages">
            <div className="advatages-list">
                <h2>Our Advantages</h2>
                <div className="properties">
                    <img src={work} />
                    <div>
                        <h3>{t('advantages.title')}</h3>
                        <p>{t('advantages.paragraph')}</p>
                    </div>
                </div>
                <div className="properties">
                    <img src={chat} />
                    <div>
                        <h3>{t('advantages.title1')}</h3>
                        <p>{t('advantages.paragraph1')}</p>
                    </div>
                </div>
                <div className="properties">
                    <img src={watch} />
                    <div>
                        <h3>{t('advantages.title2')}</h3>
                        <p>{t('advantages.paragraph2')}</p>
                    </div>
                </div>
            </div>
            <div className="background-img"></div>
        </div>
    )
}

export default OurAdvantages