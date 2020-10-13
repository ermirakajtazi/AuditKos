import React from "react"
import user from "../../../assets/user.png"
import diagnosis from "../../../assets/diagnosis.png"
import pieChart from "../../../assets/pieChart.png"
import browser from "../../../assets/browser.png"
import about from "../../../assets/about.png"
import about2 from "../../../assets/about2.png"
import { Button } from "../../shared/Button"
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

export const Audit = () => {
    const { t } = useTranslation();
    return (
        <section className="audit">
            <div className="section1" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
                <div className="audit-content">
                    <h4>{t('audit-content.h4')}</h4>
                    <p>{t('audit-content.p')}</p>
                    <div className="list">
                        <ul>
                            <li className="image-list"><img src={user}></img><h3>{t('list.list1')}</h3></li>
                            <li className="image-list"><img src={diagnosis}></img><h3>{t('list.list2')}</h3></li>
                            <li className="image-list"><img src={pieChart}></img><h3>{t('list.list3')}</h3></li>
                            <li className="image-list"><img src={browser}></img><h3>{t('list.list4')}</h3></li>
                        </ul>
                    </div>
                    <div className="audit-btn1">
                    <Button buttonStyle="btn--secondary" buttonSize="btn--small" name={t('btn.learnM')} />
                    </div>
                </div>
                <div className="onImage" >
                    <img src={about}></img>
                </div>
            </div>
            <div className="section2" data-aos="fade-right" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
                <div className="onImage2">
                    <img src={about2}></img>
                </div>
                <div className="audit-content1">
                    <h4>{t('audit-content1.h4')}</h4>
                    <p>{t('audit-content1.p')}</p>
                    <span>{t('audit-content1.span')}</span>
                    <div className="audit-btn"><Button buttonStyle="btn--secondary" buttonSize="btn--small" name={t('btn.learnM')} /></div>
                </div>
            </div>
        </section>
    )
}