import React from "react";
import "./home.css";
import homeBg from "../assets/home/background-home-desktop.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
	document.body.style.backgroundImage = `url(${homeBg})`;

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className="home">
				<div className="home-container">
					<div className="home-text">
						<p className="intro-text">So, you want to travel to</p>
						<p className="heading-text">space</p>
						<p className="descriptive-text">
							Let’s face it; if you want to go to space, you might
							as well <br /> genuinely go to outer space and not
							hover kind of on the <br /> edge of it. Well sit
							back, and relax because we’ll give you <br />a truly
							out of this world experience!
						</p>
					</div>

					<Link to="/destination">
						<div className="home-btn">
							<div className="explore-btn">explore</div>
						</div>
					</Link>
				</div>
			</div>
		</motion.div>
	);
}

export default Home;
