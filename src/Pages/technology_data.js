import launchVehicle from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "../assets/technology/image-spaceport-portrait.jpg";
import spaceCapsule from "../assets/technology/image-space-capsule-portrait.jpg";

const technologies = [
	{
		name: "launch vehicle",
		description: (
			<p className="descriptive-text">
				A launch vehicle or carrier rocket is a rocket-propelled <br />
				vehicle used to carry a payload from Earth's surface to <br />
				space, usually to Earth orbit or beyond. Our WEB-X <br />
				carrier rocket is the most powerful in operation. Standing{" "}
				<br />
				150 metres tall, it's quite an awe-inspiring sight on the
				<br /> launch pad!
			</p>
		),
		image: <img className="tech-image" src={launchVehicle} alt="" />,
	},
	{
		name: "SPACEPORT",
		description: (
			<p className="descriptive-text">
				A spaceport or cosmodrome is a site for launching (or <br />
				receiving) spacecraft, by analogy to the seaport for ships
				<br /> or airport for aircraft. Based in the famous Cape
				<br />
				Canaveral, our spaceport is ideally situated to take <br />
				advantage of the Earth’s rotation for launch.
			</p>
		),
		image: <img className="tech-image" src={spaceport} alt="" />,
	},
	{
		name: "SPACE CAPSULE",
		description: (
			<p className="descriptive-text">
				A space capsule is an often-crewed spacecraft that uses <br />a
				blunt-body reentry capsule to reenter the Earth's <br />
				atmosphere without wings. Our capsule is where you'll <br />
				spend your time during the flight. It includes a space <br />
				gym, cinema, and plenty of other activities to keep you <br />
				entertained.
			</p>
		),
		image: <img className="tech-image" src={spaceCapsule} alt="" />,
	},
];

export default technologies;
