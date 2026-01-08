import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/works.css";

const Works = () =>
{
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						{/* Stakimo Internship */}
						<div className="work">
							<div className="work-title">
								Full Stack Developer Intern
							</div>
							<div className="work-subtitle">
								Stakimo · Paris, France
							</div>
							<div className="work-duration">2025 (5-month Academic Internship)</div>
							<div className="work-description">
								<ul>
									<li>
										Built and deployed SaaS web applications using Nuxt.js, Vue.js, PostgreSQL, and TypeScript.
									</li>
									<li>
										Implemented automated end-to-end testing using Playwright.
									</li>
									<li>
										Contributed to Agile sprints, peer code reviews, and development of scalable, reusable components with automated test flows.
									</li>
								</ul>
							</div>
						</div>

						{/* Srishti Innovative */}
						<div className="work">
							<div className="work-title">
								Senior Software Developer | Lead Developer
							</div>
							<div className="work-subtitle">
								Srishti Innovative · India
							</div>
							<div className="work-duration">2021 – 2024</div>
							<div className="work-description">
								<ul>
									<li>
										Led development of React.js web and React Native mobile applications, improving UI performance by 30% through reusable components.
									</li>
									<li>
										Directed backend development with Node.js, Express.js, and MongoDB, ensuring 99.9% API uptime and integrating payment gateways, authentication, real-time data, and OpenAI APIs.
									</li>
									<li>
										Managed AWS deployments with CI/CD pipelines, reducing release cycles by 40%.
									</li>
									<li>
										Mentored junior developers and led Agile sprints in collaboration with cross-functional teams.
									</li>
								</ul>
							</div>
						</div>

						{/* Comdudes */}
						<div className="work">
							<div className="work-title">
								Software Developer
							</div>
							<div className="work-subtitle">
								Comdudes · India
							</div>
							<div className="work-duration">2020 – 2021</div>
							<div className="work-description">
								<ul>
									<li>
										Developed high-performance Android and iOS applications using React Native.
									</li>
									<li>
										Integrated Vimeo API, Firebase, OneSignal, and payment gateways.
									</li>
									<li>
										Designed and consumed RESTful APIs using Spring Boot.
									</li>
								</ul>
							</div>
						</div>

						{/* Cerebtech */}
						<div className="work">
							<div className="work-title">
								Jr. Software Developer
							</div>
							<div className="work-subtitle">
								Cerebtech · India
							</div>
							<div className="work-duration">2017 – 2019</div>
							<div className="work-description">
								<ul>
									<li>
										Developed mobile applications using Java, Kotlin, and Dart with seamless RESTful API integration.
									</li>
									<li>
										Implemented third-party libraries such as Glide, Google Sign-In, and Facebook Login.
									</li>
								</ul>
							</div>
						</div>



					</div>
				}
			/>
		</div>
	);
};

export default Works;
