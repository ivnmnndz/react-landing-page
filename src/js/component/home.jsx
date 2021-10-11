import React from "react";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<Card />
			<Footer />
		</>
	);
};

export default Home;
