"use client";
import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import CaruselStructure from "../CaruselStructure";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function IndustriesExpertise({ data }) {
	return (
		<div>
			<div id="industries" className="g__body-container ">
				<GlobalSectionStarter data={data?.data?.attributes.industries.section_head} />

				<CaruselStructure data={data?.data?.attributes.industries.industries_card} />
			</div>
		</div>
	);
}

export default IndustriesExpertise;
