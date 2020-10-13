import React, { useState } from "react"
import { Button } from "../../shared/Button"
import { useTranslation } from 'react-i18next';

const Appointment = () => {
    const { t } = useTranslation();
    const [values, setValues] = useState({});
    const handleChange = (event) => {
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    }
    return (
        <div className="pages">
            <div className="pages-container">
                <div className="info">
    <div className="app-text"><h2>{t('appointment.h2')}</h2></div>
                </div>
                <div className="contact-form">
                    <h1 className="form-text">{t('appointment.h1')}</h1>
                    <input type="text" name="name" placeholder="Name" className="input-pages" />
                    <input name="email"
                        type="text"
                        placeholder="Email address"
                        value={values.name}
                        onChange={handleChange}
                        className="input-pages" />
                    <input type="text" name="name" placeholder="Date" className="input-pages" />
                    <textarea type="text" name="message" placeholder="Message" className="textarea" />
                    <div className="appointment-buttons">
                        <div className="send-btn"><Button buttonStyle="btn--secondary" buttonSize="btn--medium" name={t('appointment.sendBtn')} /></div>
                        <Button buttonStyle="btn--outline2" buttonSize="btn--medium" name={t('appointment.resetBtn')} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Appointment