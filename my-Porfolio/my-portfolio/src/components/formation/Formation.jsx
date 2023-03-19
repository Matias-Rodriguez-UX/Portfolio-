import React, { useState } from "react";
import './Formation.css'
import SideBar from "./SideBar";
import Bootcamp from './Sections/Bootcamp'
import University from './Sections/University'
import Pedagogic from './Sections/Pedagogic'
import HighSchool from "./Sections/HighSchool";


export default function Formation() {
    const [currentPage, setCurrentPage] = useState('fullstack')

    return (
        <section className="formation-section" id="formation">
            <div className="container ">
                <h1>Formation</h1>
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