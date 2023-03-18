import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import './ModalProject.css'


export default function ModalProject({ data, show, onHide }) {
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
                                <h4>Description</h4>
                                <p className="text-justify" style={{ maxWidth: '90%' }} >{`${data.description}`}</p>
                                <h4>How did I get involved in the project?</h4>
                                <p className="text-justify" style={{ maxWidth: '90%' }} >{`${data.whatIdo}`}</p>
                                <h4>Technologies used</h4>
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
                                    ) : <p>The project doesn't have links</p>}
                                </ul>
                                <h4>Creation date</h4>
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