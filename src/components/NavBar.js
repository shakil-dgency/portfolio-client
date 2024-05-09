/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../public/H M Hamiduzjaman - Logo.svg";
import SearchComponent from "./NewsFeed/SearchComponent";

import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";

function NavBar({ search, setSearch, isSearch }) {
	const [screen, setScreen] = useState(null);
	const [sideBarOpen, setSideBarOpen] = useState(false);
	const [wantToSearch, setWantToSearch] = useState(false);
	const sidebarRef = useRef();

	useEffect(() => {
		let screenSize = window.screen;
		setScreen(screenSize.width);
		window.addEventListener("resize", function () {
			setScreen(screenSize.width);
		});

		if (sideBarOpen) {
			document.addEventListener("click", (e) => {
				if (e.target.classList.contains("nav_cover")) {
					handleClose();
				}
			});
		}
	});

	const handleOpenSideBar = (e) => {
		e.preventDefault();

		let navBar = document.querySelector(".sidebar");
		// navBar.classList.remove("hidden");
		setSideBarOpen(true);
		// if (screen > 768) {
		// 	document.body.classList.add("mr-[0.560rem]");
		// }

		window.onscroll = function () {
			window.scrollTo(0, 0);
		};

		document.body.classList.add("overflow-y-hidden");
		setTimeout(() => {
			navBar.classList.remove("right-[-120%]");
			navBar.classList.add("right-[0]");
			// document.body.classList.add("sidebar_shadow");
		}, 50);
	};

	const handleClose = () => {
		let navBar = document.querySelector(".sidebar");
		navBar.classList.remove("right-[0]");
		navBar.classList.add("right-[-120%]");
		setSideBarOpen(false);
		window.onscroll = function () {};
		setTimeout(() => {
			// if (screen > 768) {
			// 	document.body.classList.remove("mr-[0.560rem]");
			// }
			document.body.classList.remove("overflow-y-hidden");
			// navBar.classList.add("hidden");
			// setSearch("");
		}, 100);
	};

	//navbar animation functionality

	const handleSearch = () => {
		// setNewValue("");
		// handleSearchClose();
		if (search !== "") {
			// setWantToSearch(true);
		} else {
			setWantToSearch(!wantToSearch);
		}
		console.log(search);
	};

	return (
		<div className="navbar bg-[#ffffff] backdrop-blur-[25px] text-[#222222] fixed z-40  top-0 w-full shadow-sm">
			<div className="max-w-[1224px] mx-auto px-2.5 sm:px-[16px] mxl:px-0 w-full flex gap-3 justify-end mb3:justify-between items-center py-3 sm:py-2.5 relative ">
				<div
					className={`logo ${
						wantToSearch ? "translate-x-[-200%] sm:translate-x-0 flex-[0]" : "flex-[1.5]"
					} duration-500 mb3:block w-full italic font-[700] relative ${sideBarOpen ? "-z-10" : "z-[inherit]"} `}
				>
					<Link href={"/"}>
						<Image src={logo} alt="" className="w-[180px] sm:w-[250px]" />
					</Link>
				</div>

				<div
					className={`${screen < 768 && screen !== null ? "" : ""} flex-[1] w-full sm:w-auto flex justify-end items-center gap-6 ${
						sideBarOpen ? "-z-10" : "z-[inherit]"
					}`}
				>
					{isSearch && (
						<div className={`${screen > 767 && screen !== null ? "block" : ""} w-full sm:w-auto`}>
							<SearchComponent search={search} setSearch={setSearch} screen={screen} wantToSearch={wantToSearch} handleSearch={handleSearch} />
						</div>
					)}
					<button onClick={handleOpenSideBar} className={` flex justify-center items-center`}>
						<FaBars className="mr-1 text-[var(--bold-text)] text-[24px] cursor-pointer" />
					</button>
				</div>
			</div>
			<div
				className={`${screen > 640 ? "sidebar_shado" : ""} ${
					sideBarOpen ? "" : ""
				} sidebar duration-300 absolute right-[-120%] z-50 bg-[#fafafa] md:bg-inher px-10 py-14  top-0 md:top-[inher] shadow  w-full sm:w-[50%] lg:w-[30%]  md:w-[inher] h-[100vh] md:h-[inher]`}
			>
				<ul className="flex flex-col-reverse gap-6 font-[500] mt-8 md:mt-0">
					<div className="flex flex-col gap-4">
						<li className=" cursor-pointer">
							<Link href={"/"} onClick={handleClose} className="hover:text-[#9900CC]">
								Daily Digest
							</Link>
						</li>
						<li className="">
							<Link href={"/profile"} onClick={handleClose} className="hover:text-[#8C00BF]">
								Author's Profile
							</Link>
						</li>
						{/* <li className="cursor-pointer">About</li> */}
						<li className="">
							<Link href={"/contact"} onClick={handleClose} className="hover:text-[#8C00BF]">
								Contact
							</Link>
						</li>
						<li className="">
							<Link href={"/schedule-call"} onClick={handleClose} className="hover:text-[#8C00BF]">
								Schedule a Call
							</Link>
						</li>
					</div>

					{/* {isSearch && (
						<div className={`${screen < 768 && screen !== null ? "block" : "hidden"}`}>
							<SearchComponent search={search} setSearch={setSearch} screen={screen} handleSearchClose={handleClose} />
						</div>
					)} */}
				</ul>
				{!isSearch && (
					<div className={``}>
						<div className="relative flex max-w-[330px] sm:max-w-[250px] mt-10">
							<input
								type="email"
								placeholder="Type your email...."
								className="outline-none px-2 py-[10px] sm:py-[7px] w-full rounded-l-[5px] border-[1px] border-[#222222] bg-transparent text-[14px]"
							/>
							<button className=" bg-[#222222] text-white px-[15px] rounded-r-[5px] text-[13px]  ml-[-10px] ">Subscribe</button>
						</div>
						<p className="text-[14px] text-[#ADB5BD]  pt-2 sm:pt-1">Email Terms & Privacy</p>
					</div>
				)}
				<RxCross2
					onClick={handleClose}
					className={`${screen < 768 && screen !== null ? "" : ""} absolute right-5 top-4 text-[28px] cursor-pointer hover:animate-spin`}
				/>
				<Link href={"/"} className="absolute left-5 top-6 sm:hidden">
					<Image src={logo} alt="" className="w-[180px] sm:w-[250px]" />
				</Link>
			</div>
			<div
				ref={sidebarRef}
				className={`${
					screen > 640 && sideBarOpen
						? "nav_cover after:bg-[#ffffff90] after:h-[100vw] after:w-[100%] after:absolute after:z-40 after:top-[-100px] "
						: "hidden"
				} w-full relative `}
			></div>
		</div>
	);
}

export default NavBar;
