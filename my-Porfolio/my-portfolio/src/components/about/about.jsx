import React from "react";
import "./about.css";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function About() {
  const [t] = useTranslation("global");

  // Technical stack grouped by category. Tech names are language-agnostic;
  // category labels and the "how I work" items come from translations.
  const techGroups = [
    { label: t("about.stack.frontend"), items: ["React", "Next.js", "JavaScript", "TypeScript", "Redux", "Tailwind", "Material UI", "Bootstrap", "Gatsby"] },
    { label: t("about.stack.backend"), items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
    { label: t("about.stack.design"), items: ["Figma", "Adobe XD", "Photoshop", "Illustrator"] },
    { label: t("about.stack.tools"), items: ["Git", "Jira", "Confluence", "Slack", "OpenAI", "Claude AI"] },
  ];
  const coreItemsRaw = t("about.stack.coreItems", { returnObjects: true });
  const coreItems = Array.isArray(coreItemsRaw) ? coreItemsRaw : [];

  return (
    <section className="about" id="about">
      <div className="container d-flex flex-column">
        <h2 className="section-title mt-4 mb-4">{t("about.title")}</h2>
        <Row className="gap-2">
          <Col xs={12} md={7} xl={8}>
            <div className="text-description">
              <p className="text-justify">{t("about.description1")}</p>
              <p className="text-justify">{t("about.description2")}</p>
              <p className="text-justify">{t("about.description3")}</p>
              <p className="text-justify">{t("about.description4")}</p>
              <div className="skills-stack">
                {techGroups.map((group) => (
                  <div className="skill-group" key={group.label}>
                    <h3 className="skill-group__label">{group.label}</h3>
                    <ul className="chip-row">
                      {group.items.map((item) => (
                        <li className="chip" key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {coreItems.length > 0 && (
                  <div className="skill-group">
                    <h3 className="skill-group__label">{t("about.stack.core")}</h3>
                    <ul className="chip-row">
                      {coreItems.map((item) => (
                        <li className="chip chip--core" key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} xl={3} className="mt-2">
            <div className="image-profile" role="img" aria-label={t("a11y.profileAlt")}></div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
