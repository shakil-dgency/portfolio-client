import React from "react";
import DgencyLogo from "../../../../public/profile/dgency.svg";
import Image from "next/image";

function MembershipItem({ data }) {
	const attributes = data?.slug ? { href: data?.slug } : {};
	return (
		<div>
			<div className="flex gap-5 lg:gap-[30px]">
				<div className="img min-w-[60px]">
					<Image src={data?.image.data.attributes.url} height={100} width={200} alt="" className="h-[60px] w-[inherit] mt-2" />
				</div>
				<div className="max-w-[655px]">
					<a {...attributes} target="_blank">
						<h3 className="">{data?.title}</h3>
					</a>
					<p className="text-[var(--bold-text)] text-[16px] font-[400] py-1">{data?.address}</p>
					<p className="text-[#7a7a7a] text-[15px]">{data?.duration}</p>
				</div>
			</div>
		</div>
	);
}

export default MembershipItem;
