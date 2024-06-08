import SearchComponent from "@/components/NewsFeed/SearchComponent";
import YearlyPost from "@/components/NewsFeed/YearlyPost";
import React from "react";

async function getNewsFeeds(year) {
	console.log(year);
	
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news-feeds?populate=*`, {
		next: { revalidate: 10 },
	});
	const newsfeeds = await res.json();

	return newsfeeds;
}

export default async function page({params:{year}}) {
	const newsFeeds = await getNewsFeeds(year);

	

	return (
		<div>
			<div className="">
				{/* <SearchComponent /> */}

				<YearlyPost postData={newsFeeds} />
			</div>
		</div>
	);
}
