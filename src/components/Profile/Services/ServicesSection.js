import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import ServiceCard from "./ServiceCard";
import img1 from "../../../../public/profile/services/digital-marketing.svg";
import img2 from "../../../../public/profile/services/ui-ux.svg";
import img3 from "../../../../public/profile/services/web-development.svg";
import img4 from "../../../../public/profile/services/product-design.svg";

async function getServicesData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/profile?populate[0]=services&populate[1]=services.section_head&populate[2]=services.services_card.icon`,
		{
			next: { revalidate: 10 },
		}
	);

	const servicesData = await res.json();
	return servicesData;
}

async function ServicesSection() {
	const servicesData = await getServicesData();
	return (
		<div>
			<div id="services" className="g__body-container ">
				<GlobalSectionStarter data={servicesData?.data?.attributes.services.section_head} />
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[25px] gap-y-[30px]">
					{servicesData?.data?.attributes.services.services_card?.map((item) => {
						return <ServiceCard data={item} key={item.id} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default ServicesSection;
