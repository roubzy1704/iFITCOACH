import React from "react";
import "./CardStyle2.css";

function CardStyle1(props) {
	return (
		<div className="card deskCard">
			<div className="cardHead">
				<img src={props.img} className="deskCardImage" alt="..." />
				<div className="image-overlay"></div>
				<div className="text-block">
					<h4>{props.count}</h4>
					<p>workouts</p>
					<span
						className="iconify workoutListIcon"
						data-icon="mdi:playlist-play"
						data-inline="false"
					></span>
				</div>
			</div>
			<div className="cardBody">
				<div className="deskCardBody">
					<h5 className="DeskCardTitle">{props.title}</h5>
					<img className="deskCardAvatar" src={props.avatar} alt="avatar" />
				</div>
			</div>
		</div>
	);
}

export default CardStyle1;
