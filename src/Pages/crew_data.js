import douglas from "../assets/crew/image-douglas-hurley.webp";
import mark from "../assets/crew/image-mark-shuttleworth.webp";
import victor from "../assets/crew/image-victor-glover.webp";
import anousheh from "../assets/crew/image-anousheh-ansari.webp";

const crewMembers = [
	{
		name: "Douglas Hurley",
		role: "Commander",
		image: (
			<img src={douglas} alt="Douglas Hurley" className="crew-image" />
		),
		description: (
			<div className="descriptive-text">
				Douglas Gerald Hurley is an American engineer, former <br />
				Marine Corps pilot and former NASA astronaut. He
				<br />
				launched into space for the third time as commander of
				<br />
				Crew Dragon Demo-2.
			</div>
		),
	},
	{
		name: "MARK SHUTTLEWORTH",
		role: "Mission Specialist ",
		image: (
			<img src={mark} alt="Mark Shuttleworth" className="crew-image" />
		),
		description: (
			<div className="descriptive-text">
				Mark Richard Shuttleworth is the founder and CEO of <br />{" "}
				Canonical, the company behind the Linux-based Ubuntu <br />{" "}
				operating system. Shuttleworth became the first South <br />{" "}
				African to travel to space as a space tourist.
			</div>
		),
	},
	{
		name: "Victor Glover",
		role: "PILOT",
		image: <img src={victor} alt="Victor Glover" className="crew-image" />,
		description: (
			<div className="descriptive-text">
				Pilot on the first operational flight of the SpaceX Crew <br />{" "}
				Dragon to the International Space Station. Glover is a <br />{" "}
				commander in the U.S. Navy where he pilots an F/A-18. He <br />{" "}
				was a crew member of Expedition 64, and served as a <br />{" "}
				station systems flight engineer.
			</div>
		),
	},
	{
		name: "Anousheh Ansari",
		role: "Flight Engineer",
		image: (
			<img src={anousheh} alt="Anousheh Ansari" className="crew-image" />
		),
		description: (
			<div className="descriptive-text">
				Anousheh Ansari is an Iranian American engineer and <br />{" "}
				co-founder of Prodea Systems. Ansari was the fourth <br />{" "}
				self-funded space tourist, the first self-funded woman to <br />{" "}
				fly to the ISS, and the first Iranian in space.
			</div>
		),
	},
];

export default crewMembers;
