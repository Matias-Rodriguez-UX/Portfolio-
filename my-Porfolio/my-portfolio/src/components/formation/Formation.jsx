import React, { useState } from "react";
import "./Formation.css";
import SideBar from "./SideBar";
import Bootcamp from "./Sections/Bootcamp";
import University from "./Sections/University";
import Pedagogic from "./Sections/Pedagogic";
import HighSchool from "./Sections/HighSchool";
import { useTranslation } from "react-i18next";

export default function Formation() {
  const [currentPage, setCurrentPage] = useState("fullstack");
  const [t] = useTranslation("global");

  return (
    <section className="formation-section" id="education">
      <div className="container">
        <h2 className="section-title">{t("education.title")}</h2>
        <div className="row mt-4 formation-section-1">
          <SideBar className="sideBar-col" setCurrentPage={setCurrentPage} currentPage={currentPage} />
          <div className="container formation-col">
            {currentPage === "fullstack" && <Bootcamp />}
            {currentPage === "university" && <University />}
            {currentPage === "highschool" && <HighSchool />}
            {currentPage === "pedagogic" && <Pedagogic />}
          </div>
        </div>
      </div>
    </section>
  );
}
