import React from "react";
import "./Hero.css";

function Hero() {
	return (
		<div className="jumbotron">
			<div className="lead">
				<p className="heroText animated fadeInDown">
					The best personal training,<br></br> right in your own home
				</p>
				<a className="heroBtn btn" href="#" role="button">
					<span className="joinText">JOIN IFIT COACH</span>
				</a>
			</div>
		</div>
	);
}

export default Hero;
