import Image from "next/image";
import React from "react";
import profile from "../../../../public/hero/profile.jpg";

function MentorCard({ data }) {
	const attributes = data?.slug ? { href: data?.slug } : {};
	return (
		<div>
			<div className="max-w-[370px] bg-white p-[14px] border-[1px] border-[#633ABD20]">
				<Image src={data?.image.data?.attributes.url} height={100} width={400} alt="" className="h-[236px] w-[inherit] object-cover" />
				<div className="">
					<a {...attributes} target="__blank">
						<h3 className="text-[var(--bold-text)] pt-4">{data?.name}</h3>
					</a>
					<p className="text-[15px] text-[#7a7a7a]">{data?.specification}</p>
					<p className="pt-4 text-[16px] text-[var(--para-text)] leading-[1.6]">{data?.description}</p>
				</div>
			</div>
		</div>
	);
}

export default MentorCard;
