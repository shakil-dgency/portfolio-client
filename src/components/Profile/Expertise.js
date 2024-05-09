import React from "react";
import ExpertiseCard from "./ExpertiseCard";
import google from "../../../public/profile/google-ads.svg";
import design from "../../../public/profile/microsoft-clarity.svg";
import GlobalSectionStarter from "./GlobalSectionStarter";

function Expertise({ data }) {
	return (
		<div id="expertise" className="">
			<div className="g__body-container ">
				<GlobalSectionStarter data={data?.data?.attributes.expertise.section_head} />
				<div className="grid grid-cols-1 gap-[40px]">
					{data?.data?.attributes.expertise.espertise_card?.map((item) => {
						return <ExpertiseCard data={item} key={item.id} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default Expertise;
