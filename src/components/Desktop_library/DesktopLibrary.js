import React from "react";
import img1 from "./Images/img1.png";
import avatar1 from "./Images/avatar1.png";
import img2 from "./Images/img2.png";
import avatar2 from "./Images/avatar2.png";
import img3 from "./Images/img3.png";
import avatar3 from "./Images/avatar3.png";
import img4 from "./Images/img4.png";
import avatar4 from "./Images/avatar4.png";
import img5 from "./Images/img5.png";
import avatar5 from "./Images/avatar5.png";
import img6 from "./Images/img6.png";
import avatar6 from "./Images/avatar6.png";
import img7 from "./Images/img7.png";
import avatar7 from "./Images/avatar7.png";
import img8 from "./Images/img8.png";
import avatar8 from "./Images/avatar8.png";
import CardStyle1 from "../CardStyle1/CardStyle1";
import CardStyle2 from "../CardStyle2/CardStyle2";

function DesktopLibrary() {
	let cardStyle1Obj = [
		{
			title: "Lake Inniscarra, Ireland—Pyramid",
			time: "30:53",
			distance: "6,248M",
			img: img1,
			avatar: avatar1,
		},

		{
			title: "Slow Pulls and Fast Intervals",
			time: "44:13",
			distance: "9,948M",
			img: img3,
			avatar: avatar3,
		},
		{
			title: "Charles Race, Boston, Massachusetts",
			time: "36:22",
			distance: "8,648M",
			img: img5,
			avatar: avatar5,
		},
		{
			title: "Kafue River, Zambia—Power Stroke Pyramid",
			time: "22:22",
			distance: "4,660M",
			img: img7,
			avatar: avatar7,
		},
	];

	let cardStyle2Obj = [
		{
			title: "Performance Series",
			count: 9,
			img: img2,
			avatar: avatar2,
		},

		{
			title: "20 Minutes to Toned",
			count: 12,
			img: img4,
			avatar: avatar4,
		},
		{
			title: "Full-Body HIIT Series",
			count: 12,
			img: img6,
			avatar: avatar6,
		},
		{
			title: "Shred & Burn Series",
			count: 16,
			img: img8,
			avatar: avatar8,
		},
	];
	return (
		<div className="container-fluid">
			<div className="row justify-content-center mt-5">
				{cardStyle1Obj.map(function (card, index) {
					return (
						<div className="col-auto mb-3" key={index}>
							<CardStyle1
								title={card.title}
								time={card.time}
								distance={card.distance}
								img={card.img}
								avatar={card.avatar}
							/>
						</div>
					);
				})}
			</div>

			<div className="row justify-content-center">
				{cardStyle2Obj.map(function (card, index) {
					return (
						<div className="col-auto mb-3" key={index}>
							<CardStyle2
								title={card.title}
								count={card.count}
								img={card.img}
								avatar={card.avatar}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default DesktopLibrary;
