"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SingleCard from "./SingleCard";
import NewsFeedCard from "./NewsFeedCard";

function MonthlyPost({ postData }) {
	const navigate = usePathname();
	const [filteredData, setFilteredData] = useState(null);

	useEffect(() => {
		const newData = postData.data.filter((item) => {
			const createdAtDate = new Date(item.attributes.createdAt);
			const year = createdAtDate.getFullYear();
			const month = createdAtDate.getMonth() + 1;
			const formattedDate = `/${year}/${month < 10 ? "0" + month : month}`;

			return formattedDate === navigate;
		});

		setFilteredData(newData);
	}, []);

	return (
		<div className={`${filteredData === null ? "h-[200vh]" : ""}`}>
			<div className="">
				<div className="">
					{/* {filteredData &&
				filteredData.map((data) => {
					return <SingleCard data={data} key={data.id} />;
				})} */}

					<NewsFeedCard feedData={filteredData} />
				</div>
			</div>
		</div>
	);
}

export default MonthlyPost;
