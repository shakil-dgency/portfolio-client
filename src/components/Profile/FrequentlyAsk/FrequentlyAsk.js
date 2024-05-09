import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import Faq from "./Faq";

async function getFaqData() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile?populate[0]=faq.section_head&populate[1]=faq.faq_item`, {
		next: { revalidate: 10 },
	});

	const faqData = await res.json();
	return faqData;
}

async function FrequentlyAsk() {
	const faqData = await getFaqData();
	return (
		<div>
			<div id="FrequentlyAsk" className="g__body-container ">
				<GlobalSectionStarter data={faqData?.data?.attributes.faq.section_head} />
				<div className="">
					<Faq data={faqData?.data?.attributes.faq.faq_item} />
				</div>
			</div>
		</div>
	);
}

export default FrequentlyAsk;
