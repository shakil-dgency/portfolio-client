"use client";
import React, { useEffect, useState } from "react";

import SingleCard from "./SingleCard";
import SearchComponent from "./SearchComponent";

function NewsFeedCard({ feedData, singleNews }) {
	const [sortedData, setSortedData] = useState();
	const [search, setSearch] = useState("");

	console.log(search.toLowerCase());

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
	return (
		<div className=" flex justify-between">
			<SearchComponent search={search} setSearch={setSearch} />
			<div className="">
				<div className="max-w-[768px] mx-auto   py-4">
					<h1 className="text-[32px] font-[700] ">News Feed</h1>
				</div>
				{sortedData &&
					sortedData
						.filter((item) => {
							return search.toLowerCase() === ""
								? item
								: item.attributes.feed_title.toLowerCase().includes(search.toLowerCase()) ||
										item.attributes.feed_description.toLowerCase().includes(search.toLowerCase());
						})
						.map((data) => {
							return <SingleCard data={data} key={data.id} highlightedSearch={search.toLowerCase()} />;
						})}

				{singleNews && (
					<div className="flex justify-center gap-10 my-16 ">
						<button className="bg-black text-white font-[700] rounded-md px-[38px] py-2">BACK</button>
						<button className="bg-black text-white font-[700] rounded-md px-6 py-2">RANDOM</button>
						<button className="bg-black text-white font-[700] rounded-md px-[38px] py-2">NEXT</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default NewsFeedCard;
