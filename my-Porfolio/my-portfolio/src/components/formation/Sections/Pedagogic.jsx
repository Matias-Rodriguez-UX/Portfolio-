import React from "react";
import { useTranslation } from 'react-i18next'

export default function Pedagogic() {
    const [t, i18n] = useTranslation("global")

    return (
        <section className="container formation-system-section">
            <h4><strong>{t("spe.titleS")}</strong>{t("spe.title")}</h4>
            <h5><strong>{t("spe.institutionS")}</strong>{t("spe.institution")}</h5>
            <h6><strong>{t("spe.dateS")}</strong>{t("spe.date")}</h6>
            <img src="https://res.cloudinary.com/dcbax1feo/image/upload/v1679245879/assets/logo-v_qlnhvv.png" alt="" style={{ width: '96px', height: "110" }} />
        </section>
    )
}