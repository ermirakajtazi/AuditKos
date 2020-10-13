import React from "react"
import Text from "../../shared/Text"
import Image from "../../shared/Image"
import enterprenure from "../../../assets/enterprenure.png"
import { useTranslation } from 'react-i18next';
const EntrepreneurshipCertification = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="certificate-container">
                <Text title={t('enter.title')}
                    description={t('enter.description')}
                    description1={t('enter.description1')} />
                <Image img={enterprenure} />
            </div>
            <h2 className="enterpre-h2">{t('enter.h2')}</h2>
        </div>
    )
}

export default EntrepreneurshipCertification