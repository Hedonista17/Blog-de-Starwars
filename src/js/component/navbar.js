import React from "react";
import { Link } from "react-router-dom";
import logoWeb from '../../img/logoWeb.png';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
			<img id="logoweb"src={logoWeb}></img>
			</Link>
			<p className="my-4" id="titulo-navbar">Las increibles aventuras de Lucas el Jedi.</p>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-dark">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
