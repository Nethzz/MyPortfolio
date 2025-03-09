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
							<img
								src="./company1.png"
								alt="Company 1"
								className="work-image"
							/>
							<div className="work-title">Software Engineer</div>
							<div className="work-subtitle">
								React Native, React.js, Node.js
							</div>
							<div className="work-duration">2020 - 2023</div>
						</div>

						<div className="work">
							<img
								src="./company2.png"
								alt="Company 2"
								className="work-image"
							/>
							<div className="work-title">Mobile & Web Application Developer</div>
							<div className="work-subtitle">
								Android, C#, Unity, Flutter, React Native
							</div>
							<div className="work-duration">2016 - 2020</div>
						</div>

						<div className="work">
							<img
								src="./esigelec.png"
								alt="ESIGELEC"
								className="work-image"
							/>
							<div className="work-title">Master’s Student - Software Engineering</div>
							<div className="work-subtitle">
								Digital Transformation & Research
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
