import React from "react";
import { Row, Col } from 'react-bootstrap'
import './Works.css'
import { useTranslation } from 'react-i18next'

export default function Works() {
    const [t, i18n] = useTranslation("global")

    return (
        <section className="works-section" id="works" >
            <div className="container pt-4">
                <h1>{t("works.title")}</h1>
                <Row >
                    <Col sm={12} xs={12} md={6} lg={6} xl={6} xxl={6}>
                        <div className="info-work">
                            <h3>{t("works.work1.position")}</h3>
                            <h5>{t("works.work1.companie")}</h5>
                            <h6>{t("works.work1.date")} </h6>
                            <h6>{t("works.work1.from")}</h6>
                            <br />
                            <p>{t("works.work1.description")}<br />
                                <br />
                                {t("works.work1.main")}<br />
                                <br />
                                •   {t("works.work1.task1")} <br />
                                •   {t("works.work1.task2")} <br />
                                •   {t("works.work1.task3")}<br />
                                •   {t("works.work1.task4")}<br />
                                •   {t("works.work1.task5")}</p>
                        </div>
                    </Col>
                    <Col sm={12} xs={12} md={6} lg={6} xl={6} xxl={6}>
                        <div className="info-work">
                            <h3>{t("works.work2.position")}</h3>
                            <h5>{t("works.work2.companie")}</h5>
                            <h6>{t("works.work2.date")}</h6>
                            <h6>{t("works.work2.from")}</h6>
                            <br />
                            <p>{t("works.work2.description")}<br />
                                <br />
                                {t("works.work2.main")}<br />
                                <br />
                                • {t("works.work2.task1")}<br />
                                • {t("works.work2.task2")} <br />
                                • {t("works.work2.task3")}<br />
                                • {t("works.work2.task4")}<br />
                                • {t("works.work2.task5")}<br />
                                • {t("works.work2.task6")}<br />
                                • {t("works.work2.task7")}<br />
                                • {t("works.work2.task8")}<br />
                                • {t("works.work2.task9")}<br />
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} xs={12} md={6} lg={6} xl={6} xxl={6}>
                        <div className="info-work">
                            <h3>{t("works.work3.position")}</h3>
                            <h5>{t("works.work3.companie")}</h5>
                            <h6>{t("works.work3.date")}</h6>
                            <h6>{t("works.work3.from")}</h6>
                            <br />
                            <p>{t("works.work3.description")}<br />
                                <br />
                                {t("works.work3.main")}<br />
                                <br />
                                • {t("works.work3.task1")}<br />
                                • {t("works.work3.task2")} <br />
                            </p>
                        </div>
                    </Col>
                    <Col sm={12} xs={12} md={6} lg={6} xl={6} xxl={6}>
                        <div className="info-work">
                            <h3>{t("works.work4.position")}</h3>
                            <h5>{t("works.work4.companie")}</h5>
                            <h6>{t("works.work4.date")}</h6>
                            <h6>{t("works.work4.from")}</h6>
                            <br />
                            <p>{t("works.work4.description")}<br />
                                <br />
                                {t("works.work4.main")}<br />
                                <br />
                                • {t("works.work4.task1")}<br />
                                • {t("works.work4.task2")} <br />
                                • {t("works.work4.task3")}<br />
                                • {t("works.work4.task4")}<br />
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}