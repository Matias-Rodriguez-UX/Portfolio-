import React from "react";
import './about.css'
import { Parallax, Background } from 'react-parallax';
import { Row, Col } from "react-bootstrap";

export default function About() {
    return (
        <section className="about" id="about">
            <div className="container d-flex flex-column">
                <h2 className="mt-4 mb-4">About me</h2>
                <Row className="gap-2">
                    <Col xs={12} md={7} xl={8}>
                        <div className="text-description">
                            <p className="text-justify">
                                Hello! My name is Matias and I enjoy creating things that live on the internet. My interest in web development started back in 2020, since the covid-19 pandemic, where I began to rethink my current job. I found in remote work and by objectives a way to enjoy the workday.
                                <br />
                                <br />
                                Using my basic career, Industrial Design, and my training as a computer technician, as engines of the future project.
                                <br />
                                <br />
                                I have been training for two years now, taking UX/UI courses, programming logic, web development bootcamps, and finally carrying out complete projects from the Back-End to the Front-End.
                            </p>
                            <p>Here are a few technologies I’ve been working with recently:</p>

                            <ul className="skills-list">
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>Redux</li>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>Postgres</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} md={4} xl={3}>
                        <div className="image-profile">
                        </div>
                    </Col>
                </Row>
            </div>

        </section >

    )
}