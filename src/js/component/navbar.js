import React from "react";
import logo from "../../img/StarWarsLogo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 bg-body-tertiary">
			<div className="container-fluid">
				<Link to="/" className="ms-5"><img src={logo} alt="Logo" width="55" height="40" className="d-inline-block align-text-top"></img></Link>
				<span className="col-10"></span>
				<ul className="navbar-nav me-5 navbar-nav-scroll">
					<li className="nav-item dropdown-toggle">
						<a className="btn btn-primary">Favorites</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
