import Footer from "@/components/Footer";
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

function page() {
	return (
		<div className="">
			<NavBar />
			<div className="bg-[#F6F7F9] max-w-[1224px] mx-auto ">
				<Hero />
				<div className="px-[16px] xl:px-0">
					<Expertise />
					<IndustriesExpertise />
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
					<FollowMeSection />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default page;
