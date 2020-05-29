import React from "react";
import "./MediaSlider.css";
import gearJunkie from "./Logos/gearjunkie.svg";
import mashableLogo from "./Logos/mashable_logo.png";
import wiredLogo from "./Logos/wired_logo.png";
import $ from "jquery";
import left from "./Logos/slide_left_btn.png";
import right from "./Logos/slide_right_btn.png";

function MediaSlider() {
	$(document).ready(function () {
		$(".carousel .carousel-item").each(function () {
			var minPerSlide = 3;
			var next = $(this).next();
			if (!next.length) {
				next = $(this).siblings(":first");
			}
			next.children(":first-child").clone().appendTo($(this));

			for (var i = 0; i < minPerSlide; i++) {
				next = next.next();
				if (!next.length) {
					next = $(this).siblings(":first");
				}

				next.children(":first-child").clone().appendTo($(this));
			}
		});
	});

	return (
		<div className="container-fluid text-center carouselContainer">
			<div className="row mx-auto my-auto">
				<div
					id="mediaCarousel"
					className="carousel slide w-100"
					data-ride="carousel"
				>
					<div className="carousel-inner w-100" role="listbox">
						<div className="carousel-item active" data-interval="10000">
							<div className="col-md-4">
								<div className="card card-body">
									<img src={mashableLogo} className="card-img-top" alt="..." />
									<p className="card-text">
										“Literally transports you from home to wherever you choose
										to run.”
									</p>
								</div>
							</div>
						</div>
						<div className="carousel-item" data-interval="10000">
							<div className="col-md-4">
								<div className="card card-body">
									<img src={mashableLogo} className="card-img-top" alt="..." />
									<p className="card-text">
										“Breathes new life into a tired, old running routine.”
									</p>
								</div>
							</div>
						</div>
						<div className="carousel-item" data-interval="10000">
							<div className="col-md-4">
								<div className="card card-body">
									<img src={gearJunkie} className="card-img-top" alt="..." />
									<p className="card-text">
										“You focus on putting in the work, and the technology
										handles the rest.”
									</p>
								</div>
							</div>
						</div>
						<div className="carousel-item" data-interval="10000">
							<div className="col-md-4">
								<div className="card card-body">
									<img src={wiredLogo} className="card-img-top" alt="..." />
									<p className="card-text">
										“Literally transports you from home to wherever you choose
										to run.”
									</p>
								</div>
							</div>
						</div>
						<div className="carousel-item" data-interval="10000">
							<div className="col-md-4">
								<div className="card card-body">
									<img src={wiredLogo} className="card-img-top" alt="..." />
									<p className="card-text">
										“Breathes new life into a tired, old running routine.”
									</p>
								</div>
							</div>
						</div>
						<div className="carousel-item" data-interval="10000">
							<div className="col-md-4">
								<div className="card card-body">
									<img src={gearJunkie} className="card-img-top" alt="..." />
									<p className="card-text">
										“You focus on putting in the work, and the technology
										handles the rest.”
									</p>
								</div>
							</div>
						</div>
					</div>
					<a
						className="carousel-control-prev w-auto"
						href="#mediaCarousel"
						role="button"
						data-slide="prev"
					>
						<img src={left} alt="left" />
						<span className="sr-only">Previous</span>
					</a>
					<a
						className="carousel-control-next w-auto"
						href="#mediaCarousel"
						role="button"
						data-slide="next"
					>
						<img src={right} alt="left" />
						<span className="sr-only">Next</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default MediaSlider;
