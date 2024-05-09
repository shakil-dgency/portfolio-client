import React from "react";
import styles from "../style/richtext.module.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
			<div className="g__body-container px-[16px] pt-16 pb-[150px]">
				<h1 className="text-[36px] text-[var(--bold-text)] text-center mb-8">{termsData?.data?.attributes.title}</h1>
				<div className={`${styles.text_area}`}>
					<div dangerouslySetInnerHTML={{ __html: termsData?.data?.attributes.terms_data }} />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default page;
