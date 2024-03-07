import React from "react";
import { IoIosSearch } from "react-icons/io";

function SearchComponent({ search, setSearch }) {
	return (
		<div>
			<div className="">
				{/* <p className="mt-8 mb-2 font-[700]">Search</p> */}
				<div className="relative flex max-w-[220px] ">
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
				{/* <p className="text-[14px] mt-2">Lorem ipsum dolor sit, amet consectetur</p> */}

				{/* <div className="">
					<p className="mt-6 mb-2 font-[700]">Subscribe</p>
					<div className="relative flex max-w-[280px]">
						<input
							type="email"
							placeholder="dgency@gmail.com"
							className="outline-none px-2 py-[6px] w-full rounded-l-md border-[1px] border-[#ffb900] bg-transparent text-[15px]"
						/>
						<button className=" bg-[#ffb900] text-white px-2 rounded-r-md text-[14px] w-[90px] ">Sign Up</button>
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default SearchComponent;
