import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";
import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import douglas from "./assets/crew/image-douglas-hurley.webp";
import mark from "./assets/crew/image-mark-shuttleworth.webp";
import victor from "./assets/crew/image-victor-glover.webp";
import anousheh from "./assets/crew/image-anousheh-ansari.webp";
import launchVehicle from "./assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "./assets/technology/image-spaceport-portrait.jpg";
import spaceCapsule from "./assets/technology/image-space-capsule-portrait.jpg";
import moon from "./assets/destination/image-moon.webp";
import europa from "./assets/destination/image-europa.webp";
import mars from "./assets/destination/image-mars.webp";
import titan from "./assets/destination/image-titan.webp";
import crewBg from "./assets/crew/background-crew-desktop.jpg";
import destinationBg from "./assets/destination/background-destination-desktop.jpg";
import homeBg from "./assets/home/background-home-desktop.jpg";
import technologyBg from "./assets/technology/background-technology-desktop.jpg";

function LoadingComponent() {
	useEffect(() => {
		const images = [
			douglas,
			mark,
			victor,
			anousheh,
			launchVehicle,
			spaceport,
			spaceCapsule,
			moon,
			europa,
			titan,
			mars,
			homeBg,
			destinationBg,
			crewBg,
			technologyBg,
		];
		images.forEach((image) => {
			const img = new Image();
			img.src = image;
		});
	}, []);

	return null;
}

function App() {
	const location = useLocation();

	return (
		<>
			<LoadingComponent />
			<AnimatePresence exitBeforeEnter>
				<div className="App">
					<Navbar />
					<Routes location={location} key={location.pathname}>
						<Route exact path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />

						<Route path="/destination" element={<Destination />} />
						<Route path="/crew" element={<Crew />} />
						<Route path="/technology" element={<Technology />} />
					</Routes>
				</div>
			</AnimatePresence>
		</>
	);
}

export default App;
