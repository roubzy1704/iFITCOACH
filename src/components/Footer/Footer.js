import React from "react";
import "./Footer.css";
import youtube from "./Images/youtube.png";
import pinterest from "./Images/pinterest.png";
import facebook from "./Images/facebook.svg";

function Footer() {
	return (
		<div className="footer">
			<h1>The Main Languages of the Web</h1>
			<hr />
			<p>
				{youtube} {pinterest} {facebook}
			</p>
			<hr />
		</div>
	);
}

export default Footer;
