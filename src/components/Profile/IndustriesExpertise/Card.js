import React from "react";
import cardImage from "../../../../public/profile/technology.jpg";
import logo1 from "../../../../public/profile/all.svg";
import logo2 from "../../../../public/profile/pickleball-logo 1.svg";
import logo3 from "../../../../public/profile/radient.svg";
import Image from "next/image";

function Card({ data }) {
	const attributes = data?.card_slug ? { href: data?.card_slug } : {};
	return (
		<div className="max-w-[410px] bg-[#FBFFFD20] h-full">
			<div className="image">
				<Image
					src={data?.image.data?.attributes.url}
					alt="this is img"
					width={400}
					height={200}
					className="w-full h-[215px] object-cover object-center"
				/>
			</div>
			<div className="card-body border-[1px] border-[#00000010] p-[15px] md:p-[30px]">
				<a {...attributes} target="_blank">
					<h3 className="">{data?.title}</h3>
				</a>
				<p className="mt-2.5 md:mt-[8px] mb-[30px] text-[var(--para-text)] text-[16px] leading-[1.6]">{data?.description}</p>
				<div className="flex items-center gap-[10px] mb1:gap-2.5 mb3:gap-3">
					{data?.logos.data?.map((item) => {
						return (
							<Image
								src={item.attributes.url}
								alt="this is img"
								width={400}
								height={200}
								className="h-[18px] mb1:h-[25px] mb2:h-[30px] w-[inherit]"
								key={item.id}
							/>
						);
					})}

					<p className="text-[12px] mb1:text-[14px] mb2:text-[16px] text-[#555555]">20 + more...</p>
				</div>
			</div>
		</div>
	);
}

export default Card;
