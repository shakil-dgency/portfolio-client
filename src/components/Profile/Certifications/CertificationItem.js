import React from "react";
import logo from "../../../../public/profile/microsoft.svg";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

function CertificationItem() {
	return (
		<div>
			<div className="flex flex-col sm:flex-row gap-[5px] sm:gap-[30px] ">
				<div className="img min-w-[62px]">
					<Image src={logo} height={100} width={200} alt="" className="h-[62px] w-[inherit] mt-2" />
				</div>
				<div className="max-w-[655px]">
					<h3 className="">Bing Ads Accredited Professional</h3>
					<p className="text-[var(--bold-text)] text-[16px] font-[400] py-1">Microsoft</p>
					<p className="text-[#7a7a7a] text-[15px]">Since August 2023</p>
					<a
						href="https://learninglab.about.ads.microsoft.com/"
						target="__blank"
						className="text-[#1A85F0] text-[14px] font-[500] mt-2 flex items-center gap-2.5 "
					>
						See credential <FiExternalLink />
					</a>
				</div>
			</div>
		</div>
	);
}

export default CertificationItem;
