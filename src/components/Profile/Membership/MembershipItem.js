import React from "react";
import DgencyLogo from "../../../../public/profile/dgency.svg";
import Image from "next/image";

function MembershipItem() {
	return (
		<div>
			<div className="flex gap-5 lg:gap-[30px]">
				<div className="img min-w-[60px]">
					<Image src={DgencyLogo} height={100} width={200} alt="" className="h-[60px] w-[inherit] mt-2" />
				</div>
				<div className="max-w-[655px]">
					<h3 className="">Army Golf Club</h3>
					<p className="text-[var(--bold-text)] text-[16px] font-[400] py-1">Bishwa Road, Dhaka</p>
					<p className="text-[#7a7a7a] text-[15px]">Since August 2022</p>
				</div>
			</div>
		</div>
	);
}

export default MembershipItem;
