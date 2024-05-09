"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Pagination } from "swiper/modules";

let dataSum = 0;
let count = 0;

function HeroCtaCarusel() {
	const [activeTab, setActiveTab] = useState(0);
	const [heroCta, setHeroCta] = useState(false);
	const [resize, setResize] = useState();
	let newSum = 0;

	const handleSelect = (id, e) => {
		setActiveTab(id);
		console.log(id);
	};

	useEffect(() => {
		const sliderWrapper = document.querySelector(".profileTabSlider .swiper-wrapper");
		const handleScroll = () => {
			// console.log(window.scrollY);

			if (resize < 769) {
				setHeroCta(false);
			} else {
				if (window.scrollY > 500) {
					setHeroCta(true);
				} else {
					setHeroCta(false);

					dataSum = 0;
					count = 0;
					sliderWrapper.style.transform = `translate3d(-${count}px, 0, 0)`;
					// console.log("top");
				}
			}
		};
		const screen = window.screen;

		const handleResize = () => {
			setResize(screen.width);
		};

		setResize(screen.width);
		// console.log(resize, resize < 1220);

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);
	});

	let previousScroll = 0;

	const handleSetActive = (id) => {
		const scroll = window.scrollY;
		// console.log(scroll < previousScroll);
		const sliderWrapper = document.querySelector(".profileTabSlider .swiper-wrapper");

		const slider = document.getElementById(`${id}`);
		// console.log(scroll);

		if (dataSum < 200) {
			count = 0;
			sliderWrapper.style.transform = `translate3d(-${count}px, 0, 0)`;
		}
		if (scroll > 4800) {
			dataSum = 1150;
		}

		if (scroll > previousScroll) {
			dataSum += parseInt(slider.offsetWidth) + 20;
			if (resize > 1220) {
				if (dataSum > 1120) {
					count += parseInt(slider.offsetWidth) + 20;
					if (scroll > 4900 && scroll < 5500) {
						sliderWrapper.style.transform = `translate3d(-935px, 0, 0)`;
					}
					// console.log(count);
				}
			} else {
				if (dataSum + 150 > resize) {
					// if (count < 1164) {
					if (resize > 1024) {
						if (count < 1170) {
							count += parseInt(slider.offsetWidth) + 20;
							sliderWrapper.style.transform = `translate3d(-${count}px, 0, 0)`;
						}
					} else if (resize > 768) {
						if (count < 1324) {
							count += parseInt(slider.offsetWidth) + 20;
							sliderWrapper.style.transform = `translate3d(-${count}px, 0, 0)`;
						}
					}
					// }
				}
			}
		} else {
			// dataSum -= parseInt(slider.offsetWidth) + 20;
			if (count > 100) {
				count -= parseInt(slider.offsetWidth) + 20;
				if (resize > 1220) {
					if (scroll < 5100) {
						sliderWrapper.style.transform = `translate3d(0px, 0, 0)`;
					}
				} else {
					sliderWrapper.style.transform = `translate3d(-${count}px, 0, 0)`;
				}
				// console.log(count);
			} else {
				count = 0;
				sliderWrapper.style.transform = `translate3d(-${count}px, 0, 0)`;
			}
		}

		previousScroll = scroll;
	};

	let countNew = 0;
	const handleCtaClick = (e) => {
		let id = e.target.id;

		console.log(id);
	};

	return (
		<div className="h-[50px]">
			<div
				style={{ maxWidth: `${resize < 1220 ? resize + "px" : "1224px"}` }}
				className={`under_profile-pic  ${
					heroCta ? `  md:py-4 md:fixed z-30 top-12 bg-[#FDFDFD] md:shadow-sm pl-5` : "ml-[16px] md:ml-[30px] lg:ml-[50px] pt-4 relative z-10"
				}  `}
			>
				<div className="">
					{/*  */}
					<div className=" text-[15px] font-[400] text-[var(--bold-text)] select-none ">
						<Swiper
							slidesPerView="auto"
							// slidesPerGroup={3}
							spaceBetween={20}
							mousewheel={true}
							// pagination={{
							// 	clickable: true,
							// }}
							modules={[Mousewheel]}
							breakpoints={{
								640: {
									slidesPerView: "auto",
									spaceBetween: 20,
								},
								768: {
									slidesPerView: "auto",
									spaceBetween: 20,
								},
								1024: {
									slidesPerView: "auto",
									spaceBetween: 25,
								},
							}}
							className="profileTabSlider pb-1"
						>
							<SwiperSlide>
								<Link
									to="expertise"
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
									onSetActive={() => handleSetActive(1)}
									onClick={handleCtaClick}
									id="1"
									// onClick={() => handleSelect(1, event)}
									className={`scroll_bar-item cursor-pointer ${
										heroCta === false ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
									} bg-[#ECECEC94] px-5 py-[5px] rounded-[50px] flex `}
								>
									Expertise
								</Link>
							</SwiperSlide>
							<SwiperSlide>
								<Link
									to="industries"
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
									onSetActive={() => handleSetActive(2)}
									onClick={handleCtaClick}
									id="2"
									// onClick={() => handleSelect(2, event)}
									className={`scroll_bar-item cursor-pointer ${
										activeTab === 2 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent "
									} bg-[#ECECEC94] px-5 py-[5px] rounded-[50px] flex`}
								>
									Industries
								</Link>
							</SwiperSlide>
							<SwiperSlide>
								<Link
									to="tools"
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
									onSetActive={() => handleSetActive(3)}
									onClick={handleCtaClick}
									id="3"
									// onClick={() => handleSelect(3, event)}
									className={`scroll_bar-item cursor-pointer ${
										activeTab === 3 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
									} bg-[#ECECEC94] px-5 py-[5px] flex rounded-[50px]  `}
								>
									Tools
								</Link>
							</SwiperSlide>
							<SwiperSlide>
								<Link
									to="experience"
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
									id="4"
									onSetActive={() => handleSetActive(4)}
									onClick={handleCtaClick}
									// onClick={() => handleSelect(4, event)}
									className={`scroll_bar-item cursor-pointer ${
										activeTab === 4 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
									} bg-[#ECECEC94] px-5 py-[5px] rounded-[50px] flex `}
								>
									Experience
								</Link>
							</SwiperSlide>
							<SwiperSlide>
								<Link
									to="services"
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
									id="5"
									onSetActive={() => handleSetActive(5)}
									onClick={handleCtaClick}
									// onClick={() => handleSelect(5, event)}
									className={`scroll_bar-item cursor-pointer ${
										activeTab === 5 ? "border-[1px] border-[#CEC6B1]" : " border-[1px] border-transparent"
									} bg-[#ECECEC94] px-5 py-[5px] rounded-[50px] flex`}
								>
									Services
								</Link>
							</SwiperSlide>
							<SwiperSlide>
								<Link
									to="highlights"
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
									id="6"
									onSetActive={() => handleSetActive(6)}
									onClick={handleCtaClick}
									// onClick={() => handleSelect(6, event)}
									className={`scroll_bar-item cursor-pointer ${
										activeTab === 6 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
									} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px]  flex`}
								>
									Highlights
								</Link>
							</SwiperSlide>
							<SwiperSlide>
								<Link
									to="testimonials"
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
									id="7"
									onSetActive={() => handleSetActive(7)}
									onClick={handleCtaClick}
									// onClick={() => handleSelect(7, event)}
									className={`scroll_bar-item cursor-pointer ${
										activeTab === 7 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
									} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px] flex `}
								>
									Testimonials
								</Link>
							</SwiperSlide>
							<SwiperSlide>
								<Link
									to="mentors"
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
									id="8"
									onSetActive={() => handleSetActive(8)}
									onClick={handleCtaClick}
									// onClick={() => handleSelect(8, event)}
									className={`scroll_bar-item cursor-pointer ${
										activeTab === 8 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
									} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px] flex `}
								>
									Mentors
								</Link>
							</SwiperSlide>
							<SwiperSlide>
								<Link
									to="about"
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
									id="9"
									onSetActive={() => handleSetActive(9)}
									onClick={handleCtaClick}
									// onClick={() => handleSelect(9, event)}
									className={`scroll_bar-item cursor-pointer ${
										activeTab === 9 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
									} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px] flex `}
								>
									About
								</Link>
							</SwiperSlide>
							<SwiperSlide>
								<Link
									to="education"
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
									id="10"
									onSetActive={() => handleSetActive(10)}
									onClick={handleCtaClick}
									// onClick={() => handleSelect(10, event)}
									className={`scroll_bar-item cursor-pointer ${
										activeTab === 10 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
									} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px] flex `}
								>
									Education
								</Link>
							</SwiperSlide>
							<SwiperSlide>
								<Link
									to="certifications"
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
									id="11"
									onSetActive={() => handleSetActive(11)}
									// onClick={() => handleSelect(11, event)}
									className={`scroll_bar-item cursor-pointer ${
										activeTab === 11 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
									} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px] flex `}
								>
									Certifications
								</Link>
							</SwiperSlide>
							<SwiperSlide>
								<Link
									to="books"
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
									id="12"
									onSetActive={() => handleSetActive(12)}
									// onClick={() => handleSelect(12, event)}
									className={`scroll_bar-item cursor-pointer ${
										activeTab === 12 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
									} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px] flex `}
								>
									Books
								</Link>
							</SwiperSlide>
							<SwiperSlide>
								<Link
									to="interest"
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
									id="13"
									onSetActive={() => handleSetActive(13)}
									// onClick={() => handleSelect(13, event)}
									className={`scroll_bar-item cursor-pointer ${
										activeTab === 13 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
									} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px] flex `}
								>
									Interest
								</Link>
							</SwiperSlide>
							<SwiperSlide>
								<Link
									to="membership"
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
									id="14"
									onSetActive={() => handleSetActive(14)}
									// onClick={() => handleSelect(14, event)}
									className={`scroll_bar-item cursor-pointer ${
										activeTab === 14 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
									} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px] flex `}
								>
									Membership
								</Link>
							</SwiperSlide>
							<SwiperSlide>
								<Link
									to="gallery"
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
									id="15"
									onSetActive={() => handleSetActive(15)}
									// onClick={() => handleSelect(15, event)}
									className={`scroll_bar-item cursor-pointer ${
										activeTab === 15 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
									} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px] flex `}
								>
									Gallery
								</Link>
							</SwiperSlide>
							<SwiperSlide>
								<Link
									to="FrequentlyAsk"
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
									id="16"
									onSetActive={() => handleSetActive(16)}
									// onClick={() => handleSelect(15, event)}
									className={`scroll_bar-item cursor-pointer ${
										activeTab === 16 ? "border-[1px] border-[#CEC6B1]" : "border-[1px] border-transparent"
									} bg-[#ECECEC94] px-5 py-[6px] rounded-[50px] flex `}
								>
									Faq
								</Link>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroCtaCarusel;
