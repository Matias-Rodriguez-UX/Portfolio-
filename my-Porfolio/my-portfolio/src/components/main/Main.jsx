import { Container } from "@mui/material";
import { Row, Col } from 'react-bootstrap'
import React, { useEffect, useState } from "react";
import axios from 'axios'
import './Main.css'

export default function Main() {
    const [loop, setLoop] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Industrial Designer", "Web Developer", "UX/UI Designer"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loop % toRotate.length
        let fullText = toRotate[i]
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updateText)
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updateText === "") {
            setIsDeleting(false)
            setLoop(loop + 1);
            setDelta(500)
        }
    }

    const handleDownload = () => {
        axios({
            url: 'https://www.dropbox.com/s/21lh4bvi2bp3t1m/CV-Matias-Rodriguez-2023.pdf',
            method: 'GET',
            responseType: 'blob',
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'CV-Matias-Rodriguez-2023.pdf');
            document.body.appendChild(link);
            link.click();
        });
    };

    return (
        <section className="banner" id="main">
            <Container >
                <Row className="align-items-center">
                    <Col xs={12} md={7} xl={8}>
                        <span className="tagline">Welcome to my Portfolio
                        </span>
                        <div className="text-h1-title">
                            <h1>{`Hi I'm `}<br></br><span className="wrap"> {text}</span></h1>
                        </div>
                        <p> I'm Matías. I have a Full Stack Developer profile with background in industrial design. Currently, I am a teacher in technical high schools, but I also have work experience in the productive industry and sales...</p>
                        <button className="banner-button" onClick={handleDownload}>Resume <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>
                        </svg></button>
                    </Col>
                    <Col xs={12} md={5} xl={4}>
                        <div className="graphics">
                            <a href="#about" className="grph1" style={{ color: 'var(--blackMed)' }}><div ><h2>Me</h2></div></a>
                            <a href="#projects" className="grph2" style={{ color: 'var(--whiteDirty)' }}><div ><h2>Pr</h2></div></a>
                            <a href="#works" className="grph3" style={{ color: 'var(--whiteDirty)' }}><div ><h2>Wk</h2></div></a>
                            <a href="#formation" className="grph4" style={{ color: 'var(--blackMed)' }}><div ><h2>Fm</h2></div></a>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

// , this allowed me to develop some soft skills such as: leading teams, adapting quickly, working for clear objectives, organizing myself and others towards goals tangible, among others.