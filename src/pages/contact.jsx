
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import
{
	faEnvelope,
	faPaperPlane,
	faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () =>
{
	useEffect(() =>
	{
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta
					name="description"
					content={currentSEO?.description || ""}
				/>
				<meta
					name="keywords"
					content={currentSEO?.keywords?.join(", ") || ""}
				/>
			</Helmet>

			<div className="page-content contact-page">
				<NavBar active="contact" />

				<main className="content-wrapper contact-content">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<section className="contact-layout">
						<div className="contact-main">
							<span className="contact-eyebrow">
								GET IN TOUCH
							</span>

							<h1 className="title contact-title">
								Let's Connect
							</h1>

							<p className="contact-lead">
								I'd love to hear from you!
							</p>

							<span className="contact-title-accent" />

							<div className="subtitle contact-subtitle">
								<p>
									Thank you for your interest in getting in
									touch with me. I welcome your feedback,
									questions, and suggestions. If you have a
									specific question or comment, please feel
									free to email me directly at{" "}
									<a href={`mailto:${INFO.main.email}`}>
										{INFO.main.email}
									</a>.
								</p>

								<p>
									I make an effort to respond to all
									messages within 24 hours, although it may
									take me longer during busy periods.
									Alternatively, you can use the contact
									form on my website to get in touch. Simply
									fill out the required fields and I'll get
									back to you as soon as possible.
								</p>

								<p>
									Thanks again for your interest, and I look
									forward to hearing from you!
								</p>
							</div>

							<div className="contact-social-section">
								<h2 className="contact-social-heading">
									CONNECT WITH ME
								</h2>
								<div className="contact-socials">
									<Socials />
								</div>
							</div>
						</div>

						<aside className="contact-aside">
							<div className="contact-portrait-area">
								<div className="contact-portrait-decoration" />
								<div className="contact-portrait-frame">
									<img
										src="/workimg.png"
										alt="Portrait"
										className="contact-portrait"
									/>
								</div>
								<span className="contact-decoration-dot contact-decoration-dot-one" />
								<span className="contact-decoration-dot contact-decoration-dot-two" />
							</div>

							<div className="contact-email-card">
								<div className="contact-email-icon">
									<FontAwesomeIcon icon={faEnvelope} />
								</div>

								<div className="contact-email-content">
									<h2>Email Me</h2>
									<p>Send me a message directly</p>
									<a
										className="contact-email-address"
										href={`mailto:${INFO.main.email}`}
									>
										{INFO.main.email}
									</a>

									<a
										className="contact-email-button"
										href={`mailto:${INFO.main.email}`}
									>
										<FontAwesomeIcon icon={faPaperPlane} />
										<span>Send an Email</span>
										<FontAwesomeIcon
											icon={faArrowUpRightFromSquare}
											className="contact-email-arrow"
										/>
									</a>
								</div>
							</div>
						</aside>
					</section>

					<div className="page-footer contact-footer">
						<Footer />
					</div>
				</main>
			</div>
		</>
	);
};

export default Contact;
