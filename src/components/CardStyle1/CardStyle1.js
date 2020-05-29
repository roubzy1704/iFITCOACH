import React from "react";
import "./CardStyle1.css";

function CardStyle1(props) {
	return (
		<div className="card deskCard">
			<img src={props.img} className="deskCardImage" alt="..." />
			<div className="cardBody">
				<div className="deskCardBody">
					<h5 className="DeskCardTitle">{props.title}</h5>
					<img className="deskCardAvatar" src={props.avatar} alt="avatar" />
				</div>
				<div className="metrics">
					<div className="time">
						<span
							className="iconify iconifyClass"
							data-icon="bi:stopwatch"
							data-inline="false"
						></span>
						<p>{props.time}</p>
					</div>
					<div className="distance">
						<span
							className="iconify iconifyClass"
							data-icon="cib:circle"
							data-inline="false"
						></span>
						<p>{props.distance}</p>
					</div>
				</div>
				<a href="#" className="details">
					VIEW DETAILS
				</a>
			</div>
		</div>
	);
}

export default CardStyle1;
