import React, { useState, useEffect } from "react";
import "./technology.css";
import technologyBg from "../assets/technology/background-technology-desktop.jpg";
import technologies from "./technology_data";
import { motion } from "framer-motion";

function Technology() {
	document.body.style.backgroundImage = `url(${technologyBg})`;

	const [technology, setTechnology] = useState(technologies[0]);

	useEffect(() => {
		let slider = setInterval(() => {
			setTechnology(
				technologies[
					technologies.indexOf(technology) + 1 < technologies.length
						? technologies.indexOf(technology) + 1
						: 0
				]
			);
		}, 7000);
		return () => {
			clearInterval(slider);
		};
	}, [technology]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className="main-container">
				<div className="heading-second">
					<span className="navbar-num d-navbar-num">03</span>
					<span className="navbar-text">Space Launch 101</span>
				</div>

				<div className="technology-main-container">
					<div className="tech-numbers">
						{technologies.map((tech, index) => {
							return (
								<div
									className={
										tech === technology
											? "tech-number tech-number-active"
											: "tech-number"
									}
									onClick={() => {
										setTechnology(tech);
									}}
								>
									{index + 1}
								</div>
							);
						})}
					</div>

					<div className="tech-main-text">
						<div className="navbar-text t-navbar-text no-hover">
							the terminology...
						</div>
						<div className="heading-text t-ht">
							{technology["name"]}
						</div>

						{technology["description"]}
					</div>

					<div className="tech-image-container">
						{technology["image"]}
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Technology;
