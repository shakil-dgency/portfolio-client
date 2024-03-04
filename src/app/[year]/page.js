import SearchComponent from "@/components/NewsFeed/SearchComponent";
import YearlyPost from "@/components/NewsFeed/YearlyPost";
import React from "react";

async function getNewsFeeds() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news-feeds?populate=*`);
	const newsfeeds = await res.json();

	return newsfeeds;
}

export default async function page() {
	const newsFeeds = await getNewsFeeds();

	return (
		<div>
			<div className="g__body-container flex justify-between">
				<SearchComponent />

				<YearlyPost postData={newsFeeds} />
			</div>
		</div>
	);
}
