
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import
{
	faCode,
	faBriefcase,
	faRocket,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () =>
{
	useEffect(() =>
	{
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");
	const skills = [
		"React Native",
		"React",
		"TypeScript",
		"Node.js",
		"Python",
		"PostgreSQL",
		"AWS",
		"Product Management",
		"Technical Leadership",
	];

	return (
		<div className="page-content about-page">
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta
					name="description"
					content={
						currentSEO?.description || INFO.about.description
					}
				/>
				<meta
					name="keywords"
					content={currentSEO?.keywords?.join(", ") || ""}
				/>
			</Helmet>

			<NavBar active="about" />

			<main className="about-container">
				<section className="about-hero">
					<div className="about-copy">
						<div className="about-eyebrow">
							<span className="about-status-dot" />
							ABOUT ME
						</div>

						<h1 className="about-heading">
							Hello, I'm{" "}
							<span className="about-name">
								Neethu Vasundharan Sheeja
							</span>
							<span className="about-heading-period">.</span>
						</h1>

						<p className="about-role">
							Senior Full-Stack &amp; Mobile Engineer
							<span> | </span>
							Product Manager &amp; Tech Lead
						</p>

						<p className="about-description">
							{INFO.about.description}
						</p>

						<div className="about-actions">
							<a className="about-primary-button" href="#about-connect">
								Let's connect
								<FontAwesomeIcon icon={faArrowRight} />
							</a>
							<a
								className="about-secondary-button"
								href="/projects"
							>
								Explore my projects
							</a>
						</div>

						<div className="about-stats">
							<div className="about-stat">
								<span className="about-stat-icon">
									<FontAwesomeIcon icon={faBriefcase} />
								</span>
								<div>
									<strong>8+</strong>
									<span>Years of experience</span>
								</div>
							</div>

							<div className="about-stat">
								<span className="about-stat-icon">
									<FontAwesomeIcon icon={faCode} />
								</span>
								<div>
									<strong>Full-stack</strong>
									<span>Web &amp; mobile</span>
								</div>
							</div>

							<div className="about-stat">
								<span className="about-stat-icon">
									<FontAwesomeIcon icon={faRocket} />
								</span>
								<div>
									<strong>End-to-end</strong>
									<span>Product delivery</span>
								</div>
							</div>
						</div>
					</div>

					<div className="about-visual">
						<div className="about-visual-orbit about-orbit-one" />
						<div className="about-visual-orbit about-orbit-two" />

						<div className="about-image-frame">
							<img
								src="/aboutimg.png"
								alt="Neethu Vasundharan Sheeja"
								className="about-image"
							/>
						</div>

						<div className="about-floating-note about-note-top">
							<span className="about-note-icon">
								<FontAwesomeIcon icon={faCode} />
							</span>
							<div>
								<strong>Build</strong>
								<span>Thoughtful software</span>
							</div>
						</div>

						<div className="about-floating-note about-note-bottom">
							<span className="about-note-spark">✳</span>
							<div>
								<strong>Learn. Grow. Repeat.</strong>
								<span>Always improving</span>
							</div>
						</div>
					</div>
				</section>

				<section className="about-skills-section">
					<div className="about-section-heading">
						<div className="about-eyebrow">WHAT I WORK WITH</div>
						<h2>Skills &amp; expertise<span>.</span></h2>
						<p>
							Technologies and practices I use to turn ideas into
							reliable digital products.
						</p>
					</div>

					<div className="about-skills-list">
						{skills.map((skill) => (
							<span className="about-skill-tag" key={skill}>
								{skill}
							</span>
						))}
					</div>
				</section>

				<section className="about-connect-section" id="about-connect">
					<div className="about-connect-heading">
						<div>
							<div className="about-eyebrow">SAY HELLO</div>
							<h2>Let's connect<span>.</span></h2>
							<p>
								Have a project, an idea, or an opportunity?
								I'd love to hear from you.
							</p>
						</div>
					</div>

					<div className="about-socials">
						<Socials />
					</div>
				</section>

				<div className="about-page-footer">
					<Footer />
				</div>
			</main>
		</div>
	);
};

export default About;
