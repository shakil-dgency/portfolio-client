import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import img1 from "../../../../public/profile/tools/google-ads.svg";
import img2 from "../../../../public/profile/tools/gogle_sc.svg";
import img3 from "../../../../public/profile/tools/ahrefs.svg";
import img4 from "../../../../public/profile/tools/bing.svg";
import img5 from "../../../../public/profile/tools/micro.svg";
import img6 from "../../../../public/profile/tools/samrush.svg";

import Image from "next/image";

async function getToolsData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/profile?populate[0]=tools&populate[1]=tools.section_head&populate[2]=tools.images`,
		{
			next: { revalidate: 10 },
		}
	);

	const toolsData = await res.json();
	return toolsData;
}

async function Tools() {
	const toolsData = await getToolsData();
	return (
		<div id="tools" className="-mt-10 md:-mt-7">
			<div className="g__body-container ">
				<GlobalSectionStarter data={toolsData?.data?.attributes.tools.section_head} />
				<div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 gap-y-[30px] sm:gap-y-[50px] gap-x-[30px] sm:gap-x-[50px] justify-items-center">
					{toolsData?.data?.attributes.tools.images.data?.map((item) => {
						return (
							<Image src={item?.attributes.url} height={100} width={200} alt="" className="h-[40px] w-[inherit] custom-grayscale" key={item.id} />
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Tools;
