import React from "react";
import './about.css'
import { Parallax, Background } from 'react-parallax';

export default function About() {
    return (
        // <section className="about d-flex align-items-center justify-content-center" id="about">
        //     <div className="d-flex align-items-center justify-content-center">
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={'../../../public/about.jpg'}
            bgImageAlt="the dog"
            strength={-200}
        >
            Blur transition from min to max
            <div style={{ height: '200px' }} />
        </Parallax>
        // <h1>About</h1>
        //     </div>
        // </section>

    )
}