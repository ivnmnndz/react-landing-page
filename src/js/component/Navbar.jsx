import React from "react";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarDrawer">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarDrawer">
					<ul className="navbar-nav ms-auto mb-2 mb-sm-0">
						<li className="nav-item">
							<a className="nav-link active" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">Contact</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">Services</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
