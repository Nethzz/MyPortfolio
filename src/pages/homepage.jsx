
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import Skills from "../components/homepage/skills";
import AllProjects from "../components/projects/allProjects";
import Education from "../components/homepage/Education";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";

const Homepage = () =>
{
	const [hideLogo, setHideLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const previousScrollY = useRef(0);

	useEffect(() =>
	{
		window.scrollTo(0, 0);
	}, []);

	// Reveal Home page sections when they enter the viewport.
	useEffect(() =>
	{
		const sections = document.querySelectorAll(
			".homepage-page .homepage-reveal"
		);

		if (!("IntersectionObserver" in window))
		{
			sections.forEach((section) =>
				section.classList.add("is-visible")
			);
			return;
		}

		const observer = new IntersectionObserver(
			(entries) =>
			{
				entries.forEach((entry) =>
				{
					if (entry.isIntersecting)
					{
						entry.target.classList.add("is-visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.12,
				rootMargin: "0px 0px -35px 0px",
			}
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	// Keep the existing scroll-responsive logo behavior.
	useEffect(() =>
	{
		const handleScroll = () =>
		{
			const scroll = window.pageYOffset;
			const scrollDelta = scroll - previousScrollY.current;

			if (Math.abs(scrollDelta) >= 6)
			{
				setHideLogo(scroll > 80 && scrollDelta > 0);
				previousScrollY.current = scroll;
			}

			if (scroll <= 80)
			{
				setHideLogo(false);
				previousScrollY.current = scroll;
			}

			setLogoSize(Math.max(40, 80 - (scroll * 4) / 10));
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () =>
		{
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta
					name="description"
					content={currentSEO?.description || ""}
				/>
				<meta
					name="keywords"
					content={currentSEO?.keywords?.join(", ") || ""}
				/>
			</Helmet>

			<div className="page-content homepage-page">
				<NavBar active="home" />

				<main className="content-wrapper homepage-content">
					<div className="homepage-logo-container">
						<div
							className={`homepage-logo ${hideLogo ? "homepage-logo-hidden" : ""
								}`}
						>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					{/* Hero */}
					<section className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<span className="homepage-eyebrow">
									SOFTWARE ENGINEERING · PRODUCT DEVELOPMENT
								</span>

								<h1 className="title homepage-title">
									{INFO.homepage.name}
								</h1>

								<p className="subtitle homepage-subtitle homepage-role">
									{INFO.homepage.title}
								</p>

								<p className="subtitle homepage-subtitle homepage-intro">
									{INFO.homepage.description}
								</p>

								<div className="homepage-hero-actions">
									<a
										href="#homepage-projects"
										className="homepage-primary-button"
									>
										Explore my projects
										<span aria-hidden="true">↗</span>
									</a>

									<a
										href={`mailto:${INFO.main.email}`}
										className="homepage-secondary-button"
									>
										Contact me
									</a>
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-decoration" />
									<div className="homepage-image-wrapper">
										<img
											src="homepage.jpg"
											alt="Portrait"
											className="homepage-image"
										/>
									</div>
									<span className="homepage-image-caption">
										Building useful digital products
									</span>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<span className="homepage-socials-label">
								FIND ME ONLINE
							</span>

							<a
								href={INFO.socials.medium}
								target="_blank"
								rel="noreferrer"
								aria-label="Medium profile"
							>
								<FontAwesomeIcon
									icon={faMedium}
									className="homepage-social-icon"
								/>
							</a>

							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
								aria-label="GitHub profile"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>

							<a
								href={`mailto:${INFO.main.email}`}
								aria-label="Send me an email"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>
					</section>

					{/* Experience and education */}
					<section className="homepage-section homepage-experience homepage-reveal">
						<div className="homepage-section-heading">
							<span className="homepage-section-kicker">
								MY JOURNEY
							</span>
							<h2 className="homepage-section-title">
								Experience &amp; Education
							</h2>
							<p className="homepage-section-subtitle">
								The teams, products, and learning experiences
								that have shaped my software engineering journey.
							</p>
						</div>

						<div className="homepage-works">
							<Works />
						</div>

						<div className="homepage-education">
							<Education />
						</div>
					</section>

					{/* Skills */}
					<section className="homepage-section homepage-skills-section homepage-reveal">
						<div className="homepage-section-heading">
							<span className="homepage-section-kicker">
								MY TOOLKIT
							</span>
							<h2 className="homepage-section-title">Skills</h2>
							<p className="homepage-section-subtitle">
								Technologies, tools, and practices I use to
								build reliable web, mobile, and cloud products.
							</p>
						</div>

						<div className="homepage-skills">
							<Skills />
						</div>
					</section>

					{/* Projects */}
					<section
						id="homepage-projects"
						className="homepage-section homepage-projects homepage-reveal"
					>
						<div className="homepage-section-heading">
							<span className="homepage-section-kicker">
								SELECTED WORK
							</span>
							<h2 className="homepage-section-title">Projects</h2>
							<p className="homepage-section-subtitle">
								A selection of projects showcasing my work
								across web, mobile, cloud, and AI systems.
							</p>
						</div>

						<AllProjects />
					</section>

					{/* Articles */}
					<section className="homepage-section homepage-articles-section homepage-reveal">
						<div className="homepage-section-heading">
							<span className="homepage-section-kicker">
								IDEAS &amp; INSIGHTS
							</span>
							<h2 className="homepage-section-title">Articles</h2>
							<p className="homepage-section-subtitle">
								Thoughts on software engineering, system
								design, and real-world development.
							</p>
						</div>

						<div className="homepage-articles">
							{myArticles.map((article, index) =>
							{
								const item = article();

								return (
									<div
										className="homepage-article-item"
										key={item.title || index}
									>
										<Article
											date={item.date}
											title={item.title}
											description={item.description}
											link="https://neethuvasundharan.medium.com"
										/>
									</div>
								);
							})}
						</div>
					</section>

					<div className="page-footer">
						<Footer />
					</div>
				</main>
			</div>
		</>
	);
};

export default Homepage;
