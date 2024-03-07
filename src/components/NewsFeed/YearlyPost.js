"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SingleCard from "./SingleCard";
import NewsFeedCard from "./NewsFeedCard";

function YearlyPost({ postData }) {
	const navigate = usePathname();
	const [filteredData, setFilteredData] = useState(null);

	useEffect(() => {
		const newData = postData.data.filter((item) => {
			const createdAtDate = new Date(item.attributes.createdAt);

			return createdAtDate.getFullYear().toString() === navigate.replace("/", "");
		});

		setFilteredData(newData);
	}, []);

	console.log(filteredData);

	return (
		<div className={`${filteredData === null ? "h-[200vh]" : ""}`}>
			<div className="">
				<div className="">
					<NewsFeedCard feedData={filteredData} />
				</div>
			</div>
		</div>
	);
}

export default YearlyPost;
