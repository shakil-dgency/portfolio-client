import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";

async function getPolicyData() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/privacy-policy?populate=*`, {
		next: { revalidate: 10 },
	});

	const policyData = await res.json();
	return policyData;
}

async function page() {
	const policyData = await getPolicyData();
	return (
		<div>
			<NavBar />
			<PrivacyPolicy data={policyData?.data?.attributes} />
			<Footer />
		</div>
	);
}

export default page;
