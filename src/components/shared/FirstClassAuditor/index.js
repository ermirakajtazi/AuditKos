import React from "react"
import { Button } from "../Button"
import value from "../../../assets/value.png"
import cup from "../../../assets/cup.png"
import experience from "../../../assets/experience.png"
import expert from "../../../assets/expert.png"
import { useTranslation } from 'react-i18next';
const FirstClassAuditor = (props) => {
    const { t } = useTranslation();
    return (
        <div className="first-auditor">
            <h2>{t('first-auditor.h2')}</h2>
            <h1>{t('first-auditor.h1')}</h1>
            <p>{t('first-auditor.p')}</p>
            <div className="values">
                <ul>
                    <li className="numbers">850</li>
    <li className="text">{t('values.text1')}</li>
                    <li className="img"><img src={value}></img></li>
                </ul>
                <ul>
                    <li className="numbers">18</li>
                    <li className="text">{t('values.text2')}</li>
                    <li className="img"><img src={cup}></img></li>
                </ul>
                <ul>
                    <li className="numbers">10</li>
                    <li className="text">{t('values.text3')}</li>
                    <li className="img"><img src={experience}></img></li>
                </ul>
                <ul>
                    <li className="numbers">16</li>
                    <li className="text">{t('values.text4')}</li>
                    <li className="img"><img src={expert}></img></li>
                </ul>
            </div>
            <div className="auditor-bnt">
            <Button buttonStyle="btn--secondary" buttonSize="btn--medium" name={t('btn.appoint')} />
            </div>
        </div>
    )
}

export default FirstClassAuditor