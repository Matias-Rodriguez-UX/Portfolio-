import React, { useState } from "react";
import './Formation.css'
import SideBar from "./SideBar";
import Bootcamp from './Sections/Bootcamp'
import University from './Sections/University'
import Pedagogic from './Sections/Pedagogic'
import HighSchool from "./Sections/HighSchool";
import { useTranslation } from 'react-i18next'

export default function Formation() {
    const [currentPage, setCurrentPage] = useState('fullstack')
    const [t, i18n] = useTranslation("global")

    return (
        <section className="formation-section" id="education">
            <div className="container ">
                <h1>{t("education.title")}</h1>
                <div className="row mt-4 formation-section-1">
                    <SideBar className='sideBar-col'
                        setCurrentPage={setCurrentPage}
                    />
                    <div className="container formation-col">
                        {currentPage === "fullstack" && <Bootcamp />}
                        {currentPage === "university" && <University />}
                        {currentPage === "highschool" && <HighSchool />}
                        {currentPage === "pedagogic" && <Pedagogic />}
                    </div>
                </div>
            </div>

        </section>
    )
}