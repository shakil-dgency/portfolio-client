import Footer from "@/components/Footer";
import FrequentlyAsk from "@/components/Profile/FrequentlyAsk/FrequentlyAsk";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import AboutSection from "@/components/Profile/About/AboutSection";
import BooksSection from "@/components/Profile/Books/BooksSection";
import CertificationsSection from "@/components/Profile/Certifications/CertificationsSection";
import EducationSection from "@/components/Profile/Education/EducationSection";
import ExperienceSection from "@/components/Profile/Experience/ExperienceSection";
import Expertise from "@/components/Profile/Expertise";
import FollowMeSection from "@/components/Profile/FollowMe/FollowMeSection";
import GallerySection from "@/components/Profile/Gallery/GallerySection";
import HighlightsSection from "@/components/Profile/Highlights/HighlightsSection";
import IndustriesExpertise from "@/components/Profile/IndustriesExpertise/IndustriesExpertise";
import InterestSection from "@/components/Profile/Interest/InterestSection";
import MembershipSection from "@/components/Profile/Membership/MembershipSection";
import MentorsSection from "@/components/Profile/Mentors/MentorsSection";
import ServicesSection from "@/components/Profile/Services/ServicesSection";
import TestimonialsSection from "@/components/Profile/Testimonials/TestimonialsSection";
import Tools from "@/components/Profile/ToolsSection/ToolsSection";
import React from "react";
import StructureData from "@/components/StructureData";

export async function generateMetadata() {
	const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile?populate[0]=seo.metaImage`).then((res) => res.json());
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

async function getHeroData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/profile?populate[0]=hero&populate[1]=hero.profile_image&populate[2]=hero.cover_image&populate[3]=hero.tags`,
		{
			next: { revalidate: 10 },
		}
	);

	const heroData = await res.json();
	return heroData;
}
async function getExpertiseData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/profile?populate[0]=expertise&populate[1]=expertise.section_head&populate[2]=expertise.espertise_card&populate[3]=expertise.espertise_card.icon`,
		{
			next: { revalidate: 10 },
		}
	);

	const expertiseData = await res.json();
	return expertiseData;
}
async function getIndustriesData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/profile?populate[0]=industries&populate[1]=industries.section_head&populate[2]=industries.industries_card&populate[3]=industries.industries_card.image&populate[4]=industries.industries_card.logos`,
		{
			next: { revalidate: 10 },
		}
	);

	const industriesData = await res.json();
	return industriesData;
}

async function page() {
	const heroData = await getHeroData();
	const expertiseData = await getExpertiseData();
	const industriesData = await getIndustriesData();

	//to set meta structure Data
	const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile?populate[0]=seo.metaImage`).then((res) => res.json());
	const jsonLd = product?.data?.attributes.seo;

	return (
		<div className="">
			{/* Add JSON-LD to your page */}
			{jsonLd &&
				jsonLd.structuredData?.map((item, i) => {
					return <StructureData data={item} key={i} />;
				})}
			{/* ... */}

			<NavBar />
			<div className="bg-[#FDFDFD] max-w-[1224px] mx-auto pb-[180px] ">
				<Hero data={heroData} />
				<div className="px-[16px] xl:px-0">
					<Expertise data={expertiseData} />
					<IndustriesExpertise data={industriesData} />
					<Tools />
					<ExperienceSection />
					<ServicesSection />
					<HighlightsSection />
					<TestimonialsSection />
					<MentorsSection />
					<AboutSection />
					<EducationSection />
					<CertificationsSection />
					<BooksSection />
					<InterestSection />
					<MembershipSection />
					<GallerySection />
					{/* <FollowMeSection /> */}
					<FrequentlyAsk />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default page;
