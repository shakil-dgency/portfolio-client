"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SearchComponent from "./SearchComponent";
import SingleCard from "./SingleCard";
import NewsFeedCard from "./NewsFeedCard";

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
			<div className="g__body-container">
				{/* <SearchComponent /> */}

				<div className="mt-10">
					{/* {filteredData &&
						filteredData.map((data) => {
							return <SingleCard data={data} />;
						})} */}

					<NewsFeedCard feedData={filteredData} singleNews="true" />
				</div>
			</div>
		</div>
	);
}

export default DedicatedSinglePost;
