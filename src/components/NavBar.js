"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import logo from "../../public/H M Hamiduzjaman - Logo.svg";

function NavBar() {
	useEffect(() => {
		let lastScrollTop = 0;
		let navBar = document.querySelector(".navbar");

		window.addEventListener("scroll", function () {
			let scrollTop = window.scrollY || document.documentElement.scrollTop;
			if (scrollTop > 70) {
				navBar.classList.remove("bg-[#FAFAFA]");
				navBar.classList.add("bg-[rgba(0,0,0,0.1)]");
			} else if (scrollTop === 0) {
				navBar.classList.add("bg-[#FAFAFA]");
				navBar.classList.remove("bg-[rgba(0,0,0,0.1)]");
			}

			// if (scrollTop > 600) {
			// if (scrollTop > lastScrollTop) {
			// 	navbar.style.top = "-150px";
			// 	setServiceMenubar(false);
			// 	setResourcesOpen(false);
			// 	setQuizeState(false);
			// 	setMoreState(false);
			// } else if (scrollTop === 0) {
			// 	if (marketingBanner === true) {
			// 		navbar.style.top = "56px";
			// 	} else if (marketingBanner === false) {
			// 		navbar.style.top = "0";
			// 	}
			// } else if (lastScrollTop > scrollTop + 20) {
			// 	navbar.style.top = "0";
			// }
			// }

			lastScrollTop = scrollTop;
		});
	});

	return (
		<div className="navbar bg-[#FAFAFA]  backdrop-blur-[25px] text-[#222222]  sticky top-0 z-50 w-full ">
			<div className="g__body-container flex justify-between py-2.5">
				<div className="logo italic font-[700]">
					<Link href={"/"}>
						<Image src={logo} alt="" className="w-[250px]" />
					</Link>
				</div>
				<div className="">
					<ul className="flex gap-5 font-[500]">
						<li className=" cursor-pointer">Home</li>
						<li className="">
							<Link href={"/profile"}>Profile</Link>
						</li>
						{/* <li className="cursor-pointer">About</li> */}
						<li className="cursor-pointer">Contact</li>

						{/* <li className="">NewsFeed</li> */}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
