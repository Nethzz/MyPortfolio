import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import
{
	faGithub,
	faMedium
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import Skills from "../components/homepage/skills";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";
import Education from "../components/homepage/Education";

const Homepage = () =>
{
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() =>
	{
		window.scrollTo(0, 0);
	}, []);

	useEffect(() =>
	{
		const sections = document.querySelectorAll(".homepage-reveal");

		if (!("IntersectionObserver" in window))
		{
			sections.forEach((section) => section.classList.add("is-visible"));
			return undefined;
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
			{ threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
		);

		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, []);

	useEffect(() =>
	{
		const handleScroll = () =>
		{
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize)
			{
				if (newLogoSize > 40)
				{
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else
				{
					setStayLogo(true);
				}
			} else
			{
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.name}
								</div>
								<div className="subtitle homepage-subtitle">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="homepage.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.medium}
								target="_blank"
								rel="noreferrer"
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
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							{/* <a
								href={INFO.socials.stackoverflow}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="homepage-social-icon"
								/>
							</a> */}
							{/* <a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a> */}
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="homepage-section homepage-experience homepage-reveal">
							<h2 className="homepage-section-title center">Experience &amp; Education</h2>
							<p className="homepage-section-subtitle center">
								A look at the teams, products, and learning that have shaped my software engineering journey.
							</p>
							<div className="homepage-works">
								<Works />
							</div>
							<div className="homepage-education">
								<Education />
							</div>
						</div>

						<div className="homepage-section homepage-skills-section homepage-reveal">
							<h2 className="homepage-section-title center">Skills</h2>
							<p className="homepage-section-subtitle center">
								Technologies, tools, and practices I use to build reliable web, mobile, and cloud products.
							</p>
							<div className="homepage-skills">
								<Skills />
							</div>
						</div>

						<div className="homepage-section homepage-projects homepage-reveal">
							<h2 className="homepage-section-title center">Projects</h2>
							<p className="homepage-section-subtitle center">
								A selection of projects showcasing my experience in web, mobile, cloud, and AI systems.
							</p>
							<AllProjects />
						</div>

						<div className="homepage-section homepage-reveal">
							<h2 className="homepage-section-title center">Articles</h2>
							<p className="homepage-section-subtitle center">
								Thoughts on software engineering, system design, and real-world development.
							</p>

							<div className="homepage-articles">
								{myArticles.map((article, index) => (

									<div
										className="homepage-article-item"
										key={(index + 1).toString()}
									>
										<Article
											date={article().date}
											title={article().title}
											description={article().description}
											link="https://neethuvasundharan.medium.com"
										/>
									</div>
								))}
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
