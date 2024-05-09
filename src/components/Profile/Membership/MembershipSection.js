import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import MembershipItem from "./MembershipItem";

async function getMembershipData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/profile?populate[0]=membership.section_head&populate[1]=membership.membership_list.image`,
		{
			next: { revalidate: 10 },
		}
	);

	const membershipData = await res.json();
	return membershipData;
}

async function MembershipSection() {
	const membershipData = await getMembershipData();
	return (
		<div>
			<div id="membership" className="g__body-container ">
				<GlobalSectionStarter data={membershipData?.data?.attributes.membership.section_head} />
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6">
					{membershipData?.data?.attributes.membership.membership_list.map((item) => {
						return <MembershipItem data={item} key={item.id} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default MembershipSection;
