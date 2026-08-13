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

						{/* Ody */}
						<div className="work current-role">
							<div className="work-header">
								<div>
									<div className="work-title">
										Product Manager & Senior Full-Stack Developer
									</div>

									<div className="work-company-row">
										<div className="work-company">
											Ody
										</div>

										<div className="current-status">
											<span className="current-dot"></span>
											Current
										</div>
									</div>
								</div>

								<span className="work-type">
									Contract
								</span>
							</div>

							<div className="work-meta">
								<span>Paris, France</span>
								<span>•</span>
								<span>June 2026 – Present</span>
							</div>

							<div className="work-description">
								<ul>
									<li>
										Work across software development, product management, and quality
										assurance for B2B and B2C web and mobile products.
									</li>

									<li>
										Develop web and mobile features using TypeScript, React, Vite,
										Expo, React Native, and TanStack React Query.
									</li>

									<li>
										Build backend APIs with Hono and Cloudflare Workers using Neon
										PostgreSQL, Drizzle ORM, OpenAPI, and Orval.
									</li>

									<li>
										Contribute to a Turborepo monorepo supporting web, mobile,
										backend services, and shared packages.
									</li>



									<li>
										Translate business requirements into product specifications,
										user stories, acceptance criteria, and development tasks.
									</li>

									<li>
										Plan sprint priorities, coordinate developers, track delivery,
										and collaborate across product, design, and engineering.
									</li>

									<li>
										Perform functional, regression, integration, UI/UX, and
										end-to-end testing; document bugs and validate fixes before release.
									</li>
								</ul>
							</div>

							<div className="work-tech-stack">
								<span>TypeScript</span>
								<span>React</span>
								<span>Vite</span>
								<span>Expo</span>
								<span>React Native</span>
								<span>TanStack Query</span>
								<span>Hono</span>
								<span>Cloudflare Workers</span>
								<span>Neon PostgreSQL</span>
								<span>Drizzle ORM</span>
								<span>OpenAPI</span>
								<span>Orval</span>
								<span>Turborepo</span>
								<span>Stripe</span>
								<span>Cloudflare</span>
							</div>
						</div>

						{/* Stakimo */}
						<div className="work">
							<div className="work-header">
								<div>
									<div className="work-title">
										Full-Stack Developer Intern
									</div>

									<div className="work-company-row">
										<div className="work-company">
											Stakimo
										</div>
									</div>
								</div>

								<span className="work-type">
									Internship
								</span>
							</div>

							<div className="work-meta">
								<span>Paris, France</span>
								<span>•</span>
								<span>2025 · 5 months</span>
							</div>

							<div className="work-description">
								<ul>
									<li>
										Built and maintained SaaS web applications using
										Nuxt.js, Vue.js, TypeScript, and PostgreSQL.
									</li>

									<li>
										Developed reusable and scalable frontend components
										and contributed to application functionality across
										the development lifecycle.
									</li>

									<li>
										Implemented automated end-to-end testing using
										Playwright to improve regression coverage and reliability.
									</li>

									<li>
										Contributed to Agile sprints, peer code reviews,
										debugging, testing, and feature validation.
									</li>
								</ul>
							</div>

							<div className="work-tech-stack">
								<span>Vue.js</span>
								<span>Nuxt.js</span>
								<span>TypeScript</span>
								<span>PostgreSQL</span>
								<span>Playwright</span>
								<span>Git</span>
							</div>
						</div>

						{/* Srishti Innovative */}
						<div className="work">
							<div className="work-header">
								<div>
									<div className="work-title">
										Senior Software Developer | Lead Developer
									</div>

									<div className="work-company-row">
										<div className="work-company">
											Srishti Innovative
										</div>
									</div>
								</div>

								<span className="work-type">
									Full-time
								</span>
							</div>

							<div className="work-meta">
								<span>India</span>
								<span>•</span>
								<span>2021 – 2025</span>
							</div>

							<div className="work-description">
								<ul>
									<li>
										Led development of React and React Native applications
										and built reusable components for scalable web and mobile products.
									</li>

									<li>
										Designed and developed backend services using Node.js,
										Express.js, MongoDB, PostgreSQL, and REST APIs.
									</li>

									<li>
										Implemented authentication, payment integrations,
										real-time functionality, push notifications,
										deep linking, analytics, and third-party APIs.
									</li>

									<li>
										Built offline-first mobile workflows using SQLite
										and synchronization strategies.
									</li>

									<li>
										Managed AWS deployments and CI/CD pipelines
										while supporting production releases and issue resolution.
									</li>

									<li>
										Led and mentored developers, performed code reviews,
										supported technical decisions, and coordinated Agile development.
									</li>
								</ul>
							</div>

							<div className="work-tech-stack">
								<span>React Native</span>
								<span>React</span>
								<span>TypeScript</span>
								<span>JavaScript</span>
								<span>Node.js</span>
								<span>Express.js</span>
								<span>PostgreSQL</span>
								<span>MongoDB</span>
								<span>SQLite</span>
								<span>Firebase</span>
								<span>AWS</span>
								<span>Docker</span>
								<span>CI/CD</span>
							</div>
						</div>

						{/* Comdudes */}
						<div className="work">
							<div className="work-header">
								<div>
									<div className="work-title">
										Software Developer
									</div>

									<div className="work-company-row">
										<div className="work-company">
											Comdudes
										</div>
									</div>
								</div>

								<span className="work-type">
									Full-time
								</span>
							</div>

							<div className="work-meta">
								<span>India</span>
								<span>•</span>
								<span>2020 – 2021</span>
							</div>

							<div className="work-description">
								<ul>
									<li>
										Developed cross-platform Android and iOS applications
										using React Native.
									</li>

									<li>
										Integrated Firebase, OneSignal, Vimeo,
										payment gateways, notifications, and third-party services.
									</li>

									<li>
										Designed and consumed RESTful APIs
										to support mobile application features.
									</li>

									<li>
										Debugged production issues, improved application
										reliability, and supported mobile releases.
									</li>
								</ul>
							</div>

							<div className="work-tech-stack">
								<span>React Native</span>
								<span>JavaScript</span>
								<span>Firebase</span>
								<span>OneSignal</span>
								<span>Vimeo</span>
								<span>REST APIs</span>
							</div>
						</div>

						{/* Cerebtech */}
						<div className="work">
							<div className="work-header">
								<div>
									<div className="work-title">
										Junior Software Developer
									</div>

									<div className="work-company-row">
										<div className="work-company">
											Cerebtech
										</div>
									</div>
								</div>

								<span className="work-type">
									Full-time
								</span>
							</div>

							<div className="work-meta">
								<span>India</span>
								<span>•</span>
								<span>2017 – 2019</span>
							</div>

							<div className="work-description">
								<ul>
									<li>
										Developed Android and cross-platform mobile applications
										using Java, Kotlin, Flutter, and Dart.
									</li>

									<li>
										Integrated REST APIs and third-party libraries
										including Google Sign-In, Facebook Login, and Glide.
									</li>

									<li>
										Worked on application debugging, maintenance,
										performance improvements, and new feature development.
									</li>
								</ul>
							</div>

							<div className="work-tech-stack">
								<span>Java</span>
								<span>Kotlin</span>
								<span>Flutter</span>
								<span>Dart</span>
								<span>REST APIs</span>
							</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;