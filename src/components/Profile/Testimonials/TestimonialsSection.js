import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import TestimonialSCarusel from "./TestimonialSCarusel";

async function getTestimonialsData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/profile?populate[0]=testimonials&populate[1]=testimonials.section_head&populate[2]=testimonials.testimonials_card.image`,
		{
			next: { revalidate: 10 },
		}
	);

	const testimonialsData = await res.json();
	return testimonialsData;
}

async function TestimonialsSection() {
	const testimonialsData = await getTestimonialsData();
	return (
		<div>
			<div id="testimonials" className="g__body-container ">
				<GlobalSectionStarter data={testimonialsData?.data.attributes.testimonials.section_head} />
				<TestimonialSCarusel data={testimonialsData?.data.attributes.testimonials.testimonials_card} />
			</div>
		</div>
	);
}

export default TestimonialsSection;
