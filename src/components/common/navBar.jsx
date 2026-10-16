import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) =>
{
	const { active } = props;
	const [isHidden, setIsHidden] = useState(false);
	const previousScrollY = useRef(0);

	useEffect(() =>
	{
		previousScrollY.current = window.scrollY;

		const handleScroll = () =>
		{
			const currentScrollY = window.scrollY;
			const scrollDelta = currentScrollY - previousScrollY.current;

			if (currentScrollY < 80)
			{
				setIsHidden(false);
				previousScrollY.current = currentScrollY;
				return;
			}

			if (Math.abs(scrollDelta) >= 6)
			{
				setIsHidden(scrollDelta > 0);
				previousScrollY.current = currentScrollY;
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav
					className={`navbar${isHidden ? " navbar-hidden" : ""}`}
					onFocusCapture={() => setIsHidden(false)}
				>
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							{/* <li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/articles">Articles</Link>
							</li> */}

							<li
								className={
									active === "recognitions"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/recognitions">Recognitions</Link>
							</li>

							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
