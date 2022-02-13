import React, { useState } from "react";
import "./destination.css";
import destinations from "./destination_data";
import destinationBg from "../assets/destination/background-destination-desktop.jpg";
import { motion } from "framer-motion";

function Destination() {
	const [destination, setDestination] = useState(destinations[0]);

	document.body.style.backgroundImage = `url(${destinationBg})`;

	function handleDestinationChange(dest) {
		console.log(dest);
		var d = destinations.filter((d) => d["planet"] === dest);
		setDestination(d[0]);
		console.log(destination);
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className="main-container">
				<div className="heading-second">
					<span className="navbar-num d-navbar-num">01</span>
					<span className="navbar-text">pick your destination</span>
				</div>

				<div className="destination-main-container">
					<div className="dmc-left">{destination["image"]}</div>

					<div className="dmc-right">
						<div className="planet-list">
							{destinations.map(({ planet }, index) => {
								return (
									<p
										className={
											destination["planet"] === planet
												? "navbar-text active"
												: "navbar-text"
										}
										key={index}
										onClick={() =>
											handleDestinationChange(planet)
										}
									>
										{planet}
									</p>
								);
							})}
							{/* <p className="navbar-text active">Moon</p>
						<p className="navbar-text">Mars</p>
						<p className="navbar-text">Europa</p>
						<p className="navbar-text">Titan</p> */}
						</div>

						<div className="planet-name">
							<p className="heading-text d-ht">
								{destination["planet"]}
							</p>
						</div>

						<div className="planet-desc">
							{destination["description"]}
						</div>

						<hr className="destination-line" />

						<div className="dist-time">
							<div className="dist">
								<span className="navbar-text d-dist">
									avg. distance
								</span>
								<p className="dst">{destination["distance"]}</p>
							</div>
							<div className="time">
								<span className="navbar-text d-time">
									est. travel time
								</span>
								<p className="dst">{destination["time"]}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Destination;
