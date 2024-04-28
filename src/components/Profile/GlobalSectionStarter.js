import React from "react";

function GlobalSectionStarter({ title, description }) {
	return (
		<div>
			<div className="pt-[70px] pb-[25px] md:pt-[100px] md:pb-[25px]">
				<h2 className="mb-[6px] md:mb-[0px]">{title}</h2>
				<p className="g__section-detail max-w-[650px] md:max-w-[600px] lg:max-w-[750px] relative z-20">{description}</p>
			</div>
		</div>
	);
}

export default GlobalSectionStarter;
