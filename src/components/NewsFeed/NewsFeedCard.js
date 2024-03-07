"use client";
import React, { useEffect, useState } from "react";

import SingleCard from "./SingleCard";
import SearchComponent from "./SearchComponent";
import Link from "next/link";
import NavBar from "../NavBar";

function NewsFeedCard({ feedData, singleNews, previousData, nextData, randomFeed }) {
	const [sortedData, setSortedData] = useState();
	const [search, setSearch] = useState("");

	// console.log(newFunction);

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

	// setNextData(sortedData && sortedData);

	return (
		<div className="  mb-10">
			<NavBar search={search} setSearch={setSearch} isSearch={true} />
			{/* <SearchComponent search={search} setSearch={setSearch} /> */}
			<div className="g__body-container">
				<div className="max-w-[640px] mx-auto pt-12 pb-4 flex justify-between">
					<h1 className="text-[32px] font-[700] ">News Feed</h1>
					<div className="subscribe">
						<div className="relative flex max-w-[240px] pt-2">
							<input
								type="email"
								placeholder="dgency@gmail.com"
								className="outline-none px-2 py-[4px] w-full rounded-l-md border-[1px] border-[#383838] bg-transparent text-[13px]"
							/>
							<button className=" bg-[#383838] text-white px-2 rounded-r-md text-[12px] w-[90px] ">Subscribe</button>
						</div>
					</div>
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
							return (
								<SingleCard
									data={data}
									key={data.id}
									highlightedSearch={search.toLowerCase()}
									singleNews={singleNews}
									previousData={previousData}
									nextData={nextData}
									randomFeed={randomFeed}
								/>
							);
						})}
			</div>
		</div>
	);
}

export default NewsFeedCard;
