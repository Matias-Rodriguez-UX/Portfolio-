import React from "react";
import { useTranslation } from 'react-i18next'

export default function University() {
    const [t, i18n] = useTranslation("global")

    return (
        <section className="container formation-system-section">
            <h4><strong>{t("university.titleS")}</strong>{t("university.title")}</h4>
            <h5><strong>{t("university.institutionS")}</strong>{t("university.institution")}</h5>
            <h6><strong>{t("university.dateS")}</strong>{t("university.date")}</h6>
            <img src="https://res.cloudinary.com/dcbax1feo/image/upload/v1679245239/assets/UNLP-e1667509972531-removebg-preview_ono0mo.png" alt="" style={{ width: '201px' }} />
        </section>
    )
}