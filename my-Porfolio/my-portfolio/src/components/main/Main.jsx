import { Container } from "@mui/material";
import { Row, Col } from 'react-bootstrap'
import React, { useEffect, useState } from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import './Main.css'

export default function Main() {
    const [loop, setLoop] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Industrial Designer", "Web Developer", "UX/UI Designer"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

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

    return (
        <section className="banner" id="main">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={7} xl={8}>
                        <span className="tagline">Welcome to my Portfolio
                        </span>
                        <div className="text-h1-title">
                            <h1>{`Hi I'm `}<br></br><span className="wrap"> {text}</span></h1>
                        </div>

                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique dignissimos quae, est, placeat odit, ipsam aut inventore fugiat modi voluptatibus ullam eveniet incidunt facilis aliquam sapiente maxime numquam? Blanditiis, tenetur?</p>
                        <button className="banner-button" onClick={() => console.log('concet')}>Let's Conect! <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
                        </svg></button>
                    </Col>
                    <Col xs={12} md={5} xl={4}>
                        <div className="graphics">
                            <div className="grph1"><h2>Me</h2></div>
                            <div className="grph2"><h2>Pr</h2></div>
                            <div className="grph3"><h2>Wk</h2></div>
                            <div className="grph4"><h2>Fm</h2></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}