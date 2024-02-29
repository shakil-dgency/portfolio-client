import NewsFeedCard from "@/components/NewsFeed/NewsFeedCard";
import SearchComponent from "@/components/NewsFeed/SearchComponent";
import React from "react";

function page() {
	return (
		<div>
			<div className="g__body-container flex justify-between">
				<SearchComponent />
				<NewsFeedCard />
			</div>
		</div>
	);
}

export default page;
