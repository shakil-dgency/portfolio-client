import React from "react";
import { IoIosSearch } from "react-icons/io";

function SearchComponent({ search, setSearch }) {
	return (
		<div>
			<div className="">
				<div className="relative flex max-w-[220px] ml-3">
					<input
						type="text"
						onChange={(e) => setSearch(e.target.value)}
						className="text-[15px] font-[400] outline-none py-[1px] w-full border-b-[1px] border-[#aeaeae]   bg-transparent"
						placeholder="Search..."
					/>
					<button className=" text-[#aeaeae] border-b-[1px] border-[#aeaeae] flex justify-center items-center">
						<IoIosSearch className="text-[24px] mr-1" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default SearchComponent;
