import React from "react";
import book from "../../../../public/profile/book.svg";
import Image from "next/image";

function BooksCard({ data }) {
	const attributes = data?.slug ? { href: data?.slug } : {};
	return (
		<div>
			{/* <div className="bg-[#E9EBEF] p-3 max-w-[496px] flex flex-col lg:flex-row gap-[20px] border-[1px] border-[#6B6B6B10]">
				<div className=" md:flex-[1.1] ">
					<Image
						src={book}
						width={500}
						height={300}
						alt=""
						className="h-[240px] w-full bg-[#dbdde2d0] lg:bg-[inherit] lg:w-[inherit] object-contain"
					/>
				</div>
				<div className="md:flex-[2]">
					<p className="text-[var(--bold-text)] font-[500] text-[24px] lg:text-[20px] pt-1">Ogilvy on Advertising</p>
					<p className="text-[15px] text-[#555555] pt-1.5 pb-4">David Ogilvy</p>
					<p className="text-[16px] text-[var(--para-text)]">
						This primer on all aspects of advertising was written by the founder of Ogilvy & Mather, an advertising agency with 450 offices in 120
						countries. This text covers what does as well as what does not sell, and is illustrated with 185 advertisements.
					</p>
				</div>
			</div> */}
			<div className="book_backgroun bg-[#F0EEEA] shadow-sm max-w-[430px] lg:max-w-[400px] p-[26px] ">
				<Image src={data?.image.data?.attributes.url} height={100} width={200} alt="" className="h-[300px] lg:h-[260px] w-full  object-contain" />
				<div className="">
					<a {...attributes} target="__blank">
						<h3 className="text-[var(--bold-text)] pt-4">{data?.title}</h3>
					</a>
					<p className="text-[15px] text-[#7a7a7a]">{data?.author}</p>
					<p className="pt-4 text-[16px] text-[var(--para-text)] leading-[1.6] pb-10">{data?.description}</p>
				</div>
			</div>
		</div>
	);
}

export default BooksCard;
