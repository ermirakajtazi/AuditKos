import React from "react"
import Image from "../../shared/Image"
import cma from "../../../assets/cma.png"
import Text from "../../shared/Text"
import { useTranslation } from 'react-i18next';
const CMA = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="certificate-container">
                <Text title={t('cma.title')}
                    description={t('cma.description')}
                    description1={t('cma.description1')} />
                <Image img={cma} />
            </div>
            <h2 className="cma-h2">{t('cma.h2')}</h2>
        </div>
    )
}

export default CMA