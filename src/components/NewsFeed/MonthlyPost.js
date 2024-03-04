"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SingleCard from "./SingleCard";

function MonthlyPost({ postData }) {
	const navigate = usePathname();
	const [filteredData, setFilteredData] = useState();

	useEffect(() => {
		const newData = postData.data.filter((item) => {
			const createdAtDate = new Date(item.attributes.createdAt);
			const year = createdAtDate.getFullYear();
			const month = createdAtDate.getMonth() + 1;
			const formattedDate = `/${year}/${month < 10 ? "0" + month : month}`;

			console.log();

			return formattedDate === navigate;
		});

		console.log(newData);

		setFilteredData(newData);
	}, []);

	return (
		<div className="mt-10">
			{filteredData &&
				filteredData.map((data) => {
					return <SingleCard data={data} key={data.id} />;
				})}
		</div>
	);
}

export default MonthlyPost;
