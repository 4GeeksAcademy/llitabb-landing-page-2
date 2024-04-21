import React from "react";

// My Components
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

// My images
import brainImage from "/workspaces/llitabb-landing-page-2/src/img/brain-2062057_1280.jpg"
import butterfliesImage from "/workspaces/llitabb-landing-page-2/src/img/butterflies-1127666_1280.jpg"
import thanksImage from "/workspaces/llitabb-landing-page-2/src/img/calligraphy-2658504_1280.jpg"
import teamworkImage from "/workspaces/llitabb-landing-page-2/src/img/teamwork-3213924_960_720.jpg"

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
						<Card 
						imageUrl= {brainImage}
						title= "Brain"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus mattis orci, quis consequat eros porttitor non. Integer suscipit magna et est eleifend vulputate ut ut quam."
						buttonLabel="Find out for more!"
						buttonUrl="https://en.wikipedia.org/wiki/Brain"
						/>
					</div>
					<div className="col-12 col-lg-6 col-xl-3 mb-3 ms-1 ms-md-0">
						<Card 
						imageUrl= {butterfliesImage}
						title= "Butterflies"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus mattis orci, quis consequat eros porttitor non. Integer suscipit magna et est eleifend vulputate ut ut quam."
						buttonLabel="Find out for more!"
						buttonUrl="https://en.wikipedia.org/wiki/Butterfly"
						/>
					</div>
					<div className="col-12 col-lg-6 col-xl-3 mb-3 ms-1 ms-md-0">
						<Card 
						imageUrl= {thanksImage}
						title= "Thank you"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus mattis orci, quis consequat eros porttitor non. Integer suscipit magna et est eleifend vulputate ut ut quam."
						buttonLabel="Find out for more!"
						buttonUrl="https://en.wikipedia.org/wiki/Butterfly"
						/>
					</div>
					<div className="col-12 col-lg-6 col-xl-3 mb-3 ms-1 ms-md-0">
						<Card 
						imageUrl= {teamworkImage}
						title= "Teamwork"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus mattis orci, quis consequat eros porttitor non. Integer suscipit magna et est eleifend vulputate ut ut quam."
						buttonLabel="Find out for more!"
						buttonUrl="https://en.wikipedia.org/wiki/Teamwork"
						/>
					</div>
				</div>
			</div>
			<Footer />
	</>	
	)
}

export default Home;
