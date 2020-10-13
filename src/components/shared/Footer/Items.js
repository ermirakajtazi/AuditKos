import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
export const Items = () => {
    const { t } = useTranslation();
    useEffect(() => {
        AOS.init({ duration: 3000 })
    }, [])
    return (
        <div className="items">
            {t("footerLinks").map((item, index) => {
                return (
                    <ul key={index} data-aos="zoom-in">
                        <Link to={item.path}>
                            <li> <h3> {item.title}</h3>
                                <h4>{item.link1}</h4>
                                <h4>{item.link2}</h4>
                                <h4>{item.link3}</h4>
                                <h4>{item.link4}</h4></li>
                        </Link>
                    </ul>
                );
            })}

        </div>
    )
}