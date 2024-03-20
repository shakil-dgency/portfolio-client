import NavBar from "@/components/NavBar";
import NewsFeedCard from "@/components/NewsFeed/NewsFeedCard";
import SearchComponent from "@/components/NewsFeed/SearchComponent";
import React from "react";

async function getNewsFeeds() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news-feeds?populate=*`, {
		next: { revalidate: 10 },
	});
	const newsfeeds = await res.json();

	return newsfeeds;
}

export default async function page() {
	const newsFeeds = await getNewsFeeds();

	return (
		<div>
			<div className="">
				<NewsFeedCard feedData={newsFeeds.data} />
			</div>
		</div>
		// feedData={newsFeeds.data}
	);
}
