"use client";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

function SearchComponent({ search, setSearch, screen, wantToSearch, handleSearch }) {
	useEffect(() => {
		const searchTxt = document.querySelector("#search");

		const handleEnterKeyPress = (e) => {
			// console.log(e.key);
			if (e.key === "Enter") {
				e.preventDefault();
				searchTxt.blur();
			}
		};

		searchTxt.addEventListener("keydown", handleEnterKeyPress);
	});
	return (
		<div>
			<div className="">
				<div className="relative flex md:w-[300px] md:ml-3 overflow-hidden">
					<form action="" id="myForm" className={`${wantToSearch ? "w-full sm:w-auto" : ""} `}>
						<input
							id="search"
							type="text"
							// value={newValue}
							onChange={(e) => {
								setSearch(e.target.value);
								// setNewValue(e.target.value);
							}}
							className={`text-[15px] w-full sm:w-auto font-[400] outline-none px-2 py-[1px] border-b-[1px] border-[#aeaeae] bg-transparent duration-500 ${
								wantToSearch ? "translate-x-0" : " translate-x-[150%] sm:translate-x-0"
							}  `}
							placeholder="Search..."
						/>
					</form>
					<button
						onClick={handleSearch}
						className={`${
							wantToSearch ? "border-b-[1px] border-[#aeaeae]" : ""
						} text-[#202020] sm:border-b-[1px] sm:border-[#aeaeae] -ml-1  md:px-0 flex justify-center items-center`}
					>
						<IoIosSearch className="text-[24px] md:mr-1" />
					</button>
				</div>
				{/* <p className="block md:hidden text-[13px] text-[#606060]  pt-2 md:pt-1">Lorem ipsum dolor sit amet.</p> */}
			</div>
		</div>
	);
}

export default SearchComponent;
