import SearchComponent from "@/components/NewsFeed/SearchComponent";
import YearlyPost from "@/components/NewsFeed/YearlyPost";
import React from "react";

function page() {
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
	return (
		<div>
			<div className="g__body-container flex justify-between">
				<SearchComponent />

				<YearlyPost postData={feedData} />
			</div>
		</div>
	);
}

export default page;
