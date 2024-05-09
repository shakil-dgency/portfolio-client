import React from "react";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import TermsOfServiceBody from "@/components/TermsOfService/TermsOfServiceBody";

async function getTermsData() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/terms-of-service?populate=*`, {
		next: { revalidate: 10 },
	});

	const termsData = await res.json();
	return termsData;
}

async function page() {
	const termsData = await getTermsData();
	return (
		<div>
			<NavBar />
			<TermsOfServiceBody data={termsData?.data?.attributes} />
			<Footer />
		</div>
	);
}

export default page;
