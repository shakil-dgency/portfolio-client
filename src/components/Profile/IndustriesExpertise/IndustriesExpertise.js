"use client";
import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import CaruselStructure from "../CaruselStructure";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function IndustriesExpertise() {
	return (
		<div>
			<div className="g__body-container ">
				<GlobalSectionStarter
					title="Industries"
					description="Everyone has the right to freedom of thought, conscience and religion freedom to change his religion or belief, and freedom, either alone. "
				/>

				<CaruselStructure />
			</div>
		</div>
	);
}

export default IndustriesExpertise;
