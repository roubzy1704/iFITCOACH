import React from "react";
import "./MainNav.css";
import logo from "./Image/iFITCOACH.png";

function MainNav() {
	return (
		<div>
			<nav className="navbar  mainNav navbar-expand-lg navbar-light bg-light ">
				<a className="navbar-brand" href="#">
					<img src={logo} alt="iFITCOACH"></img>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto navbar-center">
						<li className="nav-item active">
							<a className="nav-link mainLink" href="#">
								EXCERCISE <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link mainLink" href="#">
								NUTRITION
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link mainLink" href="#">
								ACTIVITY
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link mainLink" href="#">
								SLEEP
							</a>
						</li>
					</ul>

					<button className="mainNavBtn btn" type="submit">
						<p className="signup">sign up</p>
					</button>
				</div>
			</nav>
		</div>
	);
}

export default MainNav;
