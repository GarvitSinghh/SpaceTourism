import React, { useState, useEffect } from "react";
import "./crew.css";
import crewBg from "../assets/crew/background-crew-desktop.jpg";
import crewMembers from "./crew_data";
import { motion } from "framer-motion";

function Crew() {
	document.body.style.backgroundImage = `url(${crewBg})`;

	const [crewMember, setCrewMember] = useState(crewMembers[0]);

	useEffect(() => {
		let slider = setInterval(() => {
			setCrewMember(
				crewMembers[
					crewMembers.indexOf(crewMember) + 1 < crewMembers.length
						? crewMembers.indexOf(crewMember) + 1
						: 0
				]
			);
		}, 10000);
		return () => {
			clearInterval(slider);
		};
	}, [crewMember]);

	document.addEventListener("keydown", (e) => {
		switch (e.key) {
			case "ArrowRight":
				setCrewMember(
					crewMembers[
						crewMembers.indexOf(crewMember) + 1 < crewMembers.length
							? crewMembers.indexOf(crewMember) + 1
							: 0
					]
				);
				break;

			case "ArrowLeft":
				setCrewMember(
					crewMembers[
						crewMembers.indexOf(crewMember) - 1 >= 0
							? crewMembers.indexOf(crewMember) - 1
							: crewMembers.length - 1
					]
				);
				break;

			default:
				break;
		}
	});

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className="main-container">
				<div className="heading-second">
					<span className="navbar-num d-navbar-num">02</span>
					<span className="navbar-text">meet your crew</span>
				</div>

				<div className="crew-main-container">
					<div className="cmc-left">
						<div className="cm-role heading-text c-ht2">
							{crewMember["role"]}
						</div>
						<div className="cm-name heading-text c-ht">
							{crewMember["name"]}
						</div>
						{crewMember["description"]}

						<div className="oval-container">
							{crewMembers.map((cm, index) => {
								return (
									<div
										key={index}
										className={
											cm === crewMember
												? "oval oval-active"
												: "oval"
										}
										onClick={() => {
											setCrewMember(cm);
										}}
									></div>
								);
							})}
						</div>
					</div>

					<div className="cmc-right">{crewMember["image"]}</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Crew;
