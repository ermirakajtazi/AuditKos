import React from "react"
import Image from "../../shared/Image"
import cert from "../../../assets/cert.png"
import Text from "../../shared/Text"
import { useTranslation } from 'react-i18next';
const CertifiedAccountant = () => {
    const { t } = useTranslation();
    return (
        <div className="certificate-container">
            <Text title={t('accountant.title')}
                description={t('accountant.description')}
                description1={t('accountant.description1')} />
            <Image img={cert} />
        </div>
    )
}

export default CertifiedAccountant