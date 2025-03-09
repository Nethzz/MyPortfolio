import React from "react";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Skills = () =>
{
    return (
        <div className="skills">
            <Card
                icon={faCode}
                title="Skills"
                body={
                    <div className="skills-body">
                        <div className="skill-category">
                            <h3>Programming Languages</h3>
                            <p>JavaScript, TypeScript, Python, Java, Kotlin, Swift, C#, R</p>
                        </div>

                        <div className="skill-category">
                            <h3>Web & Mobile Development</h3>
                            <p>React, React Native, React Hooks, React Router, Flutter, Dart, Node.js, Express.js, HTML, CSS, JavaScript, Material UI</p>
                        </div>

                        <div className="skill-category">
                            <h3>Backend & APIs</h3>
                            <p>RESTful APIs, Vimeo API</p>
                        </div>

                        <div className="skill-category">
                            <h3>Databases</h3>
                            <p>MongoDB, SQLite, MySQL</p>
                        </div>

                        <div className="skill-category">
                            <h3>DevOps & Tools</h3>
                            <p>Docker, GitHub, JIRA, Asana, Trello</p>
                        </div>

                        <div className="skill-category">
                            <h3>Soft Skills</h3>
                            <p>Leadership, Project Management, Problem-Solving, MS Office</p>
                            <p>Strong oral & written communication in English, Teamwork, Self-Motivation, Independence, Creativity</p>
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default Skills;
