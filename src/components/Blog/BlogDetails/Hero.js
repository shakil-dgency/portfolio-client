"use client";
import Link from "next/link";
import React from "react";
import { BiChevronLeft } from "react-icons/bi";

function Hero({ blogData }) {
	const handleRandomColor = () => {
		const color = ["#e5dbfd", "#E1F4F2", "#d1e7ff", "#ffdfed", "#E4E0E1"];

		const randomNumber = Math.floor(Math.random() * 5);

		const ColorSet = color[randomNumber];

		return ColorSet;
	};

	//   console.log(handleRandomColor());

	return (
		<div style={{ background: `linear-gradient(to bottom, ${handleRandomColor()}, transparent )` }} className={` pb-[250px] px-2 md:px-0 pt-[50px]`}>
			<div className="max-w-[800px] mx-auto">
				<div className="h-[inherit] sm:h-[68px] self-start sm:self-auto sm:flex sm:items-center  ml-1 md:ml-0 mb-[30px] sm:mb-5">
					<Link
						href="/blog"
						className=" text-center font-[500] text-[12px] md:text-[14px] flex items-center decoration-[1px]  underline underline-offset-4 "
					>
						<BiChevronLeft className="text-2xl" /> BACK TO All BLOG
					</Link>
				</div>
				<h1 className="hero_heading text-[#222] text-center  ">
					{blogData !== undefined ? (
						blogData.data.attributes.title
					) : (
						<p>
							Loading <span className=" animate-bounce">.</span>
							<span className="animate-bounce">.</span>
							<span className="animate-bounce">.</span>
						</p>
					)}
				</h1>
			</div>
		</div>
	);
}

export default Hero;
