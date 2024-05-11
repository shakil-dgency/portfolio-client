import React from "react";
import book from "../../../../public/profile/book.svg";
import Image from "next/image";

function BooksCard({ data }) {
	const attributes = data?.slug ? { href: data?.slug } : {};
	return (
		<div className="book_backgroun bg-[#F0EEEA] shadow-sm max-w-[430px] lg:max-w-[400px] p-[26px] h-full ">
			<Image src={data?.image.data?.attributes.url} height={100} width={200} alt="" className="h-[300px] lg:h-[260px] w-full  object-contain" />
			<div className="">
				<a {...attributes} target="__blank">
					<h3 className="text-[var(--bold-text)] pt-4">{data?.title}</h3>
				</a>
				<p className="text-[15px] text-[#7a7a7a]">{data?.author}</p>
				<p className="pt-4 text-[16px] text-[var(--para-text)] leading-[1.6] pb-10">{data?.description}</p>
			</div>
		</div>
	);
}

export default BooksCard;
