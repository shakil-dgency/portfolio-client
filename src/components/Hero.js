"use client";
import Image from "next/image";
import React, { useState } from "react";
import heroimg from "../../public/hero/heroImage.jpg";
import profile from "../../public/hero/Avatar.png";
import { RxCrossCircled } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function Hero() {
	const [activeTab, setActiveTab] = useState(1);

	// const handlePopup = () => {
	// 	const modal = document.querySelector(".popup");
	// 	const popupShadow = document.querySelector(".popup-cover");

	// 	modal.classList.toggle("activee");
	// 	popupShadow.classList.remove("hidden");
	// };

	// const handleClose = () => {
	// 	const modal = document.querySelector(".popup");
	// 	const popupShadow = document.querySelector(".popup-cover");
	// 	modal.classList.remove("activee");
	// 	popupShadow.classList.add("hidden");
	// };

	const handleSelect = (id, e) => {
		setActiveTab(id);
		console.log(id);
	};
	return (
		<div>
			<div className="">
				<div className="g__body-containe">
					<div className="relative">
						<div className="h-[200px] md:h-[370px] overflow-hidden lg:rounded-b-lg ">
							<Image
								src={heroimg}
								alt="this is img"
								className="h-[280px] md:h-[390px] scale-[2] md:scale-[1.6] translate-x-[120px] sm:translate-x-[150px] object-cover "
							/>
						</div>
						<div className=" absolute top-[25px] ml-[16px] md:ml-[30px] lg:ml-[50px] z-10">
							<Link
								href="/"
								className="text-[#ffffff] text-center font-[500] text-[12px] md:text-[14px] flex items-center decoration-[1px]  underline underline-offset-4 "
							>
								<BiChevronLeft className="text-2xl" /> BACK TO DAILY DIGEST
							</Link>
						</div>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-center px-[16px] md:px-0">
						<div className="flex flex-col md:flex-row items-center md:gap-5 lg:gap-[30px] md:ml-[20px] lg:ml-[50px]">
							<div className=" md:flex-[0.5] h-[156px] w-[156px] lg:h-[189px] lg:w-[189px] bg-[#ffffff] rounded-full flex justify-center items-center -mt-[51px] lg:-mt-[71px] relative z-30">
								<div className=" overflow-hidden ">
									{/* <div className="relative h-[166px] w-[166px] bg-[#f3f3f3] rounded-full flex justify-center items-center border-[3.5px] border-[#0866FF]  overflow-hidden "> */}
									<Image
										src={profile}
										height={200}
										width={200}
										alt="this is img"
										className="h-[150px] w-[150px] lg:h-[183px] lg:w-[183px] rounded-full object-cover "
									/>
									{/* </div> */}
								</div>
								<div className="absolute right-1 lg:right-[2px] bottom-8 lg:bottom-10 ">
									<div className=" h-[16px] w-[16px] lg:h-[22px] lg:w-[22px] bg-[#ffffff] rounded-full flex justify-center items-center">
										<div className="h-[10px] w-[10px] lg:h-[14px] lg:w-[14px] bg-green-600 rounded-full"></div>
									</div>
								</div>
							</div>
							<div className=" md:max-w-[400px] lg:max-w-[500px] md:flex-[2]">
								<h1 className="text-center md:text-start text-[30px] md:text-[32px] lg:text-[40px] font-[600] mt-2.5 md:mt-[16px] text-[var(--bold-text)]">
									H M Hamiduzjaman
								</h1>
								<div className="max-w-[500px] md:max-w-none mt-[5px] md:mt-0 text-[15px] text-[var(--para-text)] text-center md:text-start">
									<span className="">Founder of dgency.com</span>
									<div className="mx-2 mb-[2px] h-[4px] w-[4px] bg-[#495057] rounded-full inline-block"></div>
									<span className="">Digital Marketing Strategist</span>
									<div className="mx-2 mb-[2px] h-[4px] w-[4px] bg-[#495057] rounded-full inline-block"></div>
									<span className="">Managed Over 10M Doller Ad Budget</span>
									<div className="mx-2 mb-[2px] h-[4px] w-[4px] bg-[#495057] rounded-full inline-block"></div>
									<span className="">Helping Businesses Scaling with Hyper Profitability </span>
									{/* {index !== data.length - 1 && <span className="">.</span>} */}
								</div>
							</div>
						</div>
						<div className=" self-center mt-6 md:mt-5 pr-[20px] lg:pr-[50px]">
							<button className=" bg-[#633ABD] text-white text-[16px] font-[500] md:text-[14px] px-8 py-3 lg:px-[25px] lg:py-[15px] rounded-md translate-x-0 ">
								Schedule a Call
							</button>
						</div>
					</div>
					<div className="h-[1px] w-[full] mt-5 bg-[#ADB5BD] mx-[16px] md:mx-[30px] lg:mx-[50px]"></div>
				</div>
				<div className="under_profile-pic ml-[16px] md:ml-[30px] lg:ml-[50px] ">
					<div className="">
						{/* max-w-[1180px] fixed z-50 top-20 bg-[#F6F7F9] */}
						<div className=" text-[15px] font-[400] text-[var(--bold-text)] pt-4 select-none ">
							<Swiper
								slidesPerView={3}
								spaceBetween={20}
								breakpoints={{
									640: {
										slidesPerView: 4,
										spaceBetween: 10,
									},
									768: {
										slidesPerView: 5,
										spaceBetween: 20,
									},
									1024: {
										slidesPerView: 8.5,
										spaceBetween: 25,
									},
								}}
								className="profileTabSlider"
							>
								<SwiperSlide>
									<button
										id="1"
										onClick={() => handleSelect(1, event)}
										className={` cursor-pointer ${
											activeTab === 1 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
										} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px] `}
									>
										Expertise
									</button>
								</SwiperSlide>
								<SwiperSlide>
									<button
										id="2"
										onClick={() => handleSelect(2, event)}
										className={` cursor-pointer ${
											activeTab === 2 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent "
										} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px] `}
									>
										Industries
									</button>
								</SwiperSlide>
								<SwiperSlide>
									<a
										id="3"
										href="#tools"
										onClick={() => handleSelect(3, event)}
										className={` cursor-pointer ${
											activeTab === 3 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
										} bg-[#ECECEC94] px-5 py-[6px] flex rounded-[50px]  `}
									>
										Tools
									</a>
								</SwiperSlide>
								<SwiperSlide>
									<button
										id="4"
										onClick={() => handleSelect(4, event)}
										className={` cursor-pointer ${
											activeTab === 4 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
										} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px]  `}
									>
										Experience
									</button>
								</SwiperSlide>
								<SwiperSlide>
									<button
										id="5"
										onClick={() => handleSelect(5, event)}
										className={` cursor-pointer ${
											activeTab === 5 ? "border-[1px] border-[#CEC6B1]" : " border-[1px] border-transparent"
										} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px] `}
									>
										Services
									</button>
								</SwiperSlide>
								<SwiperSlide>
									<button
										id="6"
										onClick={() => handleSelect(6, event)}
										className={` cursor-pointer ${
											activeTab === 6 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
										} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px]  `}
									>
										Highlights
									</button>
								</SwiperSlide>
								<SwiperSlide>
									<button
										id="7"
										onClick={() => handleSelect(7, event)}
										className={` cursor-pointer ${
											activeTab === 7 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
										} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px]  `}
									>
										Testimonials
									</button>
								</SwiperSlide>
								<SwiperSlide>
									<button
										id="8"
										onClick={() => handleSelect(8, event)}
										className={` cursor-pointer ${
											activeTab === 8 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
										} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px]  `}
									>
										Mentors
									</button>
								</SwiperSlide>
								<SwiperSlide>
									<button
										id="9"
										onClick={() => handleSelect(9, event)}
										className={` cursor-pointer ${
											activeTab === 9 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
										} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px]  `}
									>
										About
									</button>
								</SwiperSlide>
								<SwiperSlide>
									<button
										id="10"
										onClick={() => handleSelect(10, event)}
										className={` cursor-pointer ${
											activeTab === 10 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
										} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px]  `}
									>
										Education
									</button>
								</SwiperSlide>
								<SwiperSlide>
									<button
										id="11"
										onClick={() => handleSelect(11, event)}
										className={` cursor-pointer ${
											activeTab === 11 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
										} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px]  `}
									>
										Certifications
									</button>
								</SwiperSlide>
								<SwiperSlide>
									<button
										id="12"
										onClick={() => handleSelect(12, event)}
										className={` cursor-pointer ${
											activeTab === 12 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
										} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px]  `}
									>
										Membership
									</button>
								</SwiperSlide>
								<SwiperSlide>
									<button
										id="13"
										onClick={() => handleSelect(13, event)}
										className={` cursor-pointer ${
											activeTab === 13 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
										} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px]  `}
									>
										Interest
									</button>
								</SwiperSlide>
								<SwiperSlide>
									<button
										id="14"
										onClick={() => handleSelect(14, event)}
										className={` cursor-pointer ${
											activeTab === 14 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
										} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px]  `}
									>
										Books
									</button>
								</SwiperSlide>
								<SwiperSlide>
									<button
										id="15"
										onClick={() => handleSelect(15, event)}
										className={` cursor-pointer ${
											activeTab === 15 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
										} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px]  `}
									>
										Gallery
									</button>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
