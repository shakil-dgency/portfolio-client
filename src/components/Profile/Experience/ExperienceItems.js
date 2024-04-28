import Image from "next/image";
import React from "react";
import DgencyLogo from "../../../../public/profile/dgency.svg";
import img5 from "../../../../public/profile/tools/micro.svg";

function ExperienceItems() {
	return (
		<div>
			<div className="max-w-[755px]">
				<div className="flex flex-col sm:flex-row gap-[5px] sm:gap-[30px]">
					<div className="img min-w-[70px] ">
						<Image src={DgencyLogo} height={100} width={400} alt="" className="h-[70px] w-[inherit] mt-2" />
					</div>
					<div className=" ">
						<h3 className="">Dgency</h3>
						<p className="text-[var(--bold-text)] text-[16px] font-[400] py-1">Founder and CEO</p>
						<p className="text-[#7a7a7a] text-[15px]">2016 - Now</p>
						<p className="text-[var(--para-text)] text-[16px] mt-2 leading-[1.6]">
							The company was founded by H M Hamiduzjaman (Shawon Kayum) with the help of his great brother friend S M Monzurul Hasan Shemul,
							legendary pioneer in the PPC industry in Bangladesh (Shawon’s words, not his. He’d be too embarrassed to read this, so let’s quickly
							move on).
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ExperienceItems;
