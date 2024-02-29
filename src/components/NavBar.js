import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/H M Hamiduzjaman - Logo.svg";

function NavBar() {
	return (
		<div className="bg-[#FAFAFA] text-[#222222] relative">
			<div className="g__body-container flex justify-between py-2.5">
				<div className="logo italic font-[700]">
					<Image src={logo} alt="" className="w-[250px]" />
				</div>
				<div className="">
					<ul className="flex gap-5">
						<li className=" cursor-pointer">Home</li>
						<li className="">
							<Link href={"/newsfeed"}>NewsFeed</Link>
						</li>
						<li className="cursor-pointer">About</li>
						<li className="cursor-pointer">Contact</li>

						{/* <li className="">NewsFeed</li> */}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
