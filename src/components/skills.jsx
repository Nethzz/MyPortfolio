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
                title="Skills & Expertise"
                body={
                    <div className="skills-body">
                        <div className="skill-category">
                            <h3>Languages</h3>
                            <p>
                                Python, Java, JavaScript, TypeScript, C#, Kotlin
                            </p>
                        </div>

                        <div className="skill-category">
                            <h3>Frontend & Mobile</h3>
                            <p>
                                React.js, Next.js, React Native, Flutter, HTML, CSS,
                                Nuxt.js, Vue.js
                            </p>
                        </div>

                        <div className="skill-category">
                            <h3>Backend & APIs</h3>
                            <p>
                                Node.js, Express.js, .NET, ASP.NET Core, REST APIs
                            </p>
                        </div>

                        <div className="skill-category">
                            <h3>Databases</h3>
                            <p>
                                MySQL, MongoDB, PostgreSQL, SQL
                            </p>
                        </div>

                        <div className="skill-category">
                            <h3>Testing</h3>
                            <p>
                                Unit Testing, End-to-End Testing, UI Testing,
                                Manual Testing, Playwright
                            </p>
                        </div>

                        <div className="skill-category">
                            <h3>DevOps & Tools</h3>
                            <p>
                                Docker, Git, GitHub, CI/CD, AWS,
                                Postman, Swagger
                            </p>
                        </div>

                        <div className="skill-category">
                            <h3>Methodologies</h3>
                            <p>
                                Agile, SCRUM, UML Modeling
                            </p>
                        </div>

                        <div className="skill-category">
                            <h3>Soft Skills</h3>
                            <p>
                                Analytical Thinking, Problem-Solving, Teamwork,
                                Adaptability, Mentoring, Client Communication
                            </p>
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default Skills;
