import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SiteMapBody from "@/components/SiteMap/SiteMapBody";
import Link from "next/link";
import React from "react";


async function getNewsFeeds() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news-feeds?populate=*`, {
		next: { revalidate: 30 },
	});
	const newsfeeds = await res.json();

	return newsfeeds;
}

async function page() {
    const newsFeeds = await getNewsFeeds();
	return (
		<div>
			<NavBar />
			<SiteMapBody feedData={newsFeeds.data} />
			<Footer />
		</div>
	);
}

export default page;
