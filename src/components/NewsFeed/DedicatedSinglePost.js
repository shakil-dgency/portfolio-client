"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SearchComponent from "./SearchComponent";
import SingleCard from "./SingleCard";

function DedicatedSinglePost({ feedData }) {
	const navigate = usePathname();
	const [filteredData, setFilteredData] = useState();

	useEffect(() => {
		const newData = feedData.data.filter((item) => {
			const titleToSlug = item.attributes.slug;
			const slugArray = navigate.split("/");

			return titleToSlug === slugArray[slugArray.length - 1];
		});

		setFilteredData(newData);
	}, []);

	return (
		<div>
			<div className="g__body-container flex justify-between">
				<SearchComponent />

				<div className="mt-10">
					{filteredData &&
						filteredData.map((data) => {
							return <SingleCard data={data} />;
						})}

					{filteredData && (
						<div className="flex justify-center gap-10 mt-16">
							<button className="bg-black text-white font-[700] rounded-md px-[38px] py-2">BACK</button>
							<button className="bg-black text-white font-[700] rounded-md px-6 py-2">RANDOM</button>
							<button className="bg-black text-white font-[700] rounded-md px-[38px] py-2">NEXT</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default DedicatedSinglePost;
