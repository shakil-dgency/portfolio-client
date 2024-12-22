"use client";
import React from "react";
import EmailSubscribe from "../EmailSubscribe";

function Header() {
	return (
		<div className="max-w-[1050px] mx-auto px-2 mt-8  md:mt-14">
			<div className="flex flex-col md:flex-row justify-between items-center">
				<div className="h-[inherit] sm:h-[68px] sm:ml-2.5 md:ml-0 mb-4  md:mb-0 pt-[25px] sm:pt-0">
					<h1 className="text-[26px] sm:text-[32px] font-[600] text-center md:text-left cursor-pointer">Blogs</h1>
					<p className="text-[14px] font-[400] text-[ #2C3E50]">Cutting-edge trends and timeless truths.</p>
				</div>
				<EmailSubscribe component="newsfeed" />
			</div>
		</div>
	);
}

export default Header;
