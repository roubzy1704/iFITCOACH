import React from "react";
import "./ProductNav.css";

function ProductNav() {
	return (
		<nav className="nav proNav">
			<a className="nav-link proNavlink" href="#">
				BLOG
			</a>
			<p className="line"></p>
			<a className="nav-link proNavlink" href="#">
				NOURISH
			</a>
			<p className="line"></p>
			<a className="nav-link proNavlink" href="#">
				SHOP
			</a>
		</nav>
	);
}

export default ProductNav;
