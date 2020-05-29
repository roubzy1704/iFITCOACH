import React from "react";
import $ from "jquery";
import "./EquipmentVisual.css";
import treadmill from "./Images/treadmill.png";
import elliptical from "./Images/elliptical.svg";
import strength from "./Images/strength.png";
import bike from "./Images/bike.svg";

function EquipmentVisual() {
	$(document).ready(function () {
		/* Every time the window is scrolled ... */
		$(window).scroll(function () {
			/* Check the location of each desired element */
			$(".equipCard").each(function (i) {
				var bottom_of_object = $(this).offset().top + $(this).outerHeight();
				var bottom_of_window = $(window).scrollTop() + $(window).height();

				/* If the object is completely visible in the window, fade it it */
				if (bottom_of_window > bottom_of_object) {
					$(this).animate({ opacity: "1" }, 1000);
				}
			});
		});
	});

	return (
		<div className="equipment">
			<h6 className="eqiupmentText">
				Interested in our exciting iFit-enabled equipment?
			</h6>
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-auto h-100 mb-3">
						<div className="card equipCard">
							<img
								src={treadmill}
								className="card-img-top equipImg"
								alt="..."
							/>
							<div className="cardText">
								<p>Treadmills</p>
							</div>
						</div>
					</div>
					<div className="col-auto h-100 mb-3">
						<div className="card equipCard">
							<img src={bike} className="card-img-top equipImg" alt="..." />
							<div className="cardText">
								<p>Bikes</p>
							</div>
						</div>
					</div>
					<div className="col-auto h-100 mb-3">
						<div className="card equipCard">
							<img
								src={elliptical}
								className="card-img-top equipImg"
								alt="..."
							/>
							<div className="cardText">
								<p>Ellipticals</p>
							</div>
						</div>
					</div>
					<div className="col-auto h-100 mb-3">
						<div className="card equipCard">
							<img src={strength} className="card-img-top equipImg" alt="..." />
							<div className="cardText">
								<p>Strength</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EquipmentVisual;
