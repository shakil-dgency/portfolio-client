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
import EmailSubscribe from "./EmailSubscribe";

import { usePathname } from "next/navigation";

function NavBar({ search, setSearch, isSearch }) {
	const [screen, setScreen] = useState(null);
	const [sideBarOpen, setSideBarOpen] = useState(false);
	const [wantToSearch, setWantToSearch] = useState(false);
	const [toggle, setToggle] = useState(false);
	const [isNavButton, setIsNavButton] = useState(false);

	const sidebarRef = useRef();
	const navigate = usePathname();

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

		let navbar = document.querySelector(".navbar");
		var lastScrollTop = 0;

		//for button visibility
		window.addEventListener("scroll", function () {
			let scrollTop = window.scrollY || document.documentElement.scrollTop;
			if (scrollTop > 400) {
				setIsNavButton(true);
			} else {
				setIsNavButton(false);
			}
		});

		// Navbar OnScroll functionality

		if (screenSize.width < 768) {
			window.addEventListener("scroll", function () {
				let scrollTop = window.scrollY || document.documentElement.scrollTop;
				if (scrollTop > 300) {
					if (scrollTop > lastScrollTop) {
						setToggle(false);
						if (toggle == true) {
							navbar.style.top = "0";
						} else {
							navbar.style.top = "-120px";
						}
					} else if (lastScrollTop > scrollTop + 20) {
						navbar.style.top = "0";
					}
				} else {
					navbar.style.top = "0";
				}

				lastScrollTop = scrollTop;
			});
		}
	});

	const handleOpenSideBar = (e) => {
		e.preventDefault();
		let sideBar = document.querySelector(".sidebar");
		let navbar = document.querySelector(".navbar");

		// for adjustment of scrollbar width
		// document.body.classList.add("mr-[0.560rem]");

		setSideBarOpen(true);

		window.onscroll = function () {
			window.scrollTo(0, 0);
		};

		document.body.classList.add("overflow-y-hidden");
		document.body.classList.add("body_cover");
		setTimeout(() => {
			sideBar.classList.remove("right-[-120%]");
			sideBar.classList.add("right-[0]");
		}, 50);
	};

	const handleClose = () => {
		let sideBar = document.querySelector(".sidebar");
		let navbar = document.querySelector(".navbar");

		sideBar.classList.remove("right-[0]");
		sideBar.classList.add("right-[-120%]");
		setSideBarOpen(false);
		window.onscroll = function () {};
		setTimeout(() => {
			// document.body.classList.remove("mr-[0.560rem]");
			document.body.classList.remove("overflow-y-hidden");
			document.body.classList.remove("body_cover");
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
			setToggle(true);
		}
		console.log(search);
	};

	return (
		<div className="navbar bg-[#ffffff] duration-500 text-[#222222] fixed  z-40  top-0 w-full shadow-md md:shadow-sm ">
			<div className="max-w-[1224px] mx-auto px-2.5 sm:px-[16px] mxl:px-0 w-full flex gap-3 justify-between items-center py-3 sm:py-3 relative ">
				<div
					className={`logo ${
						screen < 640 && wantToSearch ? "translate-x-[-200%] sm:translate-x-0 flex-[0]" : ""
					} duration-500 mb3:block italic font-[700] relative ${sideBarOpen ? "-z-10" : "z-[inherit]"} `}
				>
					<Link href={"/"}>
						<Image src={logo} alt="" className="w-[130px] mb2:w-[180px] sm:w-[250px]" />
					</Link>
				</div>

				<div className={`${screen < 640 && screen !== null ? "" : ""}  flex justify-end items-center gap-3 sm2:gap-6 ${sideBarOpen ? "-z-10" : "z-[inherit]"}`}>
					{isSearch && (
						<div className={`${screen > 640 && screen !== null ? "block" : ""} w-full sm:w-auto`}>
							<SearchComponent
								search={search}
								setSearch={setSearch}
								screen={screen}
								setWantToSearch={setWantToSearch}
								toggle={toggle}
								wantToSearch={wantToSearch}
								handleSearch={handleSearch}
							/>
						</div>
					)}

					{!isSearch && isNavButton && navigate === "/profile" && (
						<div className="flex  ">
							<Link href={`/schedule-call`} className=" bg-[#633ABD] text-white font-[500] text-[11px] mb1:text-[12px] mb2:text-[14px] px-3 md:px-8 py-3 lg:px-[25px] rounded-md ">
								Schedule a Call
							</Link>
						</div>
					)}

					<button onClick={handleOpenSideBar} className={`py-[6px] flex justify-center items-center`}>
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
						<li className="">
							<Link href={"/profile"} onClick={handleClose} className="hover:text-[#8C00BF]">
								Author's Profile
							</Link>
						</li>
						<li className=" cursor-pointer">
							<Link href={"/"} onClick={handleClose} className="hover:text-[#9900CC]">
								Daily Digest
							</Link>
						</li>

						<li className="">
							<Link href={"/blog"} onClick={handleClose} className="hover:text-[#8C00BF]">
								Blog
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
				{<EmailSubscribe />}
				<RxCross2
					onClick={handleClose}
					className={`${screen < 768 && screen !== null ? "" : ""} absolute right-5 top-4 text-[28px] cursor-pointer hover:animate-spin`}
				/>
				<Link href={"/"} onClick={handleClose} className="absolute left-5 top-6 sm:hidden">
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
