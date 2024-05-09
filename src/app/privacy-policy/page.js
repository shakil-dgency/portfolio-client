import React from "react";
import styles from "../style/richtext.module.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
			<div className="g__body-container px-[16px] pt-16 pb-[150px]">
				<h1 className="text-[36px] text-[var(--bold-text)] text-center mb-8">{policyData?.data.attributes.title}</h1>
				<div className={`${styles.text_area}`}>
					<div dangerouslySetInnerHTML={{ __html: policyData?.data.attributes.policy_data }} />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default page;
