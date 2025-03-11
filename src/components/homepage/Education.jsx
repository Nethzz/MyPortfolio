import React from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/education.css";

const Education = () =>
{
    return (
        <div className="education">
            <Card
                icon={faGraduationCap}
                title="Education"
                body={
                    <div className="education-body">
                        <div className="education-item">
                            <div className="education-title">Masters in Software Engineering & Digital Transformation</div>
                            <div className="education-subtitle">ESIGELEC Engineering School, Rouen, France</div>
                            <div className="education-duration">2023 - 2025</div>
                            <div className="education-description">
                                <ul>
                                    <li>Pursuing a Master's degree focusing on software engineering and digital transformation techniques.</li>
                                    <li>Specializing in advanced topics like cloud computing, software development methodologies, and digital strategy.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="education-item">
                            <div className="education-title">Bachelor of Computer Science & Engineering</div>
                            <div className="education-subtitle">Musaliar College of Engineering, India</div>
                            <div className="education-duration">2011 - 2015</div>
                            <div className="education-description">
                                <ul>
                                    <li>Completed undergraduate studies in Computer Science & Engineering, gaining a strong foundation in programming, algorithms, and systems.</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default Education;
