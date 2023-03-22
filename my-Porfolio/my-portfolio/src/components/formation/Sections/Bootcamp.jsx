import React from "react";
import { useTranslation } from 'react-i18next'

export default function Bootcamp() {
    const [t, i18n] = useTranslation("global")

    return (
        <section className="container formation-system-section">
            <h4><strong>{t("bootcamp.titleS")}</strong>{t("bootcamp.title")}</h4>
            <h5><strong>{t("bootcamp.institutionS")}</strong>{t("bootcamp.institution")}</h5>
            <h6><strong>{t("bootcamp.dateS")}</strong>{t("bootcamp.date")}</h6>
            <a href='https://certificates.soyhenry.com/new-cert?id=01907b43009fbf36a1c8f538822925e1f34e4afe9529ffd2b0e08454eb190d21' target="_blank" rel="noreferrer">
                <img src="https://res.cloudinary.com/dcbax1feo/image/upload/v1679244618/assets/titulo_henry_bpsbbe.png" alt="" style={{ height: '110px', width: 'auto' }} />
            </a>
        </section>
    )
}