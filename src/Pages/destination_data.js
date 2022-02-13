import moon from "../assets/destination/image-moon.webp";
import europa from "../assets/destination/image-europa.webp";
import mars from "../assets/destination/image-mars.webp";
import titan from "../assets/destination/image-titan.webp";

const destinations = [
	{
		planet: "Moon",
		distance: "384,400 km",
		time: "3 Days",
		description: (
			<p className="descriptive-text">
				See our planet as you’ve never seen it before. A perfect <br />
				relaxing trip away to help regain perspective and come <br />
				back refreshed. While you’re there, take in some history <br />
				by visiting the Luna 2 and Apollo 11 landing sites.
			</p>
		),
		image: <img src={moon} className="planet-image" alt="Moon" />,
	},

	{
		planet: "Mars",
		distance: "225 mil. km",
		time: "9 Months",
		description: (
			<p className="descriptive-text">
				Don’t forget to pack your hiking boots. You’ll need them to{" "}
				<br />
				tackle Olympus Mons, the tallest planetary mountain in <br />{" "}
				our solar system. It’s two and a half times the size of <br />{" "}
				Everest!
			</p>
		),
		image: <img src={mars} className="planet-image" alt="Mars" />,
	},

	{
		planet: "Europa",
		distance: "628 mil. km",
		time: "3 years",
		description: (
			<p className="descriptive-text">
				The smallest of the four Galilean moons orbiting Jupiter, <br />{" "}
				Europa is a winter lover’s dream. With an icy surface, it’s{" "}
				<br /> perfect for a bit of ice skating, curling, hockey, or
				simple <br /> relaxation in your snug wintery cabin.
			</p>
		),
		image: <img src={europa} className="planet-image" alt="Europa" />,
	},

	{
		planet: "Titan",
		distance: "1.6 bil. km",
		time: "7 years",
		description: (
			<p className="descriptive-text">
				The only moon known to have a dense atmosphere other <br /> than
				Earth, Titan is a home away from home (just a few <br /> hundred
				degrees colder!). As a bonus, you get striking <br /> views of
				the Rings of Saturn.
			</p>
		),
		image: <img src={titan} className="planet-image" alt="Titan" />,
	},
];

export default destinations;
