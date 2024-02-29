"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SingleCard from "@/components/NewsFeed/SingleCard";
import SearchComponent from "@/components/NewsFeed/SearchComponent";

function page() {
	const navigate = usePathname();
	const [filteredData, setFilteredData] = useState();

	const feedData = [
		{
			id: 1,
			title: "Beauty of eyes",
			date: "19th December 2023",
			caption:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, numquam quae a quos, velit omnis sapiente similique officia itaque assumenda temporibus soluta eligendi quod architecto inventore nobis doloremque eos at.",
			image: "/newsFeed/story.jpg",
			video: "",
			url: "https://escaperoommarketer.com/23-smart-landing-page-trends-and-over-60-examples",
			createdAt: "2023-12-19T16:40:23.978Z",
		},
		{
			id: 2,
			title: "The Color of City Life",
			date: "19th December 2023",
			caption:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, numquam quae a quos, velit omnis sapiente similique officia itaque assumenda temporibus soluta eligendi quod architecto inventore nobis doloremque eos at.",
			image: "",
			video: "https://www.youtube.com/embed/SMKPKGW083c",
			url: "https://www.youtube.com/watch?v=3UvI0k_KUIo",
			createdAt: "2023-12-19T16:40:23.978Z",
		},
		{
			id: 3,
			title: "Corporate Lifestyle",
			date: "19th February 2024",
			caption:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, numquam quae a quos, velit omnis sapiente similique officia itaque assumenda temporibus soluta eligendi quod architecto inventore nobis doloremque eos at.",
			image: "",
			video: "",
			url: "https://escaperoommarketer.com/another-blog",
			createdAt: "2024-02-19T16:40:23.978Z",
		},
	];

	useEffect(() => {
		const newData = feedData.filter((item) => {
			const titleToSlug = item.title.toLowerCase().replace(/ /g, "-");
			const slugArray = navigate.split("/");

			return titleToSlug === slugArray[slugArray.length - 1];
		});

		setFilteredData(newData);
	}, []);

	console.log(filteredData);

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

export default page;
