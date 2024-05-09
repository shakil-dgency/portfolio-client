import React from "react";
import logo from "../../../../public/profile/microsoft.svg";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

function CertificationItem({ data }) {
	return (
		<div>
			<div className="flex flex-col sm:flex-row gap-[5px] sm:gap-[30px] ">
				<div className="img min-w-[62px]">
					<Image src={data?.image.data?.attributes.url} height={100} width={200} alt="" className="h-[62px] w-[inherit] mt-2" />
				</div>
				<div className="max-w-[655px]">
					<h3 className="">{data?.title}</h3>
					<p className="text-[var(--bold-text)] text-[16px] font-[400] py-1">{data?.author}</p>
					<p className="text-[#7a7a7a] text-[15px]">{data?.duration}</p>
					<a href={`${data?.cta_slug}`} target="__blank" className="text-[#1A85F0] text-[14px] font-[500] mt-2 flex items-center gap-2.5 ">
						{data?.cta} <FiExternalLink />
					</a>
				</div>
			</div>
		</div>
	);
}

export default CertificationItem;
