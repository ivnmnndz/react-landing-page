import React from "react";

function Jumbotron() {
	return (
		<div className="container">
			<div className="p-5 mt-3 rounded-3 bg-success text-dark bg-opacity-10">
				<h1 className="display-5">A Warm Welcome!</h1>
				<p className="col-md-12 fs-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<button className="btn btn-primary btn-lg" type="button">
					Call to action!
				</button>
			</div>
		</div>
	);
}

export default Jumbotron;
