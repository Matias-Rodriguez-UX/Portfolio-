import { Container } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import documento from "../../CV-Matias-Rodriguez-ESP.pdf";
import documentoIn from "../../CV-Matias-Rodriguez-ENG.pdf";
import "./Main.css";
import { useTranslation } from "react-i18next";

export default function Main() {
  const [t, i18n] = useTranslation("global");
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Industrial Designer", "Web Developer", "UX/UI Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loop % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updateText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoop(loop + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="main">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7} xl={8}>
            <span className="tagline">{t("main.tagline")}</span>
            <div className="text-h1-title">
              <h1>
                {`Hi I'm `}
                <br></br>
                <span className="wrap"> {text}</span>
              </h1>
            </div>
            <p> {t("main.intro")}</p>
            <a
              href={i18n.language === "es" ? documento : documentoIn}
              className="banner-button"
              download
            >
              {" "}
              {t("main.button-cv")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-download"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>
              </svg>
            </a>
          </Col>
          <Col xs={12} md={5} xl={4}>
            <div className="graphics">
              <a
                href="#about"
                className="grph1"
                style={{ color: "var(--blackMed)" }}
              >
                <div>
                  <h6>{t("main.about")}</h6>
                </div>
              </a>
              <a
                href="#projects"
                className="grph2"
                style={{ color: "var(--whiteDirty)" }}
              >
                <div>
                  <h6>{t("main.projects")}</h6>
                </div>
              </a>
              <a
                href="#works"
                className="grph3"
                style={{ color: "var(--whiteDirty)" }}
              >
                <div style={{ textAlign: "center" }}>
                  <h6>{t("main.work")}</h6>
                </div>
              </a>
              <a
                href="#education"
                className="grph4"
                style={{ color: "var(--blackMed)" }}
              >
                <div>
                  <h6>{t("main.education")}</h6>
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// , this allowed me to develop some soft skills such as: leading teams, adapting quickly, working for clear objectives, organizing myself and others towards goals tangible, among others.
