import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <div
      className="container-fluid m-0 p-5 h-100 text-white mt-4"
      style={{ backgroundColor: "var(--blackMed)" }}
    >
      <div className="container d-flex flex-wrap gap-4 align-items-center justify-content-evenly">
        <img
          src="https://res.cloudinary.com/dcbax1feo/image/upload/v1679254668/assets/logo_omv8yg.png"
          alt="logo"
          style={{ width: "100px" }}
        />
        <h6 style={{ fontFamily: "var(--font-mono)" }}>
          rodriguez.matias.g@gmail.com
        </h6>
        <a
          href="https://github.com/Matias-Rodriguez-UX"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon fontSize="large" style={{ color: "var(--whiteDirty)" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/matias-g-rodriguez/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon
            fontSize="large"
            style={{ color: "var(--whiteDirty)" }}
            className="ms-2"
          />
        </a>
      </div>
      <hr style={{ marginBottom: "2rem", marginTop: "2rem" }}></hr>
      <div className="fs-6 d-flex align-items-center justify-content-center">
        <p>Copyright © 2023 Matias Rodriguez | All Rights Reserved</p>
      </div>
    </div>
  );
}
