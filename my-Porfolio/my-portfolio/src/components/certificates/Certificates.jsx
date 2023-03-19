import React from "react";
import dataCerticates from './dataCertificates'
import './Certificates.css'

export default function Certificates() {

    return (
        <section className="certificates" id="certificates">
            <div className="container mt-4 pt-4">
                <h1 className="">Certificates</h1>
                <div></div>
                <div className="certificates-links">
                    {dataCerticates.map((el, index) =>
                        <a href={el.link} target="_blank" rel="noreferrer" className="align-middle links-to-certificates" key={index}>{el.name}</a>
                    )}
                </div>
            </div>
        </section>
    )
}