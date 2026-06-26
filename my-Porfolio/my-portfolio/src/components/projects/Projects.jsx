import React, { useState } from "react";
import "./Projects.css";
import dataProjects from "./dataProjetcs";
import dataProjectsEs from "./dataProjetcsES";
import ModalProject from "./ModalProject";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [t, i18n] = useTranslation("global");

  // Display order is intentional (newest / most representative first) and each
  // id maps to its own .project-img{id} class carrying the brand logo.
  const projectOrder = [
    { id: 11, name: "Batuta — Metabase Q" },
    { id: 10, name: "TMS Engineering" },
    { id: 9, name: "Dall-E MgR" },
    { id: 1, name: "StreetArt Wine Club" },
    { id: 2, name: "Alura" },
    { id: 3, name: "Pokemon" },
    { id: 4, name: "Altamira" },
    { id: 5, name: "Dewey" },
    { id: 6, name: "La Cardeuse" },
    { id: 7, name: "76treinta Wine Club" },
    { id: 8, name: "Nomade" },
  ];

  function handleClick(id) {
    const source = i18n.language === "es" ? dataProjectsEs : dataProjects;
    const findData = source.find((el) => el.id === id);
    setData(findData);
    setShowModal(true);
  }

  return (
    <section className="projects" id="projects">
      <div className="container mt-4">
        <h2 className="section-title">{t("projects.title")}</h2>
        <div className="images-projects">
          {projectOrder.map(({ id, name }) => (
            <button
              key={id}
              type="button"
              className={`project-img${id}`}
              onClick={() => handleClick(id)}
              aria-haspopup="dialog"
              aria-label={t("projects.cardLabel", { name })}
            ></button>
          ))}
        </div>
      </div>
      {data.name && (
        <ModalProject
          data={data}
          show={showModal}
          onHide={() => setShowModal(false)}
        />
      )}
    </section>
  );
}
