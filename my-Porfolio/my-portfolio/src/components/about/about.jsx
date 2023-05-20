import React from "react";
import "./about.css";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function About() {
  const [t, i18n] = useTranslation("global");

  return (
    <section className="about" id="about">
      <div className="container d-flex flex-column">
        <h2 className="mt-4 mb-4">{t("about.title")}</h2>
        <Row className="gap-2">
          <Col xs={12} md={7} xl={8}>
            <div className="text-description">
              <p className="text-justify">{t("about.description1")}</p>
              <p className="text-justify">{t("about.description2")}</p>
              <p className="text-justify">{t("about.description3")}</p>
              <p className="text-justify">{t("about.description4")}</p>
              <ul className="skills-list">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Postgres</li>
                <li>MongoDB</li>
                <li>ThreeJS</li>
                <li>Gastby</li>
                <li>OpenAI</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={4} xl={3} className="mt-2">
            <div className="image-profile"></div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
