import React from "react"
import { Button } from "../../shared/Button"
import { useTranslation } from 'react-i18next';

const TestimonialBody = (props) => {
    const { t } = useTranslation();
    return (
        <div className="test-container">
            <h2>{props.name}</h2>
            <h3>{props.job}</h3>
            <div class="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <hr />
            <div className="qoute-container">
                <i class="fas fa-quote-left"></i>
                <h3>{props.quotes}</h3>
                <h3>{props.quotes1}</h3>
            </div>
            <Button buttonStyle="btn--secondary" buttonSize="btn--medium" name={t('btn.readMore')} />
        </div>
    )
}

export default TestimonialBody