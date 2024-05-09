import Image from "next/image";
import React from "react";
import heroimg from "../../public/hero/heroImage.jpg";
import profile from "../../public/hero/Avatar.png";
import { RxCrossCircled } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";
import HeroCtaCarusel from "./Profile/Hero/HeroCtaCarusel";

function Hero({ data }) {
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

	return (
		<div>
			<div className="">
				<div className="g__body-containe">
					<div className="relative">
						<div className="h-[200px] md:h-[370px] overflow-hidden lg:rounded-b-lg ">
							<Image
								src={data?.data?.attributes?.hero.cover_image?.data?.attributes?.url}
								alt="this is img"
								height={523}
								width={1000}
								className="h-[280px] md:h-[390px] w-full scale-[2] md:scale-[1.6] translate-x-[120px] sm:translate-x-[150px] object-cover "
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
					<div className="flex flex-col md:flex-row gap-5 justify-between items-center px-[16px] md:px-0">
						<div className="flex flex-col md:flex-row items-center md:gap-5 lg:gap-[30px] md:ml-[20px] lg:ml-[50px]">
							<div className=" md:flex-[0.5] h-[156px] w-[156px] lg:h-[189px] lg:w-[189px] bg-[#ffffff] rounded-full flex justify-center items-center -mt-[51px] lg:-mt-[71px] relative z-30">
								<div className=" overflow-hidden ">
									{/* <div className="relative h-[166px] w-[166px] bg-[#f3f3f3] rounded-full flex justify-center items-center border-[3.5px] border-[#0866FF]  overflow-hidden "> */}
									<Image
										src={data?.data?.attributes?.hero.profile_image?.data?.attributes?.url}
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
									{data?.data?.attributes?.hero.name}
								</h1>
								<div className="max-w-[500px] md:max-w-none mt-[5px] md:mt-0 text-[15px] text-[var(--para-text)] text-center md:text-start">
									{data?.data?.attributes?.hero.tags?.map((item, i) => {
										return (
											<span className="" key={item.id}>
												<span dangerouslySetInnerHTML={{ __html: item.tag }} />
												{}
												{i !== data?.data?.attributes?.hero.tags.length - 1 && (
													<div className="mx-2 mb-[2px] h-[4px] w-[4px] bg-[#495057] rounded-full inline-block"></div>
												)}
											</span>
										);
									})}
								</div>
							</div>
						</div>
						<div className=" self-center my-6 md:mt-5 pr-[16px] lg:pr-[50px]">
							<Link
								href={`${data?.data?.attributes?.hero.cta_slug ? data?.data?.attributes?.hero.cta_slug : "/schedule-call"}`}
								className=" bg-[#633ABD] text-white text-[16px] font-[500] md:text-[14px] px-8 md:px-3 py-3 lg:px-[25px] lg:py-[15px] rounded-md translate-x-0 "
							>
								{data?.data?.attributes?.hero.cta}
							</Link>
						</div>
					</div>
					<div className="h-[1px] w-[full] mt-5 bg-[#ADB5BD] mx-[16px] md:mx-[30px] lg:mx-[50px]"></div>
					<HeroCtaCarusel />
				</div>
			</div>
		</div>
	);
}

export default Hero;
