import React from "react";
import { IoIosSearch } from "react-icons/io";

function SearchComponent() {
	return (
		<div>
			<div className="sticky top-8">
				<p className="mt-8 mb-2 font-[700]">Search</p>
				<div className="relative flex max-w-[280px]">
					<input type="text" className="text-[15px] outline-none px-2 py-[6px] w-full rounded-l-md border-[1px] border-black bg-transparent" />
					<button className=" bg-black text-white px-2 rounded-r-md w-[90px] flex justify-center items-center">
						<IoIosSearch className="text-[26px]" />
					</button>
				</div>
				<p className="text-[14px] mt-2">Lorem ipsum dolor sit, amet consectetur</p>

				<div className="">
					<p className="mt-6 mb-2 font-[700]">Subscribe</p>
					<div className="relative flex max-w-[280px]">
						<input
							type="email"
							placeholder="dgency@gmail.com"
							className="outline-none px-2 py-[6px] w-full rounded-l-md border-[1px] border-[#ffb900] bg-transparent text-[15px]"
						/>
						<button className=" bg-[#ffb900] text-white px-2 rounded-r-md text-[14px] w-[90px] ">Sign Up</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchComponent;
