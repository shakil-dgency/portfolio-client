import React from "react";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import TermsOfServiceBody from "@/components/TermsOfService/TermsOfServiceBody";
import StructureData from "@/components/StructureData";

export async function generateMetadata() {
	const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/terms-of-service?populate[0]=seo.metaImage`).then((res) => res.json());
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

async function getTermsData() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/terms-of-service?populate=*`, {
		next: { revalidate: 10 },
	});

	const termsData = await res.json();
	return termsData;
}

async function page() {
	const termsData = await getTermsData();

	//to set meta structure Data
	const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/terms-of-service?populate[0]=seo.metaImage`).then((res) => res.json());
	const jsonLd = product?.data?.attributes.seo;
	return (
		<div>
			{/* Add JSON-LD to your page */}
			{jsonLd &&
				jsonLd.structuredData?.map((item, i) => {
					return <StructureData data={item} key={i} />;
				})}
			{/* ... */}
			<NavBar />
			<TermsOfServiceBody data={termsData?.data?.attributes} />
			<Footer />
		</div>
	);
}

export default page;
