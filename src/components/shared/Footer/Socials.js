import React from "react"
import twitter from "../../../assets/twitter.png"
import facebook from "../../../assets/facebook.png"
import instagram from "../../../assets/instagram.png"
import youtube from "../../../assets/youtube.png"
import { useTranslation } from 'react-i18next';
import Languages from "../Languges"
export const Socials = () => {
    const { t } = useTranslation();

    return (

        <div className="bottomFooter">
            <span className="rights">
                <div className="copy-right">
                    <i class="far fa-copyright"></i>
                    <p>AuditKos 2020</p>
                </div>
                <p>{t('socialLinks')}</p>
            </span>
            <span className="socialLinks">
                <a href="/"><img src={twitter} alt=''></img></a>
                <a href="https://www.facebook.com/AuditKos-100135791840066/" ><img src={facebook} alt=''></img></a>
                <a href="https://www.instagram.com/auditkosovo/" ><img src={instagram} alt=''></img></a>
                <a href="/" ><img src={youtube} alt=''></img></a>
            </span>
            <Languages />

        </div>
    )
}