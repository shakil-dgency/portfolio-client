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
async function getBlog() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?fields=slug&fields=title`, {
		next: { revalidate: 30 },
	});
	const blogData = await res.json();

	return blogData;
}

async function page() {
    const newsFeeds = await getNewsFeeds();

	const blogData =  await getBlog()
	return (
		<div>
			<NavBar />
			<SiteMapBody feedData={newsFeeds.data} blogData={blogData} />
			<Footer />
		</div>
	);
}

export default page;
