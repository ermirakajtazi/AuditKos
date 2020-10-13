import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

const Languages = () => {
    const [lang, setLang] = useState(localStorage.getItem("i18nextLng"));
    const { i18n } = useTranslation();

    const handleChange = (countryCode) => {
        setLang(countryCode);
        i18n.changeLanguage(countryCode);
    };

    return (
        <ReactFlagsSelect
            defaultCountry="US" countries={["US", "DE", "AL"]}
            onSelect={handleChange}
        />
    );
};

export default Languages;