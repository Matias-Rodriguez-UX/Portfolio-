import React from "react";
import { Modal } from "react-bootstrap";
import './ModalProject.css'


export default function ModalProject({ data, show, onHide, }) {
    return (
        <Modal show={show} onHide={onHide} className="mt-5 modal-project">
            <Modal.Header closeButton>
                <Modal.Title>{data.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    {data.images.map((el, index) =>
                        <div className="images-proyect" style={{
                            backgroundImage: `url(${el})`, backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat', backgroundSize: '8rem', width: '12rem',
                            height: '8rem'
                        }} key={index}></div>
                    )}
                </div>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    )
}