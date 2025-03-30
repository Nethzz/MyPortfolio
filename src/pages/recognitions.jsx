import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import INFO from "../data/user";
import SEO from "../data/seo";
import Logo from "../components/common/logo";
import "./styles/recognitions.css";

const certificates = [
    {
        title: "TestDome Certificate[Android]",
        image: "androidtest.png",
    },
    {
        title: "RPA Developer Foundation Diploma Certificate",
        image: "rpa1.png",
    },
    {
        title: "Leadership Excellence Award",
        image: "leader.png",
    },
    {
        title: "",
        image: "rpa2.png",
    },
    {
        title: "",
        image: "certif2.png",
    },

    {
        title: "",
        image: "rpa3.png",
    },
    {
        title: "",
        image: "certif1.png",
    },

];

const Recognitions = () =>
{
    useEffect(() =>
    {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "recognitions");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Recognitions & Achievements | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta name="keywords" content={currentSEO.keywords.join(", ")} />
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
                        <p>A showcase of my awards, certifications, and achievements</p>
                    </div>

                    <div className="certificate-list">
                        {certificates.map((cert, index) => (
                            <div key={index} className="certificate-card">
                                <img src={cert.image} alt={cert.title} className="certificate-image" />
                                <div className="certificate-title">{cert.title}</div>
                            </div>
                        ))}
                    </div>

                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Recognitions;
