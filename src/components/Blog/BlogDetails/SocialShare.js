"use client";
import React from "react";
import linkedIn from "@/../../public/blog/linkedin.svg";
import facebook from "@/../../public/blog/facebook.svg";
import twitter from "@/../../public/blog/twitter.svg";
import linkCopy from "@/../../public/blog/link.svg";
import Image from "next/image";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";

function SocialShare({ blog_details }) {
	const handleCopyUrl = (e) => {
		const completeUrl = "https://hamiduzjaman.com/blog/" + blog_details;
		navigator.clipboard.writeText(completeUrl);
		e.target.classList.add("bg-[#BFFF00]");
		setTimeout(() => {
			e.target.classList.remove("bg-[#BFFF00]");
		}, 700);
	};
	return (
		<>
			<div className="absolute bottom-6 right-10 lg:sticky lg:top-[150px] mt-0 lg:h-[120px] flex flex-row lg:flex-col gap-3 text-[24px]">
				<LinkedinShareButton url={`https://hamiduzjaman.com/blog/${blog_details}`}>
					<Image src={linkedIn} alt="" className=" w-[20px] h-[20px]" />
				</LinkedinShareButton>
				<FacebookShareButton url={`https://hamiduzjaman.com/blog/${blog_details}`}>
					<Image src={facebook} alt="" className=" w-[20px] h-[20px]" />
				</FacebookShareButton>
				<TwitterShareButton url={`https://hamiduzjaman.com/blog/${blog_details}`}>
					<Image src={twitter} alt="" className=" w-[20px] h-[20px]" />
				</TwitterShareButton>
				<Image
					src={linkCopy}
					alt=""
					className="link_copy w-[20px] h-[20px] rounded-tl-md rounded-br-md cursor-pointer"
					onClick={(Event) => handleCopyUrl(Event)}
				/>
			</div>
		</>
	);
}

export default SocialShare;
