import Image from "next/image";
import React from "react";

function ServiceCard({ data }) {
	const attributes = data?.slug ? { href: data?.slug } : {};
	return (
		<div>
			<div className="bg-[#E9EBEF] py-[30px] px-2.5 h-full ">
				<div className="max-w-[380px] mx-auto flex flex-col items-center">
					<Image src={data?.icon.data?.attributes.url} height={100} width={200} alt="" className="h-[70px]" />
					<a {...attributes} target="__blank">
						<h3 className="mt-[20px] mb-[10px]">{data?.title}</h3>
					</a>
					<p className="text-[var(--para-text)] text-[16px] text-center leading-[1.6]">{data?.description}</p>
				</div>
			</div>
		</div>
	);
}

export default ServiceCard;
