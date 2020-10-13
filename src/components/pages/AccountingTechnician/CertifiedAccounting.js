import React from "react"
import technician from "../../../assets/technician.png"
import Image from "../../shared/Image"
import Text from "../../shared/Text"
import { useTranslation } from 'react-i18next';

const CertifiedAccounting = () => {
    const { t } = useTranslation();
    return (
        <div className="certificate-container">
            <Text title={t('certificate.title')}
                description={t('certificate.description')}
                description1={t('certificate.description1')} />
         <Image img={technician} />
        </div>
    )
}

export default CertifiedAccounting