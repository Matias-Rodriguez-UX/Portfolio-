import React from "react";
import { LinkedInIcon, GitHubIcon } from "../icons/Icons";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [t] = useTranslation("global");
  const email = "rodriguez.matias.g@gmail.com";

  return (
    <footer
      className="container-fluid m-0 p-5 h-100 text-white mt-4"
      style={{ backgroundColor: "var(--blackMed)" }}
    >
      <div className="container d-flex flex-wrap gap-4 align-items-center justify-content-evenly">
        <img
          src="https://res.cloudinary.com/dcbax1feo/image/upload/v1679254668/assets/logo_omv8yg.png"
          alt={t("a11y.logoAlt")}
          loading="lazy"
          decoding="async"
          style={{ width: "100px", height: "auto" }}
        />
        <a
          href={`mailto:${email}`}
          style={{ fontFamily: "var(--font-mono)", color: "var(--whiteDirty)" }}
        >
          {email}
        </a>
        <a
          href="https://github.com/Matias-Rodriguez-UX"
          target="_blank"
          rel="noreferrer"
          aria-label={t("a11y.github")}
        >
          <GitHubIcon size={32} style={{ color: "var(--whiteDirty)" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/matias-g-rodriguez/"
          target="_blank"
          rel="noreferrer"
          aria-label={t("a11y.linkedin")}
        >
          <LinkedInIcon
            size={32}
            style={{ color: "var(--whiteDirty)" }}
            className="ms-2"
          />
        </a>
      </div>
      <hr style={{ marginBottom: "2rem", marginTop: "2rem" }}></hr>
      <div className="fs-6 d-flex align-items-center justify-content-center">
        <p>Copyright © {new Date().getFullYear()} Matias Rodriguez | All Rights Reserved</p>
      </div>
    </footer>
  );
}
