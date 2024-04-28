"use client";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Card from "./IndustriesExpertise/Card";
import MentorCard from "./Mentors/MentorCard";
import BooksCard from "./Books/BooksCard";

function CaruselStructure({ mentor, books }) {
	return (
		<div className="] md:-mt-[110px]">
			<Swiper
				slidesPerView={mentor ? 1 : books ? 1 : 1}
				spaceBetween={25}
				breakpoints={{
					480: {
						slidesPerView: mentor ? 1.6 : books ? 1.2 : 1.2,
						spaceBetween: 15,
					},
					580: {
						slidesPerView: mentor ? 2 : books ? 1.4 : 1.5,
						spaceBetween: 20,
					},
					700: {
						slidesPerView: mentor ? 2.5 : books ? 1.7 : 1.7,
						spaceBetween: 20,
					},
					800: {
						slidesPerView: mentor ? 3 : books ? 2 : 2,
						spaceBetween: 20,
					},
					950: {
						slidesPerView: mentor ? 3 : books ? 2.4 : 2.4,
						spaceBetween: 20,
					},
				}}
				speed={1000}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Navigation, Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>{mentor ? <MentorCard /> : books ? <BooksCard /> : <Card />}</SwiperSlide>
				<SwiperSlide>{mentor ? <MentorCard /> : books ? <BooksCard /> : <Card />}</SwiperSlide>
				<SwiperSlide>{mentor ? <MentorCard /> : books ? <BooksCard /> : <Card />}</SwiperSlide>
				<SwiperSlide>{mentor ? <MentorCard /> : books ? <BooksCard /> : <Card />}</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default CaruselStructure;
