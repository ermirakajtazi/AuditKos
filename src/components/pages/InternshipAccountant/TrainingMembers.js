import React from "react"
import { useTranslation } from 'react-i18next';
const TrainingMembers = () => {
    const { t } = useTranslation();
    return (
        <div className="traning-container">
            <h2>{t('accountant.h2')}</h2>
            <p>{t('accountant.p')}</p>
        </div>
    )
}

export default TrainingMembers