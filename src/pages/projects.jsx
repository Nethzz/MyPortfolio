
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import
	{
		faArrowRight,
		faCode,
		faLayerGroup,
		faMobileScreenButton,
		faRobot,
	} from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const filters = [
	{ label: "All projects", value: "All" },
	{ label: "AI & Computer Vision", value: "AI" },
	{ label: "Mobile", value: "Mobile" },
	{ label: "Web & Software", value: "Web" },
];

const Projects = () =>
{
	const [activeFilter, setActiveFilter] = useState("All");

	useEffect(() =>
	{
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	const projects = useMemo(() =>
	{
		return INFO.projects.map((project) =>
		{
			const technologies = project.technologies || [];
			const title = project.title.toLowerCase();

			let category = "Web";

			if (
				technologies.some((tech) =>
					["Python", "Machine Learning", "Computer Vision",
						"OpenCV", "MediaPipe"].includes(tech)
				)
			)
			{
				category = "AI";
			} else if (
				technologies.some((tech) =>
					["React Native", "Flutter", "Android", "iOS"].includes(tech)
				) || title.includes("capturex")
			)
			{
				category = "Mobile";
			}

			return { ...project, category };
		});
	}, []);

	const visibleProjects = projects.filter(
		(project) =>
			activeFilter === "All" || project.category === activeFilter
	);

	const categoryCounts = {
		All: projects.length,
		AI: projects.filter((project) => project.category === "AI").length,
		Mobile: projects.filter((project) => project.category === "Mobile").length,
		Web: projects.filter((project) => project.category === "Web").length,
	};

	return (
		<div className="page-content projects-page">
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta
					name="description"
					content={
						currentSEO?.description ||
						"Explore the software engineering, mobile development, and computer vision projects of Neethu Vasundharan Sheeja."
					}
				/>
				<meta
					name="keywords"
					content={currentSEO?.keywords?.join(", ") || "React Native, software engineering, portfolio"}
				/>
			</Helmet>

			<NavBar active="projects" />

			<main className="projects-content-wrapper">
				<section className="projects-hero">
					<div className="projects-hero-copy">
						<div className="projects-eyebrow">
							<span className="projects-eyebrow-dot" />
							SELECTED WORK
						</div>

						<h1>
							Projects built to
							<br />
							<span>solve real problems.</span>
						</h1>

						<p className="projects-hero-description">
							A collection of applications and experiments
							across mobile development, full-stack engineering,
							and computer vision. Each project represents an
							idea turned into working software.
						</p>

						<a className="projects-explore-link" href="#project-list">
							Explore my work
							<FontAwesomeIcon icon={faArrowRight} />
						</a>

						<div className="projects-stats">
							<div className="projects-stat">
								<strong>{projects.length.toString().padStart(2, "0")}</strong>
								<span>Projects</span>
							</div>
							<div className="projects-stat-divider" />
							<div className="projects-stat">
								<strong>8+</strong>
								<span>Years building</span>
							</div>
							<div className="projects-stat-divider" />
							<div className="projects-stat">
								<strong>03</strong>
								<span>Core areas</span>
							</div>
						</div>
					</div>

					<div className="projects-hero-art" aria-hidden="true">
						<div className="projects-art-orbit projects-art-orbit-one" />
						<div className="projects-art-orbit projects-art-orbit-two" />

						<div className="projects-art-card projects-art-card-back">
							<span className="projects-art-card-label">BUILD / TEST / SHIP</span>
							<div className="projects-art-code-line long" />
							<div className="projects-art-code-line medium" />
							<div className="projects-art-code-line short" />
						</div>

						<div className="projects-art-icon projects-art-icon-code">
							<FontAwesomeIcon icon={faCode} />
						</div>

						<div className="projects-art-icon projects-art-icon-mobile">
							<FontAwesomeIcon icon={faMobileScreenButton} />
						</div>

						<div className="projects-art-icon projects-art-icon-ai">
							<FontAwesomeIcon icon={faRobot} />
						</div>

						<div className="projects-art-center">
							<FontAwesomeIcon icon={faLayerGroup} />
							<span>IDEAS</span>
							<strong>INTO IMPACT</strong>
						</div>
					</div>
				</section>

				<section className="projects-work-section" id="project-list">
					<div className="projects-section-heading">
						<div>
							<div className="projects-eyebrow">THE PORTFOLIO</div>
							<h2>Explore my work<span>.</span></h2>
							<p>Projects, experiments, and things I’ve built along the way.</p>
						</div>

						<div className="projects-count">
							{String(visibleProjects.length).padStart(2, "0")} PROJECTS
						</div>
					</div>

					<div className="projects-filter-list" aria-label="Filter projects">
						{filters.map((filter) => (
							<button
								key={filter.value}
								type="button"
								className={`projects-filter ${activeFilter === filter.value ? "active" : ""
									}`}
								onClick={() => setActiveFilter(filter.value)}
								aria-pressed={activeFilter === filter.value}
							>
								{filter.label}
								<span>{categoryCounts[filter.value]}</span>
							</button>
						))}
					</div>

					<div className="projects-list">
						<AllProjects projects={visibleProjects} />
					</div>
				</section>

				<section className="projects-contact-banner">
					<div>
						<span className="projects-eyebrow">HAVE AN IDEA?</span>
						<h2>Let's build something meaningful.</h2>
						<p>
							I'm always interested in good ideas, useful products,
							and opportunities to collaborate.
						</p>
					</div>
					<a href={`mailto:${INFO.main.email}`}>
						Get in touch <FontAwesomeIcon icon={faArrowRight} />
					</a>
				</section>

				<div className="projects-page-footer">
					<Footer />
				</div>
			</main>
		</div>
	);
};

export default Projects;
