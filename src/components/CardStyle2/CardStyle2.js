import React from "react";
import "./CardStyle2.css";

function CardStyle1(props) {
	return (
		<div class="card deskCard">
			<div class="cardHead">
				<img src={props.img} class="deskCardImage" alt="..." />
				<div class="image-overlay"></div>
				<div class="text-block">
					<h4>{props.count}</h4>
					<p>workouts</p>
					<span
						class="iconify workoutListIcon"
						data-icon="mdi:playlist-play"
						data-inline="false"
					></span>
				</div>
			</div>
			<div class="cardBody">
				<div class="deskCardBody">
					<h5 class="DeskCardTitle">{props.title}</h5>
					<img class="deskCardAvatar" src={props.avatar} alt="avatar" />
				</div>
			</div>
		</div>
	);
}

export default CardStyle1;
