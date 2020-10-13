import React, { useState } from "react"
import { Button } from "../../shared/Button"
import { useTranslation } from 'react-i18next';

const Subscribe = () => {
    const { t } = useTranslation();
    const [values, setValues] = useState({});
    const handleChange = (event) => {
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    }
    return (
        <div className="subscribe">
            <h1>{t('subscribe.title')}</h1>
            <p> {t('subscribe.p')}</p>
            <div className="input">
                <input
                    name="email"
                    type="text"
                    placeholder={t('subscribe.placeholder')}
                    value={values.name}
                    onChange={handleChange}
                    className="email-input"
                />
                <div className="button">
                    <Button buttonStyle="btn--secondary" buttonSize="btn--large" name={t('subscribe.btn')} />
                </div>
            </div>
        </div>
    );
}

export default Subscribe

