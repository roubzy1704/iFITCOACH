import React from "react";
import "./MediaSlider.css";
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
		<div class="container-fluid text-center carouselContainer">
			<div class="row mx-auto my-auto">
				<div
					id="mediaCarousel"
					class="carousel slide w-100"
					data-ride="carousel"
				>
					<div class="carousel-inner w-100" role="listbox">
						<div class="carousel-item active">
							<div class="col-md-4">
								<div class="card card-body">
									<img src={mashableLogo} className="card-img-top" alt="..." />
									<p className="card-text">
										“Literally transports you from home to wherever you choose
										to run.”
									</p>
								</div>
							</div>
						</div>
						<div class="carousel-item">
							<div class="col-md-4">
								<div class="card card-body">
									<img src={mashableLogo} className="card-img-top" alt="..." />
									<p className="card-text">
										“Breathes new life into a tired, old running routine.”
									</p>
								</div>
							</div>
						</div>
						<div class="carousel-item">
							<div class="col-md-4">
								<div class="card card-body">
									<img src={mashableLogo} className="card-img-top" alt="..." />
									<p className="card-text">
										“You focus on putting in the work, and the technology
										handles the rest.”
									</p>
								</div>
							</div>
						</div>
						<div class="carousel-item">
							<div class="col-md-4">
								<div class="card card-body">
									<img src={wiredLogo} className="card-img-top" alt="..." />
									<p className="card-text">
										“Literally transports you from home to wherever you choose
										to run.”
									</p>
								</div>
							</div>
						</div>
						<div class="carousel-item">
							<div class="col-md-4">
								<div class="card card-body">
									<img src={wiredLogo} className="card-img-top" alt="..." />
									<p className="card-text">
										“Breathes new life into a tired, old running routine.”
									</p>
								</div>
							</div>
						</div>
						<div class="carousel-item">
							<div class="col-md-4">
								<div class="card card-body">
									<img src={wiredLogo} className="card-img-top" alt="..." />
									<p className="card-text">
										“You focus on putting in the work, and the technology
										handles the rest.”
									</p>
								</div>
							</div>
						</div>
					</div>
					<a
						class="carousel-control-prev w-auto"
						href="#mediaCarousel"
						role="button"
						data-slide="prev"
					>
						<img src={left} alt="left" />
						<span class="sr-only">Previous</span>
					</a>
					<a
						class="carousel-control-next w-auto"
						href="#mediaCarousel"
						role="button"
						data-slide="next"
					>
						<img src={right} alt="left" />
						<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default MediaSlider;
