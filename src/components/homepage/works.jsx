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
						<div className="work">

							<div className="work-title">Software Engineer</div>
							<div className="work-subtitle">
								React, React Native, Node.js, AWS, OpenAI APIs
							</div>
							<div className="work-duration">2021 - 2023</div>
							<div className="work-description">
								<ul>
									<li>
										Built and maintained reusable React components for scalable applications in an Agile environment.
									</li>
									<li>
										Deployed applications on AWS and ensured smooth CI/CD workflows.
									</li>
									<li>
										Enhanced user experiences by integrating OpenAI APIs into React projects.
									</li>
								</ul>
							</div>
						</div>

						<div className="work">

							<div className="work-title">Software Engineer</div>
							<div className="work-subtitle">
								React Native, Firebase, Vimeo API, OneSignal, Payment Gateways
							</div>
							<div className="work-duration">2020 - 2021</div>
							<div className="work-description">
								<ul>
									<li>
										Developed Android and iOS apps using React Native with optimized performance.
									</li>
									<li>
										Integrated Vimeo API, Firebase, OneSignal, and payment gateways.
									</li>
								</ul>
							</div>
						</div>

						<div className="work">

							<div className="work-title">Jr. Software Engineer</div>
							<div className="work-subtitle">
								Java, Dart, RESTful API, Glide, Google Sign-In, Facebook Login
							</div>
							<div className="work-duration">2017 - 2019</div>
							<div className="work-description">
								<ul>
									<li>
										Developed mobile applications in Java and Dart with seamless RESTful API integration.
									</li>
									<li>
										Implemented third-party libraries (e.g., Glide, Google Sign-In, Facebook Login).
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
