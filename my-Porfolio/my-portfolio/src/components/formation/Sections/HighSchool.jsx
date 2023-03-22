import React from "react";
import { useTranslation } from 'react-i18next'

export default function HighSchool() {
    const [t, i18n] = useTranslation("global")

    return (
        <section className="container formation-system-section">
            <h4><strong>{t("technical.titleS")}</strong>{t("technical.title")}</h4>
            <h5><strong>{t("technical.institutionS")}</strong>{t("technical.institution")}</h5>
            <h6><strong>{t("technical.dateS")}</strong>{t("technical.date")}</h6>
        </section>
    )
}