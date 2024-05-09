"use client";
import Image from "next/image";
import React, { useState } from "react";
import DgencyLogo from "../../../../public/profile/dgency.svg";
import img5 from "../../../../public/profile/tools/micro.svg";

function ExperienceItems({ data }) {
	const attributes = data?.slug ? { href: data?.slug } : {};
	return (
		<div>
			<div className="max-w-[755px]">
				<div className="flex flex-col sm:flex-row gap-[5px] sm:gap-[30px]">
					<div className="img min-w-[70px] ">
						<Image src={data?.logo.data?.attributes.url} height={100} width={400} alt="" className="h-[70px] w-[inherit] mt-2" />
					</div>
					<div className=" ">
						<a {...attributes} target="_blank">
							<h3 className="">{data?.title}</h3>
						</a>
						<p className="text-[var(--bold-text)] text-[16px] font-[400] py-1">{data?.designation}</p>
						<p className="text-[#7a7a7a] text-[15px]">{data?.duration}</p>
						<p className="text-[var(--para-text)] text-[16px] mt-2 leading-[1.6]">{data?.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ExperienceItems;
