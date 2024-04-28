import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import ServiceCard from "./ServiceCard";
import img1 from "../../../../public/profile/services/digital-marketing.svg";
import img2 from "../../../../public/profile/services/ui-ux.svg";
import img3 from "../../../../public/profile/services/web-development.svg";
import img4 from "../../../../public/profile/services/product-design.svg";

function ServicesSection() {
	return (
		<div>
			<div className="g__body-container ">
				<GlobalSectionStarter
					title="Services"
					description="Everyone has the right to freedom of thought, conscience and religion freedom to change his religion or belief, and freedom, either alone. "
				/>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[25px] gap-y-[30px]">
					<ServiceCard img={img1} title="Digital Marketing" description="It is a involves the systematic analysis" />
					<ServiceCard
						img={img2}
						title="UI/UX Design"
						description="It is a involves the systematic analysis of data to gain valuable insights into the various type aspects of a business."
					/>
					<ServiceCard
						img={img3}
						title="Web Developments"
						description="It is a involves the systematic analysis of data to gain valuable insights into the various type aspects of a business."
					/>
					<ServiceCard
						img={img4}
						title="Product Design"
						description="It is a involves the systematic analysis of data to gain valuable insights into the various type aspects of a business."
					/>
				</div>
			</div>
		</div>
	);
}

export default ServicesSection;
