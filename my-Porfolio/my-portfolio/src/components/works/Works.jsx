import React from "react";
import { Row, Col } from 'react-bootstrap'
import './Works.css'

export default function Works() {
    return (
        <section className="works-section" id="works" >
            <div className="container pt-4">
                <h1>Works</h1>

                <Row >
                    <Col sm={12} xs={12} md={6} lg={6} xl={6} xxl={6}>
                        <div className="info-work op-class"
                            data-scroll
                            data-scroll-class="fadeIn"
                            data-scroll-repeat="true"
                            data-scroll-speed="2">
                            <h3>Full-Stack Teaching Assistant Web Developer Fullstack</h3>
                            <h5>Henry · Part-time</h5>
                            <h6>Jan 2023 - Present </h6>
                            <h6>Argentina · Remote</h6>
                            <br />
                            <p>Teaching Assistant (TA) for students at Henry Bootcamp. <br />
                                Main tasks: <br />
                                <br />
                                • Coordinate a group of new joining students throughout the whole bootcamp experience <br />
                                • Guide students in the first steps of the course and clarify their doubts <br />
                                • Provide assistance in solving exercises and encourage group teamwork (Pair Programming).<br />
                                • Suggest ideas to improve the Bootcamp processes.<br />
                                • Promote collaboration and build community within the students</p>
                        </div>
                    </Col>
                    <Col sm={12} xs={12} md={6} lg={6} xl={6} xxl={6}>
                        <div className="info-work op-class"
                            data-scroll
                            data-scroll-class="fadeIn"
                            data-scroll-repeat="true"
                            data-scroll-speed="2">
                            <h3>Professor</h3>
                            <h5>Technical high school · Full-time</h5>
                            <h6>Mar 2015 - Present · 8 yrs 1 mo</h6>
                            <h6>Necochea, Buenos Aires, Argentina · On-site</h6>
                            <br />
                            <p>Teacher of technical secondary schools dictating subjects such as<br />
                                <br />
                                • Technical drawing (autocad)<br />
                                • 3d modeling (rhinoceros) <br />
                                • Spreadsheets (excel)<br />
                                • Programming and computational thinking<br />
                                • Turnery<br />
                                • Process of transformation of materials<br />
                                • Welding<br />
                                • Carpentry<br />
                                • Web Design<br />
                                • Publicity communication
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} xs={12} md={6} lg={6} xl={6} xxl={6}>
                        <div className="info-work op-class"
                            data-scroll
                            data-scroll-class="fadeIn"
                            data-scroll-repeat="true"
                            data-scroll-speed="2">
                            <h3>Corporate sales assistants</h3>
                            <h5>Grupo Peñaflor</h5>
                            <h6>Nov 2012 - Dec 2013 · 1 yr 2 mos</h6>
                            <h6>Vicente Lopez · On-site</h6>
                            <br />
                            <p>Direct Sales Advisor for Employee Benefits Channel<br />
                                Main tasks: <br />
                                <br />
                                • Manage sales made through the direct sales channel that the company had as an employee benefit.<br />
                                • Advise and guide users and clients of the different platforms in the purchasing process. <br />
                            </p>
                        </div>
                    </Col>
                    <Col sm={12} xs={12} md={6} lg={6} xl={6} xxl={6}>
                        <div className="info-work op-class"
                            data-scroll
                            data-scroll-class="fadeIn"
                            data-scroll-repeat="true"
                            data-scroll-speed="2">
                            <h3>Industrial Designer</h3>
                            <h5>La Cardeuse S.A. · Full-time</h5>
                            <h6>Apr 2010 - Aug 2011 · 1 yr 5 mos</h6>
                            <h6>Lanus, Buenos Aires, Argentina · On-site</h6>
                            <br />
                            <p>Head of the Design and Development area of ​​new products<br />
                                <br />
                                • Develop new products.<br />
                                • Update the company's current product lines.<br />
                                • Implement new fabrics and techniques.<br />
                                • Create and maintain a continuous improvement system.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}