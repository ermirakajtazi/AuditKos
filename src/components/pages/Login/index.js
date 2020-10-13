import React from "react"
import { Button } from "../../shared/Button"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';

const Login = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="pages">
                <div className="pages-container">
                    <div className="info">
                        <div className="info-login">
                            <h2>{t('login.h2')} </h2>
                            <div><h3>{t('login.h3')}</h3></div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <div className="login-title">
                            <h1 >{t('login.h1')}</h1>
                            <p>{t('login.p')}</p>
                        </div>
                        <input name="email"
                            type="text"
                            placeholder="Enter your email address"
                            className="login-mail" />
                        <input type="text" name="name" placeholder="Enter your password" className="login-password" />
                        <Button buttonStyle="btn--secondary" buttonSize="btn--exlarge" name={t('login.loginBtn')} />
                        <div className="link">
                            <Link to=""><h3>{t('login.password')}</h3></Link>
                            <div className="or">
                                <div className="left-divider"></div>
                                <h2>{t('login.or')}</h2>
                                <div className="right-divider"></div>
                            </div>
                            <div className="login-button">
                                <Button buttonStyle="btn--secondary" buttonSize="btn--exlarge" name={t('login.accountBtn')} />
                            </div>
                            <Button buttonStyle="btn--third" buttonSize="btn--exlarge" name={t('login.signinBtn')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login