import React from "react";
import dataCerticates from './dataCertificates'
import dataCerticatesES from './dataCertificatesES'
import './Certificates.css'
import { useTranslation } from 'react-i18next'

export default function Certificates() {
    const [t, i18n] = useTranslation("global")



    return (
        <section className="certificates" id="certificates">
            <div className="container mt-4 pt-4">
                <h2 className="section-title">{t("certificates.title")}</h2>
                <div className="certificates-links">
                    {i18n.language === "es" ? dataCerticatesES.map((el, index) =>
                        <a href={el.link} target="_blank" rel="noreferrer" className="align-middle links-to-certificates" key={index}>{el.name}</a>
                    ) :
                        dataCerticates.map((el, index) =>
                            <a href={el.link} target="_blank" rel="noreferrer" className="align-middle links-to-certificates" key={index}>{el.name}</a>
                        )
                    }
                </div>
            </div>
        </section>
    )
}