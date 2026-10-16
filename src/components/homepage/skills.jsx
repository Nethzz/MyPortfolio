import React from "react";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/skills.css";

const skills = [
    {
        title: "Languages",
        items: [
            "TypeScript",
            "JavaScript",
            "Python",
            "Java",
            "Kotlin",
            "C#",
            "Dart",
            "SQL",
        ],
    },
    {
        title: "Frontend & Mobile",
        items: [
            "React",
            "React Native",
            "Expo",
            "Vite",
            "Next.js",
            "Vue.js",
            "Nuxt.js",
            "Flutter",
            "HTML",
            "CSS",
        ],
    },
    {
        title: "Backend & APIs",
        items: [
            "Node.js",
            "Express.js",
            "Hono",
            "Cloudflare Workers",
            ".NET",
            "ASP.NET Core",
            "REST APIs",
            "OpenAPI",
            "Orval",
        ],
    },
    {
        title: "Data & State Management",
        items: [
            "TanStack React Query",
            "Drizzle ORM",
            "PostgreSQL",
            "Neon",
            "MongoDB",
            "MySQL",
            "SQLite",
            "Firebase Firestore",
        ],
    },
    {
        title: "Testing & Quality Assurance",
        items: [
            "Playwright",
            "Jest",
            "Vitest",
            "End-to-End Testing",
            "Regression Testing",
            "Functional Testing",
            "Integration Testing",
            "UI/UX Testing",
            "API Testing",
            "Manual Testing",
            "Test Case Design",
            "Bug Validation",
        ],
    },
    {
        title: "Cloud & DevOps",
        items: [
            "Cloudflare",
            "Cloudflare Workers",
            "AWS",
            "Docker",
            "GitHub Actions",
            "GitLab CI/CD",
            "CI/CD",
            "Turborepo",
            "Git",
            "GitHub",
        ],
    },
    {
        title: "Integrations & Tools",
        items: [
            "Stripe",
            "Postman",
            "Swagger",
            "Figma",
            "Firebase",
            "OneSignal",
            "OpenAI APIs",
        ],
    },
    {
        title: "Product Management",
        items: [
            "Product Requirements",
            "User Stories",
            "Acceptance Criteria",
            "Sprint Planning",
            "Feature Prioritization",
            "Task Management",
            "Product Documentation",
            "Release Validation",
            "Stakeholder Coordination",
        ],
    },
    {
        title: "Leadership & Methodologies",
        items: [
            "Agile",
            "Scrum",
            "Technical Leadership",
            "Developer Mentoring",
            "Code Review",
            "Problem Solving",
            "Cross-functional Collaboration",
            "Client Communication",
        ],
    },
];

const Skills = () =>
{
    return (
        <div className="skills">
            <Card
                icon={faCode}
                title="Skills & Expertise"
                body={
                    <div className="skills-body">
                        <p className="skills-intro">
                            Technologies and practices I use across software development,
                            mobile engineering, product management, and quality assurance.
                        </p>

                        <div className="skills-grid">
                            {skills.map((category) => (
                                <div
                                    className="skill-category"
                                    key={category.title}
                                >
                                    <h3>{category.title}</h3>

                                    <div className="skill-tags">
                                        {category.items.map((skill) => (
                                            <span
                                                className="skill-tag"
                                                key={skill}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default Skills;