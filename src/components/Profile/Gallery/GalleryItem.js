"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SingleImage from "./SingleImage";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

let coverImage = [];
let shortImage = [];

function GalleryItem({ data }) {
	const [imageCount, setImageCount] = useState(686);
	const [view, setView] = useState(2);
	const [totalView, setTotalView] = useState();

	const handleLoadMore = () => {
		setImageCount(imageCount + 343);

		setView(view + 1);
	};
	const handleLoadLess = () => {
		setImageCount(686);

		setView(2);
	};
	// console.log(image);

	useEffect(() => {
		data.forEach((item, i) => {
			if (item.attributes.height < item.attributes.width) {
				coverImage.push(i);
			} else {
				shortImage.push(i);
			}
		});

		const uniqueCoverImageArray = Array.from(new Set(coverImage)); //remove duplicate item from array
		const uniqueShortImageArray = Array.from(new Set(shortImage));

		const withOutCover = Math.abs(uniqueCoverImageArray.length - uniqueShortImageArray.length); //always get positive value
		// console.log(withOutCover);
		const getViewFromShort = Math.ceil(withOutCover / 3);

		setTotalView(getViewFromShort + uniqueCoverImageArray.length);
	}, [data]);

	return (
		<div className="">
			<div className="hidden sm:block">
				<div style={{ height: imageCount }} className={`grid mb1:grid-cols-2 sm:grid-cols-3 gap-5 mb1:gap-3 mb3:gap-5 overflow-hidden`}>
					{data?.map((item, i) => {
						return <SingleImage image={item.attributes} id={item.id} key={item.id} />;
					})}
				</div>
				<div className="flex justify-center mt-5">
					{view < totalView ? (
						<button className="flex items-center gap-2" onClick={handleLoadMore}>
							See more <IoIosArrowDown size={16} className={``} />
						</button>
					) : (
						<button className="flex items-center gap-2" onClick={handleLoadLess}>
							See less <IoIosArrowDown size={16} className={`rotate-180`} />
						</button>
					)}
				</div>
			</div>
			<div className="sm:hidden">
				<Swiper
					slidesPerView={1}
					spaceBetween={35}
					speed={1000}
					navigation={true}
					pagination={{
						dynamicBullets: true,
					}}
					modules={[Navigation, Pagination]}
					className="mySwiper"
				>
					{data &&
						data.map((item) => {
							return (
								<SwiperSlide key={item.id}>
									<SingleImage image={item.attributes} />
								</SwiperSlide>
							);
						})}
				</Swiper>
			</div>
		</div>
	);
}

export default GalleryItem;
