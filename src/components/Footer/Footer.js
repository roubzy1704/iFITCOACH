import React from "react";
import "./Footer.css";
import youtube from "./Images/youtube.svg";
import pinterest from "./Images/pinterest.svg";
import facebook from "./Images/facebook.svg";
import twitter from "./Images/twitter.svg";
import instagram from "./Images/instagram.svg";
import $ from "jquery";

function Footer() {
	//dropup menu selection
	$(document).ready(function () {
		$(".dropdown-menu button").click(function () {
			$("#options").text($(this).text());
		});
	});

	return (
		<div className="footer">
			<div className="container">
				<div className="row justify-content-center m-2">
					<div className="col-auto h-100 mb-3 footerLink">
						<h5>Company</h5>
						<p>About</p>
						<p>Contact Us</p>
						<p>Careers</p>
					</div>
					<div className="col-auto h-100 mb-3 footerLink">
						<h5>Account</h5>
						<p>Log In</p>
						<p>Create Account</p>
					</div>
					<div className="col-auto h-100 mb-3 footerLink">
						<h5>Support</h5>
						<p>Help Center</p>
						<p>Accessibility</p>
					</div>
				</div>
			</div>
			<hr />
			<div className="social">
				<img src={youtube} alt="youtube" />
				<img src={facebook} alt="facebook" />
				<img src={pinterest} alt="pinterest" />
				<img src={twitter} alt="twitter" />
				<img src={instagram} alt="instagram" />
			</div>
			<hr />

			<div className="container-fluid bottom">
				<div className="row justify-content-center">
					<div className="col-md-3 mb-3">
						<div className="btn-group dropup language">
							<button
								id="options"
								type="button"
								className="languageBtn dropdown-toggle"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<span id="selected">English</span>
							</button>
							<div className="dropdown-menu">
								<button className="dropdown-item">English</button>
								<button className="dropdown-item">Spanish</button>
								<button className="dropdown-item">French</button>
								<button className="dropdown-item">Mandarin</button>
								<button className="dropdown-item">Russian</button>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="container legal">
							<div className="row justify-content-center">
								<div className=" col-auto ">
									<p>© iFit.com. All Rights Reserved.</p>
								</div>
								<div className="col-auto ">
									<p>Privacy Policy</p>
								</div>
								<div className="col-auto ">
									<p>Terms of Use</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3"></div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
