import React, { useState } from "react"
import Map from "../../../assets/Map.png"
import Mail from "../../../assets/Mail.png"
import phone from "../../../assets/phone.png"
import { Button } from "../../shared/Button"
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const [values, setValues] = useState({});
    const handleChange = (event) => {
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    }
    return (
        <div className="pages">
            <div className="pages-container">
                <div className="info">
                    <div className="info-content">
                        <h2>{t('contact.h2')}</h2>
                        <h1>{t('contact.h1')}</h1>
                        <div className="contact-info">
                            <h3>{t('contact.h3')}</h3>
                            <ul>
                                <li className="info-list"><img src={Map}></img><p>{t('contact.list')}</p></li>
                                <li className="info-list"><img src={Mail}></img><p>{t('contact.list1')}</p></li>
                                <li className="info-list"><img src={phone}></img><p>{t('contact.list2')}</p></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <h1 className="contact-title">{t('contact.contactUs')}</h1>
                    <input type="text" name="name" placeholder="Name" className="input-pages" />
                    <input name="email"
                        type="text"
                        placeholder="Email address"
                        value={values.name}
                        onChange={handleChange}
                        className="input-pages" />
                    <textarea type="text" name="message" placeholder="Message" className="textarea" />
                    <Button buttonStyle="btn--secondary" buttonSize="btn--large" name={t('contact.submitBtn')} />
                </div>
            </div>
        </div>
    )
}

export default Contact