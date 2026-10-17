
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import
	{
		faArrowUpRightFromSquare,
		faCode,
	} from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = ({
	logo,
	title,
	description,
	linkText,
	link,
	technologies = [],
	category,
}) =>
{
	const isExternal = /^https?:\/\//i.test(link || "");

	return (
		<article className="project">
			<div className="project-container">
				<div className="project-card-top">
					<div className="project-logo">
						{logo ? (
							<img src={logo} alt="" loading="lazy" />
						) : (
							<FontAwesomeIcon icon={faCode} />
						)}
					</div>

					<span className="project-category">
						{category === "AI"
							? "AI & Computer Vision"
							: category === "Mobile"
								? "Mobile Development"
								: "Web & Software"}
					</span>
				</div>

				<h3 className="project-title">{title}</h3>

				<p className="project-description">{description}</p>

				{technologies.length > 0 && (
					<div className="project-technologies">
						{technologies.map((technology) => (
							<span className="project-tech-tag" key={technology}>
								{technology}
							</span>
						))}
					</div>
				)}

				<div className="project-card-bottom">
					<span className="project-open-source">
						<FontAwesomeIcon icon={faCode} />
						Open source
					</span>

					{link && (
						<a
							className="project-link"
							href={link}
							target={isExternal ? "_blank" : undefined}
							rel={isExternal ? "noopener noreferrer" : undefined}
							aria-label={`${linkText || "View project"}: ${title}`}
						>
							{linkText || "View project"}
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
						</a>
					)}
				</div>
			</div>
		</article>
	);
};

export default Project;
