"use client";
import Image from "next/image";
import React, { useState } from "react";
import heroimg from "../../public/hero/heroImage.jpg";
import profile from "../../public/hero/profile.jpg";
import { RxCrossCircled } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

function Hero() {
	const [activeTab, setActiveTab] = useState();

	const handlePopup = () => {
		const modal = document.querySelector(".popup");
		const popupShadow = document.querySelector(".popup-cover");

		modal.classList.toggle("activee");
		popupShadow.classList.remove("hidden");
	};

	const handleClose = () => {
		const modal = document.querySelector(".popup");
		const popupShadow = document.querySelector(".popup-cover");
		modal.classList.remove("activee");
		popupShadow.classList.add("hidden");
	};

	const handleSelect = (id, e) => {
		setActiveTab(id);
	};
	return (
		<div>
			<div className="">
				<div className="relative xl:flex">
					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#f3f3f3] opacity-70 z-20"></div>
					<div className="hidden xl:block h-[300px] w-full bg-[#7d7d7d]"></div>
					<div className="max-w-[1280px] xl:min-w-[1280px] mx-auto">
						<Image src={heroimg} alt="this is img" className="w-full h-[300px] object-cover object-center  " />
					</div>
					<div className="hidden xl:block h-[300px] w-full bg-[#68707d]"></div>
				</div>
				<div className="g__body-container">
					<div className="flex justify-between">
						<div className="flex gap-[14px]">
							<div className="h-[174px] w-[174px] bg-[#f3f3f3] rounded-full flex justify-center items-center -mt-[71px] relative z-30 ">
								<div className="relative h-[166px] w-[166px] bg-[#f3f3f3] rounded-full flex justify-center items-center border-[3.5px] border-[#0866FF]">
									<Image
										src={profile}
										height={200}
										width={200}
										alt="this is img"
										className="h-[152px] w-[152px] rounded-full object-cover  overflow-hidden "
									/>
									<div className="absolute right-[2px] bottom-6 ">
										<div className="h-[22px] w-[22px] bg-[#f3f3f3] rounded-full flex justify-center items-center">
											<div className="h-[14px] w-[14px] bg-green-600 rounded-full"></div>
										</div>
									</div>
								</div>
							</div>
							<div className="">
								<h1 className="text-[32px] font-[700] mt-[16px]">H M Hamiduzjaman</h1>
								<p className="">CEO, Dgency . Digital Marketer Strategist</p>
							</div>
						</div>
						<div className="self-end mb-4">
							<button onClick={handlePopup} className=" bg-[#0866FF] text-white px-4 py-2 rounded-md translate-x-0 ">
								Contact Now
							</button>
							{/* <div className="popup center shadow-md z-40 rounded-md">
								<div className="flex justify-end">
									<RxCross2 />
								</div>
								<form>
									<div className="flex gap-4">
										<div className="flex flex-col">
											<label htmlFor="name">Name</label>
											<input type="text" id="name" className="outline-none rounded-md px-2 py-1 mt-1" />
										</div>
										<div className="flex flex-col">
											<label htmlFor="email">Email</label>
											<input type="email" id="email" className="outline-none rounded-md px-2 py-1 mt-1" />
										</div>
									</div>
									<div className="flex gap-4 my-4">
										<div className="flex flex-col">
											<label htmlFor="name">Phone</label>
											<input type="text" id="name" className="outline-none rounded-md px-2 py-1 mt-1" />
										</div>
										<div className="flex flex-col">
											<label htmlFor="email">company</label>
											<input type="email" id="email" className="outline-none rounded-md px-2 py-1 mt-1" />
										</div>
									</div>
									<label htmlFor="message">Message</label>
									<textarea name="" id="message" cols="20" rows="8" className="w-full outline-none resize-none mt-1"></textarea>
								</form>
							</div> */}
							<div className="wrapper center popup z-40">
								<div className="container">
									<p className="text-center pb-4 font-[500] text-[18px]">Have a nice meeting with you🤝</p>
									<div className="">
										<RxCross2 onClick={handleClose} className="absolute right-5 top-4 text-[21px] cursor-pointer hover:animate-spin" />
									</div>
									<div className="input_box">
										<input type="text" id="user" className="input-field" required placeholder="" />
										<label htmlFor="user" className="label">
											Name
										</label>
									</div>
									<div className="input_box">
										<input type="email" id="email" className="input-field" required placeholder="" />
										<label htmlFor="email" className="label">
											Email
										</label>
									</div>
									<div className="input_box">
										<input type="number" id="number" className="input-field" required placeholder="" />
										<label htmlFor="number" className="label">
											Phone
										</label>
									</div>
									<div className="input_box">
										<textarea name="" id="message" cols="20" rows="6" className="input-field-area resize-none" required placeholder=""></textarea>
										<label htmlFor="message" className="label">
											Message
										</label>
									</div>
									<div className="flex justify-center ">
										<button className="bg-[#c6c3c3] border-[2px] border-transparent hover:bg-transparent hover:border-[2px] hover:border-[#c6c3c3] hover:text-[#fff] px-3 py-1 rounded-md text-black text-[20px]  mt-2">
											Submit
										</button>
									</div>
								</div>
							</div>
							<div className="popup-cover hidden absolute h-full w-full top-0 left-0 bg-[#5a5a5aa9] z-30"></div>
						</div>
					</div>
				</div>
				<div className="under_profile-pic max-w-[1050px] mx-auto mt-5">
					<div className="h-[2px] w-[full] bg-[#e6e6e6]"></div>
					<div className="">
						<ul className="ml-3 flex gap-6 font-[500] text-[#5d5d5d]">
							<li
								id="1"
								onClick={() => handleSelect(1, event)}
								className={`py-4 cursor-pointer ${activeTab === 1 ? "text-[#0866FF] underline underline-offset-[18px] decoration-[3px]" : ""}`}
							>
								Projects
							</li>
							<li
								id="2"
								onClick={() => handleSelect(2, event)}
								className={`py-4 cursor-pointer ${activeTab === 2 ? "text-[#0866FF] underline underline-offset-[18px] decoration-[3px]" : ""}`}
							>
								Experience
							</li>
							<li
								id="3"
								onClick={() => handleSelect(3, event)}
								className={`py-4 cursor-pointer ${activeTab === 3 ? "text-[#0866FF] underline underline-offset-[18px] decoration-[3px]" : ""}`}
							>
								Products
							</li>
							<li
								id="4"
								onClick={() => handleSelect(4, event)}
								className={`py-4 cursor-pointer ${activeTab === 4 ? "text-[#0866FF] underline underline-offset-[18px] decoration-[3px]" : ""}`}
							>
								Education
							</li>
							<li
								id="5"
								onClick={() => handleSelect(5, event)}
								className={`py-4 cursor-pointer ${activeTab === 5 ? "text-[#0866FF] underline underline-offset-[18px] decoration-[3px]" : ""}`}
							>
								Achievements
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
