import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <div className="container-fluid m-0 p-5 h-100 bg-dark text-white mt-4">
            <div className="container d-flex flex-wrap gap-3 align-items-center justify-content-center">
                <img className="me-4" src="https://res.cloudinary.com/dcbax1feo/image/upload/v1679254668/assets/logo_omv8yg.png" alt="logo" style={{ width: '150px' }} />
                <div className="w-25 d-flex gap-2 ms-5 me-5 align-items-center justify-content-center ">
                    <a href="https://github.com/Matias-Rodriguez-UX"><GitHubIcon fontSize="large" style={{ color: 'var(--whiteDirty)' }} /></a>
                    <a href="https://www.linkedin.com/in/matias-g-rodriguez/"><LinkedInIcon fontSize="large" style={{ color: 'var(--whiteDirty)' }} className="ms-5" /></a>
                </div>
            </div>
            <hr></hr>
            <div className="fs-6 d-flex align-items-center justify-content-center">
                <p>Copyright © 2023 Matias Rodriguez | All Rights Reserved</p>
            </div>
        </div>
    )
}
