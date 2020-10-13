import React from "react"
import Image from "../../shared/Image"
import realChange from "../../../assets/realChange.png"
import { useTranslation } from 'react-i18next';
const RealChange = () => {
    const { t } = useTranslation();
    return (
        <div className="certificate-container" >
            <div className="real-change" data-aos="flip-left">
                <h1>{t('real.h1')}</h1>
                <h3>{t('real.h3')}</h3>
                <p>{t('real.p')}</p>
            </div>
            <div>
                <Image img={realChange} />
            </div>
        </div>
    )
}
export default RealChange