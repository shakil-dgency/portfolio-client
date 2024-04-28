import Image from "next/image";
import React from "react";

function ServiceCard({ img, title, description }) {
	return (
		<div>
			<div className="bg-[#E9EBEF] py-[30px] px-2.5 h-full ">
				<div className="max-w-[380px] mx-auto flex flex-col items-center">
					<Image src={img} height={100} width={200} alt="" className="h-[70px]" />
					<h3 className="mt-[20px] mb-[10px]">{title}</h3>
					<p className="text-[var(--para-text)] text-[16px] text-center leading-[1.6]">{description}</p>
				</div>
			</div>
		</div>
	);
}

export default ServiceCard;
