import React from "react";
import "./CardStyle1.css";

function CardStyle1(props) {
	return (
		<div class="card deskCard">
			<img src={props.img} class="deskCardImage" alt="..." />
			<div class="cardBody">
				<div class="deskCardBody">
					<h5 class="DeskCardTitle">{props.title}</h5>
					<img class="deskCardAvatar" src={props.avatar} alt="avatar" />
				</div>
				<div class="metrics">
					<div class="time">
						<span
							class="iconify iconifyClass"
							data-icon="bi:stopwatch"
							data-inline="false"
						></span>
						<p>{props.time}</p>
					</div>
					<div class="distance">
						<span
							class="iconify iconifyClass"
							data-icon="cib:circle"
							data-inline="false"
						></span>
						<p>{props.distance}</p>
					</div>
				</div>
				<a href="#" class="details">
					VIEW DETAILS
				</a>
			</div>
		</div>
	);
}

export default CardStyle1;
