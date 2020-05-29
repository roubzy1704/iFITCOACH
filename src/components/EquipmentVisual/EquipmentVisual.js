import React from "react";
import "./EquipmentVisual.css";
import treadmill from "./Images/treadmill.png";
import bike from "./Images/bike.png";
import elliptical from "./Images/elliptical.png";
import strength from "./Images/strength.png";

function EquipmentVisual() {
	return (
		<div className="equipment">
			<h6 className="eqiupmentText">
				Interested in our exciting iFit-enabled equipment?
			</h6>
			<div class="container-fluid">
				<div class="row justify-content-center">
					<div class="col-auto h-100 mb-3">
						<div class="card equipCard">
							<img src={treadmill} class="card-img-top equipImg" alt="..." />
							<div class="cardText">
								<p>Treadmills</p>
							</div>
						</div>
					</div>
					<div class="col-auto h-100 mb-3">
						<div class="card equipCard">
							<img src={bike} class="card-img-top equipImg" alt="..." />
							<div class="cardText">
								<p>Bikes</p>
							</div>
						</div>
					</div>
					<div class="col-auto h-100 mb-3">
						<div class="card equipCard">
							<img src={elliptical} class="card-img-top equipImg" alt="..." />
							<div class="cardText">
								<p>Ellipticals</p>
							</div>
						</div>
					</div>
					<div class="col-auto h-100 mb-3">
						<div class="card equipCard">
							<img src={strength} class="card-img-top equipImg" alt="..." />
							<div class="cardText">
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
