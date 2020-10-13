import React, { useState } from "react"
import Map from "../../../assets/Map.png"
import Mail from "../../../assets/Mail.png"
import phone from "../../../assets/phone.png"
import { Button } from "../../shared/Button"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';

const SignUp = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="pages">
                <div className="pages-container">
                    <div className="info">
                        <div className="info-content">
                            <h2>{t('signUp.h2')}</h2>
                            <div className="signup-info">
                                <h3>{t('signUp.h3')}</h3>
                                <ul>
                                    <li className="info-list"><img src={Map}></img><p>{t('signUp.list')}</p></li>
                                    <li className="info-list"><img src={Mail}></img><p>{t('signUp.list1')}</p></li>
                                    <li className="info-list"><img src={phone}></img><p>{t('signUp.list2')}</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h1 className="signup-title">{t('signUp.h1')}</h1>
                        <input type="text" name="name" placeholder="Name" className="input-name" />
                        <input name="email"
                            type="text"
                            placeholder="Email address"
                            className="input-mail" />
                        <input type="text" name="name" placeholder="Password" className="input-password" />
                        <input type="text" name="name" placeholder="Confirm Password" className="input-password" />
                        <Button buttonStyle="btn--secondary" buttonSize="btn--large" name={t('signUp.signupBtn')} />
                        <div className="link">
                            <h4>{t('signUp.h4')}</h4>
                            <Link to="/sign-in"><h3>{t('signUp.signIn')}</h3></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default SignUp