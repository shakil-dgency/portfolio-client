import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import img1 from "../../../../public/profile/tools/google-ads.svg";
import img2 from "../../../../public/profile/tools/gogle_sc.svg";
import img3 from "../../../../public/profile/tools/ahrefs.svg";
import img4 from "../../../../public/profile/tools/bing.svg";
import img5 from "../../../../public/profile/tools/micro.svg";
import img6 from "../../../../public/profile/tools/samrush.svg";

import Image from "next/image";

function Tools() {
	return (
		<div id="tools">
			<div className="g__body-container ">
				<GlobalSectionStarter
					title="Tools "
					description="Everyone has the right to freedom of thought, conscience and religion freedom to change his religion or belief, and freedom, either alone. "
				/>
				<div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 gap-y-[30px] sm:gap-y-[50px] gap-x-[30px] sm:gap-x-[50px] justify-items-center">
					<Image src={img2} height={100} width={200} alt="" className="h-[40px] w-[inherit] custom-grayscale" />
					<Image src={img5} height={100} width={200} alt="" className="h-[40px] w-[inherit] custom-grayscale" />
					<Image src={img1} height={100} width={200} alt="" className="h-[40px] w-[inherit] custom-grayscale" />
					<Image src={img6} height={100} width={200} alt="" className="h-[40px] w-[inherit] custom-grayscale" />
					<Image src={img1} height={100} width={200} alt="" className="h-[40px] w-[inherit] custom-grayscale" />
					<Image src={img3} height={100} width={200} alt="" className="h-[40px] w-[inherit] custom-grayscale" />
					<Image src={img4} height={100} width={200} alt="" className="h-[40px] w-[inherit] custom-grayscale" />
					<Image src={img5} height={100} width={200} alt="" className="h-[40px] w-[inherit] custom-grayscale" />
					<Image src={img6} height={100} width={200} alt="" className="h-[40px] w-[inherit] custom-grayscale" />
					<Image src={img3} height={100} width={200} alt="" className="h-[40px] w-[inherit] custom-grayscale" />
					<Image src={img4} height={100} width={200} alt="" className="h-[40px] w-[inherit] custom-grayscale" />
				</div>
			</div>
		</div>
	);
}

export default Tools;
