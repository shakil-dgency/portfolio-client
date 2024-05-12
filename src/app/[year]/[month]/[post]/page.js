import DedicatedSinglePost from "@/components/NewsFeed/DedicatedSinglePost";
import NewsFeedCard from "@/components/NewsFeed/NewsFeedCard";
import StructureData from "@/components/StructureData";
import Head from "next/head";
import React from "react";

// export const metadata = {
// 	title: "Beauty of eyes",
// 	openGraph: {
// 		images: ["https://hamiduzjaman.com/_next/image?url=%2FnewsFeed%2Fstory.jpg&w=750&q=75"],
// 	},
// };

export async function generateMetadata({ params, searchParams }) {
	const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news-feeds/${params.post}`).then((res) => res.json());
	// console.log(product);
	const data = product?.data?.attributes.seo;
	return {
		title: data?.metaTitle,
		description: data?.metaDescription,
		canonical: data?.canonicalURL ? data.canonicalURL : "https://hamiduzjaman.com/",
		openGraph: {
			images: data?.metaImage?.data?.attributes.url,
		},
	};
}

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
	//to set meta structure Data
	const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news-feeds/${params.post}`).then((res) => res.json());
	const jsonLd = product?.data?.attributes.seo;

	return (
		<div className={``}>
			{jsonLd &&
				jsonLd.structuredData?.map((item, i) => {
					return <StructureData data={item} key={i} />;
				})}
			<DedicatedSinglePost feedData={newsFeeds} />
			{/* <NewsFeedCard feedData={newsFeeds} /> */}
		</div>
	);
}
