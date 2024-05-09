import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import CertificationItem from "./CertificationItem";

async function getCertificationsData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/profile?populate[0]=certifications.section_head&populate[1]=certifications.certifications_list.image`,
		{
			next: { revalidate: 10 },
		}
	);

	const certificationsData = await res.json();
	return certificationsData;
}

async function CertificationsSection() {
	const certificationsData = await getCertificationsData();
	return (
		<div>
			<div id="certifications" className="g__body-container ">
				<GlobalSectionStarter data={certificationsData?.data.attributes.certifications.section_head} />

				<div className="flex flex-col gap-6">
					{certificationsData?.data.attributes.certifications.certifications_list?.map((item) => {
						return <CertificationItem data={item} key={item.id} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default CertificationsSection;
