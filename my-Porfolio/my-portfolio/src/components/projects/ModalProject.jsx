import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import './ModalProject.css'
import { useTranslation } from 'react-i18next'


export default function ModalProject({ data, show, onHide }) {
    const [t, i18n] = useTranslation("global")

    return (
        <Modal show={show} onHide={onHide} dialogClassName="modal-project"
            aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header closeButton>
                <Modal.Title>{data.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Row>
                    <div className="project-container">
                        <Col xs={12} md={12} lg={4}>
                            <div className="all-images">
                                {data.images.length && data.images.map((el, index) =>
                                    <a href={el} target="_blank" rel="noreferrer">
                                        <div className="images-proyect" style={{
                                            backgroundImage: `url(${el})`
                                        }} key={index}></div>
                                    </a>
                                )}
                            </div>
                        </Col>

                        <Col xs={12} md={12} lg={8}>
                            <div className="info-project">
                                <h4>{t("projectsModal.description")}</h4>
                                <p className="text-justify" style={{ maxWidth: '90%' }} >{`${data.description}`}</p>
                                <h4>{t("projectsModal.whatIdo")}</h4>
                                <p className="text-justify" style={{ maxWidth: '90%' }} >{`${data.whatIdo}`}</p>
                                <h4>{t("projectsModal.tech")}</h4>
                                <ul className="list-option-tech">
                                    {data.tecnologies.length && data.tecnologies.map((el, index) =>
                                        <li key={index}>{el}</li>
                                    )}
                                </ul>
                                <h4>Links</h4>
                                <ul className="list-links">
                                    {data.links.length ? data.links.map((el, index) =>
                                        <a key={index} href={el} target="_blank" rel="noreferrer">
                                            <li key={index}>{el}</li>
                                        </a>
                                    ) : <p>{t("projectsModal.links")}</p>}
                                </ul>
                                <h4>{t("projectsModal.date")}</h4>
                                <p>{data.date}</p>
                            </div>
                        </Col>
                    </div>
                </Row>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}