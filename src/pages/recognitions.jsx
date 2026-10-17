
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faXmark, faTrophy } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import INFO from "../data/user";
import SEO from "../data/seo";
import Logo from "../components/common/logo";
import "./styles/recognitions.css";

const certificates = [
    {
        title: "Project Management",
        image: "/pm101.png",
        category: "Product Management",
    },
    {
        title: "Certification",
        image: "/certif1.png",
        category: "Technical",
    },
    {
        title: "Leadership",
        image: "/leader.png",
        category: "Leadership",
    },
    {
        title: "Android Certification",
        image: "/androidtest.png",
        category: "Technical",
    },
    {
        title: "RPA Certification",
        image: "/rpa2.png",
        category: "Technical",
    },
    {
        title: "RPA Certification",
        image: "/rpa3.png",
        category: "Technical",
    },
    {
        title: "RPA Certification",
        image: "/rpa1.png",
        category: "Technical",
    },
    {
        title: "Certification",
        image: "/certif2.png",
        category: "Certifications",
    },
];

const categories = [
    "All",
    "Certifications",
    "Leadership",
    "Product Management",
    "Technical",
    "Academic",
    "Other",
];

const Recognitions = () =>
{
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");

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

    const filteredCertificates =
        activeCategory === "All"
            ? certificates
            : certificates.filter(
                (certificate) =>
                    certificate.category === activeCategory
            );

    return (
        <>
            <Helmet>
                <title>
                    {`Recognitions & Achievements | ${INFO.main.title}`}
                </title>

                <meta
                    name="description"
                    content={
                        currentSEO?.description ||
                        "Explore my professional achievements, certifications, and awards."
                    }
                />

                <meta
                    name="keywords"
                    content={currentSEO?.keywords?.join(", ") || ""}
                />
            </Helmet>

            <div className="page-content recognitions-page">
                <NavBar active="recognitions" />

                <div className="recognitions-content">
                    <div className="recognitions-logo-container">
                        <div className="recognitions-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    {/* Hero section */}
                    <header className="recognitions-hero">
                        <div className="recognitions-hero-copy">
                            <div className="recognitions-eyebrow">
                                <span className="recognitions-eyebrow-dot" />
                                ACHIEVEMENTS
                            </div>

                            <h1>
                                Recognitions &amp;{" "}
                                <span>Achievements.</span>
                            </h1>

                            <p>
                                A showcase of my awards, certifications,
                                and achievements that mark my learning
                                journey and professional growth.
                            </p>
                        </div>

                        <div
                            className="recognitions-hero-art"
                            aria-hidden="true"
                        >
                            <div className="recognitions-art-circle" />
                            <div className="recognitions-art-dots" />
                            <div className="recognitions-trophy">
                                <FontAwesomeIcon icon={faTrophy} />
                            </div>
                            <span className="recognitions-art-spark spark-one">
                                ✦
                            </span>
                            <span className="recognitions-art-spark spark-two">
                                ✧
                            </span>
                            <span className="recognitions-art-spark spark-three">
                                ✦
                            </span>
                        </div>
                    </header>

                    {/* Category filters */}
                    <nav
                        className="recognition-filters"
                        aria-label="Filter achievements"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                className={`recognition-filter ${activeCategory === category
                                        ? "active"
                                        : ""
                                    }`}
                                aria-pressed={activeCategory === category}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </nav>

                    {/* Certificate cards */}
                    <section
                        className="certificate-list"
                        aria-label="Certificates and achievements"
                    >
                        {filteredCertificates.map((certificate, index) => (
                            <article
                                key={`${certificate.image}-${index}`}
                                className="certificate-card"
                            >
                                <button
                                    type="button"
                                    className="certificate-image-button"
                                    onClick={() =>
                                        setSelectedImage(certificate)
                                    }
                                    aria-label={`Preview ${certificate.title}`}
                                >
                                    <img
                                        src={certificate.image}
                                        alt={certificate.title}
                                        className="certificate-image"
                                        loading="lazy"
                                    />
                                </button>

                                <div className="certificate-card-footer">
                                    <div className="certificate-card-info">
                                        <h2 className="certificate-title">
                                            {certificate.title}
                                        </h2>

                                        <span className="certificate-category">
                                            {certificate.category}
                                        </span>
                                    </div>

                                    <button
                                        type="button"
                                        className="certificate-open-button"
                                        onClick={() =>
                                            setSelectedImage(certificate)
                                        }
                                        aria-label={`Open ${certificate.title}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faArrowUpRightFromSquare}
                                        />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </section>

                    {filteredCertificates.length === 0 && (
                        <div className="recognitions-empty">
                            No achievements in this category yet.
                        </div>
                    )}

                    {/* Certificate preview modal */}
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
                                aria-label={`${selectedImage.title} preview`}
                                onClick={(event) => event.stopPropagation()}
                            >
                                <button
                                    type="button"
                                    className="certificate-modal-close"
                                    onClick={() => setSelectedImage(null)}
                                    aria-label="Close certificate preview"
                                >
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>

                                <img
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    className="certificate-modal-image"
                                />

                                <p className="certificate-modal-title">
                                    {selectedImage.title}
                                </p>
                            </div>
                        </div>
                    )}

                    <div className="recognitions-page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Recognitions;
