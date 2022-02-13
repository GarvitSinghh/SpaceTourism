import React from "react";
import "./navbar.css";
import { ReactComponent as Logo } from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="navbar">
			<div className="navbar__left">
				<Link to="/">
					<Logo className="navbar__left--logo" />
				</Link>
			</div>

			<div className="navbar__line"></div>

			<div className="navbar__right">
				<div
					className={
						window.location.pathname === "/" ||
						window.location.pathname === "/home"
							? "navbar__right--item navbar--active"
							: "navbar__right--item"
					}
				>
					<span className="navbar-num">00</span>
					<Link to="/home" className="navbar-text">
						Home
					</Link>
				</div>
				<div
					className={
						window.location.pathname === "/destination"
							? "navbar__right--item navbar--active"
							: "navbar__right--item"
					}
				>
					<span className="navbar-num">01</span>
					<Link to="/destination" className="navbar-text">
						Destination
					</Link>
				</div>
				<div
					className={
						window.location.pathname === "/crew"
							? "navbar__right--item navbar--active"
							: "navbar__right--item"
					}
				>
					<span className="navbar-num">02</span>
					<Link to="/crew" className="navbar-text">
						Crew
					</Link>
				</div>
				<div
					className={
						window.location.pathname === "/technology"
							? "navbar__right--item navbar--active"
							: "navbar__right--item"
					}
				>
					<span className="navbar-num">03</span>
					<Link to="/technology" className="navbar-text">
						Technology
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
