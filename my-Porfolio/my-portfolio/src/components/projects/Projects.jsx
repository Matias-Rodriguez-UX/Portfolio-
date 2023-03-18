import React, { useState } from "react";
import './Projects.css'
import dataProjects from "./dataProjetcs";
import ModalProject from "./ModalProject";

export default function Projects() {
    const [data, setData] = useState({})
    const [showModal, setShowModal] = useState(false)

    function handleClick(id) {
        let findData = dataProjects.find(el => el.id === id)
        setData(findData)
        setShowModal(true)
    }

    return (
        <section className="projects" id="projects">
            <div className="container mt-4">
                <h1>Projects</h1>
                <div className="images-projects">
                    <div onClick={() => handleClick(1)} className="project-img1"></div>
                    <div onClick={() => handleClick(2)} className="project-img2"></div>
                    <div onClick={() => handleClick(3)} className="project-img3"></div>
                    <div onClick={() => handleClick(4)} className="project-img4"></div>
                    <div onClick={() => handleClick(5)} className="project-img5"></div>
                    <div onClick={() => handleClick(6)} className="project-img6"></div>
                    <div onClick={() => handleClick(7)} className="project-img7"></div>
                    <div onClick={() => handleClick(8)} className="project-img8"></div>
                </div>
            </div>
            {data.name &&
                <ModalProject data={data} show={showModal} onHide={() => setShowModal(false)} />
            }

        </section>

    )
}