import React, { useEffect, useState } from "react";
import "./NavigationBar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { MenuIcon, LinkedInIcon, GitHubIcon } from "../icons/Icons";
import { useTranslation } from "react-i18next";

export default function NavigationBar({ scrollToTop, scrollToSection }) {
  const [t, i18n] = useTranslation("global");
  const [activeLink, setActiveLink] = useState("main");
  const [scrolled, setScrolled] = useState(false);

  const navSections = [
    { id: "main", labelKey: "navbar.main" },
    { id: "about", labelKey: "navbar.about" },
    { id: "projects", labelKey: "navbar.porjects" },
    { id: "works", labelKey: "navbar.works" },
    { id: "education", labelKey: "navbar.education" },
    { id: "certificates", labelKey: "navbar.certificates" },
  ];

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
    if (!element) return;
    scrollToSection(element.offsetTop - 50);
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
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          aria-label={t("a11y.openMenu")}
        >
          <MenuIcon />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto align-items-center">
            {navSections.map(({ id, labelKey }) => (
              <Nav.Link
                key={id}
                href={`#${id}`}
                data-text={t(labelKey)}
                aria-current={activeLink === id ? "true" : undefined}
                className={
                  activeLink === id ? "active navbar-link" : "navbar-link"
                }
                onClick={(e) => {
                  e.preventDefault();
                  onUpdateActiveLink(id);
                }}
              >
                {t(labelKey)}
              </Nav.Link>
            ))}
            <div className="d-flex justify-content-evenly">
              <Nav.Link
                href="https://www.linkedin.com/in/matias-g-rodriguez/"
                target="_blank"
                rel="noreferrer"
                aria-label={t("a11y.linkedin")}
                className="navbar-link social-media"
              >
                <LinkedInIcon size={32} />
              </Nav.Link>
              <Nav.Link
                href="https://github.com/Matias-Rodriguez-UX"
                target="_blank"
                rel="noreferrer"
                aria-label={t("a11y.github")}
                className="navbar-link social-media"
              >
                <GitHubIcon size={32} />
              </Nav.Link>
            </div>
            <div
              className="d-flex align-items-center justify-content-center mr-auto gap-3 lenguajes mt-2 mb-2"
              style={{ color: "var(--whiteDirty)" }}
            >
              <button
                type="button"
                className="lang-btn"
                aria-pressed={i18n.language === "es"}
                aria-label={t("a11y.langEs")}
                onClick={() => i18n.changeLanguage("es")}
              >
                ES
              </button>
              <button
                type="button"
                className="lang-btn"
                aria-pressed={i18n.language === "en"}
                aria-label={t("a11y.langEn")}
                onClick={() => i18n.changeLanguage("en")}
              >
                EN
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
