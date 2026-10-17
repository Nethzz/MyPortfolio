
import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = ({ projects }) =>
{
	const projectList = projects || INFO.projects;

	if (!projectList.length)
	{
		return (
			<div className="projects-empty-state">
				<h3>No projects found</h3>
				<p>Try selecting another project category.</p>
			</div>
		);
	}

	return (
		<div className="all-projects-container">
			{projectList.map((project) => (
				<div className="all-projects-project" key={project.title}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						technologies={project.technologies || []}
						category={project.category}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
