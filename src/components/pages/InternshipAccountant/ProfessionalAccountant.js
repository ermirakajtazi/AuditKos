import React from "react"
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const ProfessionalAccountant=()=>{
    const { t } = useTranslation();
    return(
        <div className="professions-container">
            <div>
    <h1>{t('profInternText.h1')}</h1>
                <p>{t('profInternText.p')}</p>
            </div>
            <div className="prof-list"> 
            {t('profIntership').map((item, index) => {
                    return (
                        <ul className="listItems" key={index} >
                            <li data-aos="zoom-in">
                                <h4>{item.link1}</h4>
                                <h4>{item.link2}</h4>
                                <h4>{item.link3}</h4>
                            </li >
                            <li data-aos="zoom-in">
                                <h4>{item.link4}</h4>
                                <h4>{item.link5}</h4>
                                <h4>{item.link6}</h4>
                            </li>
                        </ul>
                    );
                })}
            </div>
        </div>
    )
}

export default ProfessionalAccountant