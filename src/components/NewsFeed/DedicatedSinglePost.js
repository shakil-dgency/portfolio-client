"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SearchComponent from "./SearchComponent";
import SingleCard from "./SingleCard";
import NewsFeedCard from "./NewsFeedCard";

function DedicatedSinglePost({ feedData }) {
	const navigate = usePathname();
	const [filteredData, setFilteredData] = useState(null);
	const [previousData, setPreviousData] = useState();
	const [nextData, setNextData] = useState();
	const [randomFeed, setRandomFeed] = useState();

	useEffect(() => {
		const newData = feedData.data.filter((item) => {
			const titleToSlug = item.attributes.slug;
			const slugArray = navigate.split("/");

			if (titleToSlug === slugArray[slugArray.length - 1]) {
				return titleToSlug === slugArray[slugArray.length - 1];
			} else {
				return null;
			}
		});

		setFilteredData(newData);

		// let data = feedData.data.reduce(function (previousValue, currentValue, index, array) {
		// 	let newData = [];
		// 	// setNextData(previousValue, array[index + 1]);
		// 	newData.push(previousValue, array[index + 1]);

		// 	return newData;
		// });
		// // setPreviousData(data);

		if (newData.length !== 0) {
			let id = newData[0].id;

			// Filter elements less than id and find the maximum id
			let prevObject = feedData.data.reduce((prev, current) => {
				if (current.id < id && current.id > (prev ? prev.id : -Infinity)) {
					return current;
				}
				return prev;
			}, null);

			// Filter elements greater than id and find the minimum id
			let nextObject = feedData.data.reduce((next, current) => {
				if (current.id > id && current.id < (next ? next.id : Infinity)) {
					return current;
				}
				return next;
			}, null);

			//random choose the item
			function randomValue() {
				let random = Math.floor(Math.random() * feedData.data.length);

				if (feedData.data[random].id === id) {
					return randomValue();
				} else {
					return random;
				}
			}

			setNextData(nextObject);
			setPreviousData(prevObject);
			setRandomFeed(feedData.data[randomValue()]);

			// console.log({ prevObject, nextObject });
		}
	}, []);

	return (
		<div className={`${filteredData === null ? "h-[100vh]" : "h-[100%]"}`}>
			<div className=" ">
				{/* <SearchComponent /> */}

				<div className="">
					{/* {filteredData &&
						filteredData.map((data) => {
							return <SingleCard data={data} />;
						})} */}

					<NewsFeedCard feedData={filteredData} previousData={previousData} nextData={nextData} randomFeed={randomFeed} singleNews="true" />
				</div>
			</div>
		</div>
	);
}

export default DedicatedSinglePost;
