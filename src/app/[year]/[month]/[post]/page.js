import DedicatedSinglePost from "@/components/NewsFeed/DedicatedSinglePost";
import Head from "next/head";
import React from "react";

export const metadata = {
	title: "Beauty of eyes",
	openGraph: {
		images: ["https://hamiduzjaman.com/_next/image?url=%2FnewsFeed%2Fstory.jpg&w=750&q=75"],
	},
};

async function getNewsFeeds() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news-feeds?populate=*`);
	const newsfeeds = await res.json();

	return newsfeeds;
}

export default async function page() {
	const newsFeeds = await getNewsFeeds();

	return (
		<div>
			<DedicatedSinglePost feedData={newsFeeds} />
		</div>
	);
}
