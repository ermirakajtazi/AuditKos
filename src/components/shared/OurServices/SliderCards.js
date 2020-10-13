import React from "react"
import { Button } from "../../shared/Button"
import work from "../../../assets/work.png"
import accounting from "../../../assets/accounting.png"
import searchSlider from "../../../assets/searchSlider.png"
import reviewSlider from "../../../assets/reviewSlider.png"
import { useTranslation } from 'react-i18next';
export const Card1 = () => {
    const { t } = useTranslation();
    return (
        <div className="container-cards">
            <div className="header-card">
                <div className="image">
                    <img src={work} className="card-image"></img>
                </div>
                <h2>{t('header-card.title1')}</h2>
            </div>
            <div className="body-card">
                <p>{t('body-card.p1')}</p>
                <div className="card-buttons"><Button buttonStyle="btn--outline" buttonSize="btn--small" name={t('btn.learnM')}></Button></div>
            </div>
        </div>
    )
}
export const Card2 = () => {
    const { t } = useTranslation();
    return (
        <div className="container-cards">
            <div className="header-card">
                <div className="image">
                    <img src={accounting} className="card-image"></img>
                </div>
                <h2>{t('header-card.title2')}</h2>
            </div>
            <div className="body-card">
                <p> {t('body-card.p2')}</p>
                <div className="card-buttons"><Button buttonStyle="btn--outline" buttonSize="btn--small" name={t('btn.learnM')}></Button></div>
            </div>
        </div>
    )
}
export const Card3 = () => {
    const { t } = useTranslation();
    return (
        <div className="container-cards">
            <div className="header-card">
                <div className="image">
                    <img src={searchSlider} className="card-image"></img>
                </div>
                <h2>{t('header-card.title2')}</h2>
            </div>
            <div className="body-card">
                <p>{t('body-card.p3')} </p>
                <div className="card-buttons"><Button buttonStyle="btn--outline" buttonSize="btn--small" name={t('btn.learnM')}></Button></div>
            </div>
        </div>
    )
}
export const Card4 = () => {
    const { t } = useTranslation();
    return (
        <div className="container-cards">
            <div className="header-card">
                <div className="image">
                    <img src={reviewSlider} className="card-image"></img>
                </div>
                <h2>{t('header-card.title4')}</h2>
            </div>
            <div className="body-card">
                <p> {t('body-card.p4')}</p>
                <div className="card-buttons"><Button buttonStyle="btn--outline" buttonSize="btn--small" name={t('btn.learnM')}></Button></div>
            </div>
        </div>

    )
}
