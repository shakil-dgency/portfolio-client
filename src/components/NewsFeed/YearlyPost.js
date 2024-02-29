"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SingleCard from "./SingleCard";

function YearlyPost({ postData }) {
	const navigate = usePathname();
	const [filteredData, setFilteredData] = useState();

	useEffect(() => {
		const newData = postData.filter((item) => {
			const createdAtDate = new Date(item.createdAt);

			return createdAtDate.getFullYear().toString() === navigate.replace("/", "");
		});

		setFilteredData(newData);
	}, []);

	console.log(filteredData);

	return (
		<div className="mt-10">
			{filteredData &&
				filteredData.map((data) => {
					return <SingleCard data={data} key={data.id} />;
				})}
		</div>
	);
}

export default YearlyPost;
