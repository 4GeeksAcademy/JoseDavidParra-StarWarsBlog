import React, { useContext, useEffect } from "react";
import logo from "../../img/StarWarsLogo.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store,actions} = useContext(Context)
	
	useEffect(()=>{},[store.favorites])
	return (
		<nav className="navbar navbar-light bg-light justify-content-between">
			<Link to="/" className="ms-5"><img src={logo} alt="Logo" width="55" height="40" className="d-inline-block align-text-top"></img></Link>
			<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle me-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites {store.favorites.length}
				</button>
				<ul className="dropdown-menu dropdown-menu-end">
					{store.favorites.map((item,index)=>
						<li key={index} className="dropdown-item d-flex align-items-center">{item} 
							<button className="btn" onClick={()=>actions.deleteFavorite(index)}>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
									<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
									<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
								</svg>
							</button>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
};
