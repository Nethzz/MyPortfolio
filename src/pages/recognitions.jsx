
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import INFO from "../data/user";
import SEO from "../data/seo";
import Logo from "../components/common/logo";
import "./styles/recognitions.css";

const certificates = [
    { title: "Project Management", image: "pm101.png" },
    { title: "Certification", image: "certif1.png" },
    { title: "Leadership", image: "leader.png" },
    { title: "Android Testing", image: "androidtest.png" },
    { title: "RPA Certification", image: "rpa2.png" },
    { title: "RPA Certification", image: "rpa3.png" },
    { title: "RPA Certification", image: "rpa1.png" },
    { title: "Certification", image: "certif2.png" },
];

const Recognitions = () =>
{
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() =>
    {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() =>
    {
        const handleKeyDown = (event) =>
        {
            if (event.key === "Escape")
            {
                setSelectedImage(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () =>
        {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const currentSEO = SEO.find(
        (item) => item.page === "recognitions"
    );

    return (
        <React.Fragment>
            <Helmet>
                <title>
                    {`Recognitions & Achievements | ${INFO.main.title}`}
                </title>
                <meta
                    name="description"
                    content={currentSEO?.description || ""}
                />
                <meta
                    name="keywords"
                    content={currentSEO?.keywords?.join(", ") || ""}
                />
            </Helmet>

            <div className="page-content">
                <NavBar active="recognitions" />

                <div className="content-wrapper">
                    <div className="projects-logo-container">
                        <div className="projects-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    <div className="recognitions-header">
                        <h1>Recognitions & Achievements</h1>
                        <p>
                            A showcase of my awards, certifications,
                            and achievements
                        </p>
                    </div>

                    <div className="certificate-list">
                        {certificates.map((cert, index) => (
                            <div
                                key={index}
                                className="certificate-card"
                            >
                                <button
                                    type="button"
                                    className="certificate-image-button"
                                    onClick={() =>
                                        setSelectedImage(cert)
                                    }
                                    aria-label={`View ${cert.title || "certificate"}`}
                                >
                                    <img
                                        src={cert.image}
                                        alt={cert.title || "Certificate"}
                                        className="certificate-image"
                                    />
                                </button>

                                {cert.title && (
                                    <div className="certificate-title">
                                        {cert.title}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {selectedImage && (
                        <div
                            className="certificate-modal"
                            onClick={() => setSelectedImage(null)}
                            role="presentation"
                        >
                            <div
                                className="certificate-modal-content"
                                role="dialog"
                                aria-modal="true"
                                aria-label="Certificate preview"
                                onClick={(event) => event.stopPropagation()}
                            >
                                <button
                                    type="button"
                                    className="certificate-modal-close"
                                    onClick={() => setSelectedImage(null)}
                                    aria-label="Close preview"
                                >
                                    &times;
                                </button>

                                <img
                                    src={selectedImage.image}
                                    alt={selectedImage.title || "Certificate preview"}
                                    className="certificate-modal-image"
                                />
                            </div>
                        </div>
                    )}

                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Recognitions;
