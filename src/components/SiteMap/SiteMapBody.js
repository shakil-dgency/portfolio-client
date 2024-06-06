"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function SiteMapBody({ feedData }) {
	const [sortedData, setSortedData] = useState();
	useEffect(() => {
		if (feedData) {
			let finalData = feedData.reduce(function (accumulator, currentValue) {
				if (typeof currentValue.id === "number") {
					// Insert currentValue into the correct position in the accumulator array

					const index = accumulator.findIndex((item) => item.id <= currentValue.id);

					if (index === -1) {
						accumulator.push(currentValue);
					} else {
						accumulator.splice(index, 0, currentValue);
					}
				}
				return accumulator;
			}, []);
			setSortedData(finalData);
		}
	}, [feedData]);

	const handleSlug = (title, date) => {
		// const titleToSlug = title.toLowerCase().replace(/ /g, "-");
		const createdAtDate = new Date(date);
		const year = createdAtDate.getFullYear();
		const month = createdAtDate.getMonth() + 1;
		const formattedDate = `/${year}/${month < 10 ? "0" + month : month}`;

		return `${formattedDate}/${title}`;
	};

	return (
		<div className="pb-36 max-w-[1224px] mx-auto px-2.5 sm:px-[16px] mxl:px-0">
			<h1 className="text-[30px] md:text-[32px] lg:text-[40px] font-[600] pt-24 pb-8">Site Map</h1>
			<ul className="flex flex-col gap-4 text-[20px] text-[#1A0DAB] list-inside list-disc font-[600]">
				<li>
					<Link href={"/pricing"}>Author's Profile</Link>
				</li>
				<li>
					<Link href={"/"}>Contact</Link>
				</li>
				<li>
					<Link href={"/pricing"}>Schedule a Call</Link>
				</li>
				<li>
					<Link href={"/"}>Daily Digest</Link>
				</li>

				<div className="ml-14 mt-0 list-none text-[18px] leading-[1.5] flex flex-col gap-3 font-[500]">
					{sortedData &&
						sortedData.map((item) => {
							return (
								<li key={item.id}>
									<Link href={handleSlug(item.attributes.slug, item.attributes.createdAt)}>{item.attributes.feed_title}</Link>
								</li>
							);
						})}
				</div>
                <li>
					<Link href={"/privacy-policy"}>Privacy policy</Link>
				</li>
				<li>
					<Link href={"/terms-of-service"}>Terms of service</Link>
				</li>
			</ul>
		</div>
	);
}

export default SiteMapBody;
