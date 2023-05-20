import React, { useEffect, useState } from "react";
import "./NavigationBar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTranslation } from "react-i18next";

export default function NavigationBar({ scrollToTop, scrollToSection }) {
  const [t, i18n] = useTranslation("global");
  const [activeLink, setActiveLink] = useState("main");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function onUpdateActiveLink(page) {
    setActiveLink(page);
    const element = document.getElementById(page);
    const offsetTop = element.offsetTop - 50;
    scrollToSection(offsetTop);
  }

  return (
    <Navbar
      bg="dark"
      expand="lg"
      variant="dark"
      className={scrolled ? "scrolled" : ""}
    >
      <div className="container">
        <Navbar.Brand
          href="#main"
          style={{ marginRight: "4rem" }}
          onClick={scrollToTop}
        >
          {" "}
          <div className="logo"></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <MenuIcon />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto align-items-center">
            <Nav.Link
              className={
                activeLink === "main" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("main")}
            >
              {t("navbar.main")}
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              {t("navbar.about")}
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              {t("navbar.porjects")}
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "works" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("works")}
            >
              {t("navbar.works")}
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "education"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("education")}
            >
              {t("navbar.education")}
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "certificates"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("certificates")}
            >
              {t("navbar.certificates")}
            </Nav.Link>
            <div className="d-flex justify-content-evenly">
              <Nav.Link
                href="https://www.linkedin.com/in/matias-g-rodriguez/"
                target="_blank"
                rel="noreferrer"
                className="navbar-link social-media"
              >
                <LinkedInIcon fontSize="large" />
              </Nav.Link>
              <Nav.Link
                href="https://github.com/Matias-Rodriguez-UX"
                target="_blank"
                rel="noreferrer"
                className="navbar-link social-media"
              >
                <GitHubIcon fontSize="large" />
              </Nav.Link>
            </div>
            <div
              className="d-flex align-items-center justify-content-center mr-auto gap-3 lenguajes mt-2 mb-2"
              style={{ color: "var(--whiteDirty)", cursor: "pointer" }}
            >
              <h5
                className={i18n.language === "es" ? "" : "text-muted"}
                onClick={() => i18n.changeLanguage("es")}
              >
                ES
              </h5>
              <h5
                className={i18n.language === "en" ? "" : "text-muted"}
                onClick={() => i18n.changeLanguage("en")}
              >
                EN
              </h5>
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
