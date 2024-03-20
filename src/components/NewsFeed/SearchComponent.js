"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

function SearchComponent({ search, setSearch, screen, handleSearchClose }) {
	const [newValue, setNewValue] = useState("");
	const handleSearch = () => {
		// setNewValue("");
		handleSearchClose();
	};
	return (
		<div>
			<div className="">
				<div className="relative flex max-w-[260px] md:max-w-[220px] md:ml-3">
					<form action="" id="myForm">
						<input
							id="search"
							type="text"
							// value={newValue}
							onChange={(e) => {
								setSearch(e.target.value);
								// setNewValue(e.target.value);
							}}
							className={`text-[15px] font-[400] outline-none px-2 md:px-0 py-2 md:py-[1px] w-full border-[1px] md:border-[0px] md:border-b-[1px] border-[#aeaeae] bg-transparent rounded-l-[5px] md:rounded-l-none`}
							placeholder="Search..."
						/>
					</form>
					<button
						onClick={handleSearch}
						className="bg-[#383838] md:bg-inherit text-white md:text-[#aeaeae] px-5 md:px-0 md:border-b-[1px] md:border-[#aeaeae] flex justify-center items-center rounded-r-[5px] md:rounded-r-none"
					>
						<IoIosSearch className="text-[24px] md:mr-1" />
					</button>
				</div>
				<p className="block md:hidden text-[13px] text-[#606060]  pt-2 md:pt-1">Lorem ipsum dolor sit amet.</p>
			</div>
		</div>
	);
}

export default SearchComponent;
