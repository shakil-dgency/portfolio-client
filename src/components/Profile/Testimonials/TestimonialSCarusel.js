"use client";

import React from "react";
import coma from "../../../../public/profile/coma.svg";
import profile from "../../../../public/hero/profile.jpg";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

function TestimonialSCarusel() {
	return (
		<div className="max-w-[1000px] mx-auto ">
			<Swiper
				slidesPerView={1}
				spaceBetween={35}
				speed={1000}
				navigation={true}
				pagination={{
					clickable: true,
				}}
				modules={[Navigation, Pagination]}
				className="TestimonialSwiper"
			>
				<SwiperSlide>
					<div className=" relative pt-[30px] md:pt-[60px] pb-[75px] md:pb-[100px] px-5 md:px-10 mb-20 bg-[url('/profile/testimonialBG.svg')] bg-repeat md:bg-[length:945px_945px] bg-center rounded-md">
						<div className=" relative z-10 text-[var(--bold-text)]">
							<p className="text-[26px] md:text-[40px] leading-[1.3] text-center">Everyone has the right</p>
							<p className="text-[14px] md:text-[16px] text-center pt-6 pb-5 md:pb-[30px] leading-[1.6]">
								Everyone has the right to freedom of thought, conscience and religion freedom to change his religion or belief, and freedom, either
								alone. Everyone has the right to freedom of thought, conscience and religion freedom to change his religion or belief, and freedom,
								either alone. 
							</p>
							<p className="text-[18px] text-center">John Doe</p>
							<p className="text-[15px] text-[#555555] text-center">Owner of Adventure</p>
						</div>
						<Image src={coma} width={100} height={200} alt="" className="h-[68px] absolute top-8 left-8" />
						<Image src={coma} width={100} height={200} alt="" className="h-[68px] absolute bottom-8 right-8 rotate-180" />
						<div className="img absolute bottom-[-50px] left-[50%] translate-x-[-50%] h-[110px] w-[110px]  md:h-[130px] md:w-[130px] rounded-full overflow-hidden flex justify-center items-center border-[2px] border-[#C7B69680]">
							<Image src={profile} height={100} width={200} alt="" className=" h-full object-cover" />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="max-w-[945px] mx-auto relative pt-[30px] md:pt-[60px] pb-[75px] md:pb-[100px] px-5 md:px-10 mb-20 bg-[url('/profile/testimonialBG.svg')] bg-repeat md:bg-[length:945px_945px] bg-center rounded-md">
						<div className="max-w-[740px] mx-auto relative z-10 text-[var(--bold-text)]">
							<p className="text-[26px] md:text-[40px] leading-[1] text-center">Everyone has the right</p>
							<p className="text-[14px] md:text-[16px] text-center pt-4 pb-5 md:pb-[30px]">
								Everyone has the right to freedom of thought, conscience and religion freedom to change his religion or belief, and freedom, either
								alone. Everyone has the right to freedom of thought, conscience and religion freedom to change his religion or belief, and freedom,
								either alone. 
							</p>
							<p className="text-[18px] text-center">John Doe</p>
							<p className="text-[14px] text-[#7C8084] text-center">Owner of Adventure</p>
						</div>
						<Image src={coma} width={100} height={200} alt="" className="h-[68px] absolute top-8 left-8" />
						<Image src={coma} width={100} height={200} alt="" className="h-[68px] absolute bottom-8 right-8 rotate-180" />
						<div className="img absolute bottom-[-50px] left-[50%] translate-x-[-50%] h-[110px] w-[110px]  md:h-[130px] md:w-[130px] rounded-full overflow-hidden flex justify-center items-center border-[2px] border-[#C7B69680]">
							<Image src={profile} height={100} width={200} alt="" className=" h-full object-cover" />
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default TestimonialSCarusel;
