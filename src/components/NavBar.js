"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../public/H M Hamiduzjaman - Logo.svg";
import SearchComponent from "./NewsFeed/SearchComponent";

import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

function NavBar({ search, setSearch, isSearch }) {
	const [screen, setScreen] = useState(null);
	const [sideBarOpen, setSideBarOpen] = useState(false);
	// useEffect(() => {
	// 	let lastScrollTop = 0;
	// 	let navBar = document.querySelector(".navbar");

	// 	window.addEventListener("scroll", function () {
	// 		// let scrollTop = window.scrollY || document.documentElement.scrollTop;
	// 		// if (scrollTop > 70) {
	// 		// 	navBar.classList.remove("bg-[#FAFAFA]");
	// 		// 	navBar.classList.add("bg-[rgba(0,0,0,0.1)]");
	// 		// } else if (scrollTop === 0) {
	// 		// 	navBar.classList.add("bg-[#FAFAFA]");
	// 		// 	navBar.classList.remove("bg-[rgba(0,0,0,0.1)]");
	// 		// }

	// 		// if (scrollTop > 600) {
	// 		// if (scrollTop > lastScrollTop) {
	// 		// 	navbar.style.top = "-150px";
	// 		// 	setServiceMenubar(false);
	// 		// 	setResourcesOpen(false);
	// 		// 	setQuizeState(false);
	// 		// 	setMoreState(false);
	// 		// } else if (scrollTop === 0) {
	// 		// 	if (marketingBanner === true) {
	// 		// 		navbar.style.top = "56px";
	// 		// 	} else if (marketingBanner === false) {
	// 		// 		navbar.style.top = "0";
	// 		// 	}
	// 		// } else if (lastScrollTop > scrollTop + 20) {
	// 		// 	navbar.style.top = "0";
	// 		// }
	// 		// }

	// 		lastScrollTop = scrollTop;
	// 	});
	// });

	useEffect(() => {
		let screenSize = window.screen;
		setScreen(screenSize.width);
		window.addEventListener("resize", function () {
			setScreen(screenSize.width);
		});
	});

	const handleOpenSideBar = () => {
		let navBar = document.querySelector(".sidebar");
		navBar.classList.remove("hidden");
		setSideBarOpen(true);
		if (screen > 768) {
			document.body.classList.add("mr-[0.560rem]");
		}
		document.body.classList.add("overflow-hidden");
		setTimeout(() => {
			navBar.classList.remove("right-[-120%]");
			navBar.classList.add("right-[0]");
			// document.body.classList.add("sidebar_shadow");
		}, 50);
		console.log(screen);
	};

	const handleClose = () => {
		let navBar = document.querySelector(".sidebar");
		navBar.classList.remove("right-[0]");
		navBar.classList.add("right-[-120%]");
		setSideBarOpen(false);
		setTimeout(() => {
			if (screen > 768) {
				document.body.classList.remove("mr-[0.560rem]");
			}
			document.body.classList.remove("overflow-hidden");
			navBar.classList.add("hidden");
			// setSearch("");
		}, 100);
	};

	return (
		<div className="navbar bg-[#ffffff]  backdrop-blur-[25px] text-[#222222] sticky z-40  top-0 w-full ">
			<div className="max-w-[1224px] mx-auto px-2.5 sm:px-[16px] mxl:px-0  flex justify-between py-3 sm:py-2.5 relative ">
				<div className={`logo italic font-[700] relative ${sideBarOpen ? "-z-10" : "z-[inherit]"} `}>
					<Link href={"/"}>
						<Image src={logo} alt="" className="w-[180px] sm:w-[250px]" />
					</Link>
				</div>

				<div className={`${screen < 768 && screen !== null ? "" : ""} flex gap-10 ${sideBarOpen ? "-z-10" : "z-[inherit]"}`}>
					{isSearch && (
						<div className={`${screen > 767 && screen !== null ? "block" : "hidden"}`}>
							<SearchComponent search={search} setSearch={setSearch} screen={screen} />
						</div>
					)}
					<HiMiniBars3BottomLeft className="text-[24px] cursor-pointer" onClick={handleOpenSideBar} />
				</div>
			</div>
			<div
				className={`${screen > 640 ? "sidebar_shadow" : ""} ${
					sideBarOpen ? "" : ""
				} sidebar  hidden  duration-300 absolute md:relativ right-[-120%]  bg-[#fafafa] md:bg-inher px-10 py-14  top-0 md:top-[inher] shadow  w-full sm:w-[50%] lg:w-[30%]  md:w-[inher] h-[100vh] md:h-[inher]`}
			>
				<ul className="flex flex-col-reverse gap-6 font-[600] mt-8 md:mt-0">
					<div className="flex flex-col gap-4">
						<li className=" cursor-pointer">
							<Link href={"/"} onClick={handleClose} className="hover:text-[#9900CC]">
								Home
							</Link>
						</li>
						<li className="">
							<Link href={"/profile"} onClick={handleClose} className="hover:text-[#8C00BF]">
								Profile
							</Link>
						</li>
						{/* <li className="cursor-pointer">About</li> */}
						<li className="">
							<Link href={"/contact"} onClick={handleClose} className="hover:text-[#8C00BF]">
								Contact
							</Link>
						</li>
					</div>

					{isSearch && (
						<div className={`${screen < 768 && screen !== null ? "block" : "hidden"}`}>
							<SearchComponent search={search} setSearch={setSearch} screen={screen} handleSearchClose={handleClose} />
						</div>
					)}
				</ul>
				<RxCross2
					onClick={handleClose}
					className={`${screen < 768 && screen !== null ? "" : ""} absolute right-5 top-4 text-[28px] cursor-pointer hover:animate-spin`}
				/>
			</div>
		</div>
	);
}

export default NavBar;
