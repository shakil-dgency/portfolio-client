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

// export async function generateMetadata({ params, searchParams }) {
// 	return {
// 		title: "...",
// 	};
// }

async function getNewsFeeds(t) {
	// console.log(t);
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news-feeds?populate=*`, {
		next: { revalidate: 10 },
	});
	const newsfeeds = await res.json();

	return newsfeeds;
}

export default async function page({ params }) {
	const newsFeeds = await getNewsFeeds(params);

	return (
		<div className={``}>
			<DedicatedSinglePost feedData={newsFeeds} />
			{/* <NewsFeedCard feedData={newsFeeds} /> */}
		</div>
	);
}
