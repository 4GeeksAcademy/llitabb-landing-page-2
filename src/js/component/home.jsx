import React from "react";


import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";


const Home = () => {
	return (
	<>
	<Navbar />
			<div className="container pt-4 px-0">
				<div className="row">
					<div className="col-12 ms-1 ms-md-0">
						<Jumbotron />
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-lg-6 col-xl-3 mb-3 ms-1 ms-md-0">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
	</>	
	)
}

export default Home;
