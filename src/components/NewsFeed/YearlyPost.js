"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SingleCard from "./SingleCard";
import NewsFeedCard from "./NewsFeedCard";

function YearlyPost({ postData }) {
	const navigate = usePathname();
	const [filteredData, setFilteredData] = useState();

	useEffect(() => {
		const newData = postData.data.filter((item) => {
			const createdAtDate = new Date(item.attributes.createdAt);

			return createdAtDate.getFullYear().toString() === navigate.replace("/", "");
		});

		setFilteredData(newData);
	}, []);

	console.log(filteredData);

	return (
		<div className="g__body-container">
			<div className="mt-10">
				<NewsFeedCard feedData={filteredData} />
			</div>
		</div>
	);
}

export default YearlyPost;
