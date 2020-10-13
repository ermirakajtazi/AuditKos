import React from "react"
import Text from "../../shared/Text"
import Image from "../../shared/Image"
import internalAudit from "../../../assets/internalAudit.png"
import { useTranslation } from 'react-i18next';
const CertificatedInternal = (props) => {
    const { t } = useTranslation();
    return (
        <div className="certificate-container">
        <Text title={t('internal.title')}
            description={t('internal.description')}
            description1={t('internal.description1')}/> 
        <Image img={internalAudit} />
    </div>
    )
}
export default CertificatedInternal