"use client";
import React from "react";
import { usePathname } from "next/navigation";

function Footer() {
	const navigate = usePathname();

	return (
		<div>
			{navigate !== "/" && (
				<div className="bg-[#222222] py-16  w-full block">
					<div className=" g__body-container flex justify-between">
						<ul>
							<li className="text-[rgb(120,120,120)] text-[12px]">SITEMAP</li>
							<div className="text-[#ffffff] text-[14px] pt-2 flex flex-col gap-1">
								<li className="">HOME</li>
								<li className="">PROFILE</li>
								<li className="">CONTACT</li>
							</div>
						</ul>
						<ul>
							<li className="text-[rgb(120,120,120)] text-[12px]">LEGAL</li>
							<div className="text-[#ffffff] text-[14px] pt-2 flex flex-col gap-1">
								<li className="">TERMS & CONDITIONS</li>
								<li className="">COOKIES POLICY</li>
								<li className="">ACCEPTABLE USE POLICY</li>
							</div>
						</ul>
						<ul>
							<li className="text-[rgb(120,120,120)] text-[12px]">CONNECT</li>
							<div className="text-[#ffffff] text-[14px] pt-2 flex flex-col gap-1">
								<li className="">INSTAGRAM</li>
								<li className="">FACEBOOK</li>
								<li className="">TWITTER</li>
							</div>
						</ul>
					</div>
				</div>
			)}
		</div>
	);
}

export default Footer;
