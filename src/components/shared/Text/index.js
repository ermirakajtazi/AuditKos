import React from "react"
import { Button } from "../Button"
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Text = (props) => {
    const { t } = useTranslation();
    const { title, description, description1 } = props
    return (
        <div >
            <div className="certificate" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{description1}</p>
                <Button buttonStyle="btn--secondary" buttonSize="btn--medium" name={t('btn.apply')} />
            </div>
        </div>
    )
}

export default Text