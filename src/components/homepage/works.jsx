
import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import INFO from "../../data/user";
import "./styles/works.css";

const Works = () =>
{
	const companies = INFO.experience?.companies || [];

	const getWorkType = (company) =>
	{
		if (company.company === "Ody") return "Contract";
		if (company.company === "Stakimo") return "Internship";
		return "Full-time";
	};

	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						{companies.map((company) => (
							<article
								className="work"
								key={`${company.company}-${company.period}`}
							>
								<div className="work-header">
									<div className="work-heading">
										<div className="work-title">
											{company.role?.trim()}
										</div>

										<div className="work-company-row">
											<div className="work-company">
												{company.company}
											</div>
										</div>
									</div>

									<span className="work-type">
										{getWorkType(company)}
									</span>
								</div>

								<div className="work-meta">
									{company.location && (
										<span>{company.location}</span>
									)}

									{company.location && company.period && (
										<span aria-hidden="true">•</span>
									)}

									{company.period && (
										<span>{company.period}</span>
									)}
								</div>

								{company.description && (
									<p className="work-summary">
										{company.description}
									</p>
								)}

								{company.responsibilities?.length > 0 && (
									<div className="work-description">
										<ul>
											{company.responsibilities.map(
												(responsibility, index) => (
													<li key={index}>
														{responsibility}
													</li>
												)
											)}
										</ul>
									</div>
								)}

								{company.technologies?.length > 0 && (
									<div
										className="work-tech-stack"
										aria-label={`Technologies used at ${company.company}`}
									>
										{company.technologies.map(
											(technology) => (
												<span key={technology}>
													{technology}
												</span>
											)
										)}
									</div>
								)}
							</article>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
