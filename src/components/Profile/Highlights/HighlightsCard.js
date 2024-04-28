"use client";
import Image from "next/image";
import React, { useEffect } from "react";

function HighlightsCard({ img, description, statistic }) {
	useEffect(() => {});
	return (
		<div>
			<div className="bg-[#ECECEC] pt-[80px] lg:pt-[60px] pb-[40px] lg:pb-[20px] px-[30px] lg:max-w-[246px] relative rounded-lg border-[1px] border-[#E8E8E8]">
				<div className="img absolute top-[-45px] left-[50%] translate-x-[-50%]  h-[85px] w-[85px] rounded-full bg-[#E8E8E8] flex justify-center items-center drop-shadow">
					<Image src={img} height={100} width={200} alt="" className=" h-[40px]" />
				</div>
				<p className="text text-center text-[var(--bold-text)]">{description}</p>
				<p className="text-[50px] font-[600] text-[var(--bold-text)] text-center leading-[1.1]">{statistic}</p>

				{/* <div>
					You could be saving
					<h3 className="test">
						<span id="number"></span> gals
					</h3>
					<span>of water!</span>
					<button className="btn">Update number</button>
				</div> */}
			</div>
		</div>
	);
}

export default HighlightsCard;
