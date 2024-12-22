"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {  BiChevronRight } from "react-icons/bi";

function MoreBlog({blog_details}) {
    const [allBlogData, setAllBlogData] = useState()
    
	useEffect(() => {
		if (blog_details) {
			fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate=*`)
				.then((response) => response.json())
				.then((data) => {
					setAllBlogData(data);
				});

			if (document.querySelectorAll(".blog_body a").length !== 0) {
				var aTags = document.querySelectorAll(".blog_body a");
				aTags.forEach(function (aTag) {
					if (aTag.href.split("/")[2] === "hamiduzjaman.com") {
						console.log("on same tab");
					} else {
						aTag.setAttribute("target", "_blank");
					}
				});
			}
		}
	}, [blog_details]);
	return (
		<div className="more_post">
			<h2 className="text-[24px] md:text-[32px] lg:text-[42px] font-[900] px-5 max-w-[800px] lg:max-w-[1000px] mx-auto text-center pb-[30px] md:pb-[40px]">
				Read More Articles Like This
			</h2>
			<div className="pb-12 px-[10px] max-w-[1050px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-4 justify-center">
				{allBlogData &&
					allBlogData.data
						.filter((item) => item.attributes.slug !== blog_details)
						.slice(0, 2)
						.map((post) => {
							return (
								<Link
									href={`/blog/${post.attributes.slug}`}
									key={post.id}
									className="group max-w-[545px] mx-auto bg-[#fff] p-2 md:p-5 shadow-md rounded-md  hover:shadow-[0px_0px_20px_2px_rgba(99,58,189,0.25)] duration-300"
								>
									{post.attributes.cover_image.data ? (
										<Image
											src={`${post.attributes.cover_image.data ? post.attributes.cover_image.data.attributes.url : "/"}`}
											height={300}
											width={650}
											className="max-h-[260px] object-cover rounded-t-[6px]"
											alt=""
										/>
									) : (
										<div className="h-[260px] w-full bg-[#d6d6d6] rounded-t-[6px]"></div>
									)}
									<p className="py-[6px] md:py-0 font-[500] leading-[1.3] text-[20px] md:text-[22px] pt-2 md:pt-4 group-hover:text-[#633abd]">
										{post.attributes.title}
									</p>
								</Link>
							);
						})}
			</div>
			<div className="flex justify-center pb-40 text-[#633abd]">
				<Link href={"/blog"} className="group text-[18px] flex justify-center font-[600] cursor-pointer">
					All articles <BiChevronRight className={`arrow_rotate pt-[2px] text-[26px] group-hover:translate-x-[3px] duration-200`} />
				</Link>
			</div>
		</div>
	);
}

export default MoreBlog;
