import React from "react";

const cardData = [
	{
		title: "Card Title 1",
		caption:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		img: "https://source.unsplash.com/random/500x325"
	},
	{
		title: "Card Title 2",
		caption:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		img: "https://source.unsplash.com/random/500x325"
	},
	{
		title: "Card Title 3",
		caption:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		img: "https://source.unsplash.com/random/500x325"
	},
	{
		title: "Card Title 4",
		caption:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
		img: "https://source.unsplash.com/random/500x325"
	}
];

const cardList = cardData.map((item, index) => {
	return (
		<div className="col-lg-3" key={index}>
			<div className="card text-center">
				<img
					src={item.img}
					className="card-img-top"
					alt="random photo"
				/>
				<div className="card-body">
					<h5 className="card-title">{item.title}</h5>
					<p className="card-text">{item.caption}</p>
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
});

function Card() {
	return (
		<div className="container mt-3 mb-3">
			<div className="row g-4">{cardList}</div>
		</div>
	);
}

export default Card;
