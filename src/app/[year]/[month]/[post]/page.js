import DedicatedSinglePost from "@/components/NewsFeed/DedicatedSinglePost";
import NewsFeedCard from "@/components/NewsFeed/NewsFeedCard";
import Head from "next/head";
import React from "react";

export const metadata = {
	title: "Beauty of eyes",
	openGraph: {
		images: ["https://hamiduzjaman.com/_next/image?url=%2FnewsFeed%2Fstory.jpg&w=750&q=75"],
	},
};

async function getNewsFeeds() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news-feeds?populate=*`, {
		next: { revalidate: 3 },
	});
	const newsfeeds = await res.json();

	return newsfeeds;
}

export default async function page() {
	const newsFeeds = await getNewsFeeds();

	return (
		<div className="">
			<DedicatedSinglePost feedData={newsFeeds} />
			{/* <NewsFeedCard feedData={newsFeeds} /> */}
		</div>
	);
}
