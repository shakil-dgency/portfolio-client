import Link from "next/link";
import React from "react";

function AllPosts({ categories }) {
    	// Function for structure the slug
	const handleSlug = (title, date) => {
		// const titleToSlug = title.toLowerCase().replace(/ /g, "-");
		const createdAtDate = new Date(date);
		const year = createdAtDate.getFullYear();
		const month = createdAtDate.getMonth() + 1;
		const formattedDate = `/${year}/${month < 10 ? "0" + month : month}`;

		return `${formattedDate}/${title}`;
	};
	return (
		<div className=" max-w-[672px] mx-auto bg-white px-8 py-12 rounded">
			<p className="text-[40px] font-[600] underline decoration-[2px] underline-offset-2 text-[#202020]">All Posts</p>

			<div className="mt-[40px] flex flex-col gap-[30px]">
				{categories &&
					categories.data.map((item) => {
						return (
							<div className="category" key={item.id}>
								<h2 className="font-[500]">{item?.attributes.title}</h2>
								<ul className="list-disc list-inside mt-[30px] ml-[50px]">
									{item?.attributes.news_feeds?.data.map((data) => {
										return (
											<li className="leading-[1.5] mb-2 text-[16px] font-[500] hover:text-[#633ABD]" key={data.id}>
												<Link href={handleSlug(data.attributes.slug, data.attributes.createdAt)}>{data?.attributes.feed_title}</Link>
											</li>
										);
									})}
								</ul>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default AllPosts;
