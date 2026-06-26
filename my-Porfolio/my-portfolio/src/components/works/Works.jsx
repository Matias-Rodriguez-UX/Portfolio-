import React from "react";
import { Row, Col } from 'react-bootstrap'
import './Works.css'
import { useTranslation } from 'react-i18next'

export default function Works() {
    const [t] = useTranslation("global")
    const items = t("works.items", { returnObjects: true })
    const jobs = Array.isArray(items) ? items : []

    return (
        <section className="works-section" id="works">
            <div className="container pt-4">
                <h2 className="section-title">{t("works.title")}</h2>
                <Row>
                    {jobs.map((job, i) => (
                        <Col xs={12} md={6} key={i} className="mb-4">
                            <div className="info-work">
                                <h3 className="info-work__role">{job.position}</h3>
                                <p className="info-work__company">{job.company}</p>
                                <p className="info-work__meta">{job.date} · {job.from}</p>
                                <p className="info-work__desc">{job.description}</p>
                                <ul className="info-work__tasks">
                                    {(job.tasks || []).map((task, j) => (
                                        <li key={j}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    )
}
