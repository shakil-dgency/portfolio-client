"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import pin from "@/../../public/pin.svg";
import { MdKeyboardArrowDown } from "react-icons/md";

function PinnedBlogCard({ blogPosts }) {
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(1);

	const [pinnedPosts, setPinnedPosts] = useState([]);
	const [pinnedPostIds, setPinnedPostIds] = useState(new Set());

	useEffect(() => {
		const fetchPinnedPosts = async () => {
			let allPinnedPosts = [];
			let page = 1;
			let totalPages = 1;

			try {
				while (page <= totalPages) {
					const res = await fetch(
						`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?filters[pin_post]=true&pagination[page]=${page}&pagination[pageSize]=14&sort[0]=id:desc&populate=*`
					);
					const data = await res.json();
					const pinnedData = data.data || [];

					// Append fetched pinned posts to the list
					allPinnedPosts = [...allPinnedPosts, ...pinnedData];

					// Update total pages from API response metadata
					totalPages = data.meta.pagination.pageCount;
					page++;
				}

				// Sort all pinned posts by pinpost_id
				allPinnedPosts.sort((a, b) => a.attributes.pinpost_id - b.attributes.pinpost_id);

				setPinnedPosts(allPinnedPosts);
				setPinnedPostIds(new Set(allPinnedPosts.map((post) => post.id))); // Store pinned post IDs
			} catch (error) {
				console.error("Failed to fetch pinned posts:", error);
			}
		};

		fetchPinnedPosts();
	}, []);

	console.log(pinnedPosts);

	const handleLoadMore = async () => {
		const nextPage = page + 1;
		setIsLoading(true);
		if (nextPage <= blogPosts?.meta.pagination.pageCount) {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?pagination[page]=${nextPage}&sort[0]=id:desc&populate=*`);
			const data = await res.json();

			if (data?.data.length) {
				const filteredPosts = data.data.filter((post) => !pinnedPostIds.has(post.id)); // Filter out pinned posts
				setBlogPosts((prevItems) => ({ ...prevItems, data: [...prevItems.data, ...filteredPosts] }));
				setIsLoading(false);
				setPage(nextPage);
			}
		}
	};

	return (
		<>
			<div div className="pt-10 px-[10px] max-w-[1050px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-6 md:gap-y-12 gap-x-6 justify-center">
				{/* Render Pinned Posts */}
				{pinnedPosts.length > 0 &&
					pinnedPosts.map((post) => (
						<Link
							href={`/blog/${post.attributes.slug}`}
							key={post.id}
							className="group relative z-10 max-w-[545px] mx-auto bg-[#fff] px-4 py-6 md:py-8 md:px-7 shadow-md rounded-md hover:shadow-[0px_0px_20px_2px_rgba(99,58,189,0.25)] duration-300"
						>
							{post.attributes.cover_image.data ? (
								<Image
									src={`${post.attributes.cover_image.data ? post.attributes.cover_image.data.attributes.url : "/"}`}
									height={280}
									width={515}
									className="max-h-[260px] object-cover rounded-t-[6px]"
									alt=""
								/>
							) : (
								<div className="h-[260px] w-full bg-[#d6d6d6] rounded-t-[6px]"></div>
							)}
							<p className="py-[6px] md:py-0 font-[500] leading-[1.3] text-[20px] md:text-[22px] pt-2 md:pt-4 group-hover:text-[#633abd]">
								{post.attributes.title}
							</p>
							{/* <span className="absolute -top-6 right-8 bg-[#FFF] px-5 py-1 z-[-1] shadow-[0px_0px_20px_2px_rgba(255,73,44,0.15)]">pin</span> */}
							<span className="absolute top-[4px] right-8 text-[#ADB5BD] flex items-center gap-1 py-1 text-[12px] font-[500] rounded">
								{" "}
								<Image src={pin} height={30} width={15} alt="" className=" " />
								<p>Pinned</p>
							</span>
						</Link>
					))}

				{blogPosts &&
					blogPosts?.data?.map((post) => {
						return (
							<Link
								href={`/blog/${post.attributes.slug}`}
								key={post.id}
								className="group max-w-[545px] mx-auto bg-[#fff] px-4 py-6 md:py-8 md:px-7 shadow-md rounded-md hover:shadow-[0px_0px_20px_2px_rgba(99,58,189,0.25)] duration-300"
							>
								{post.attributes.cover_image.data ? (
									<Image
										src={`${post.attributes.cover_image.data ? post.attributes.cover_image.data.attributes.url : "/"}`}
										height={280}
										width={515}
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
			{page !== blogPosts?.meta?.pagination.pageCount && (
				<div className="flex justify-center pt-10 text-[#FF492C] h-[100px]">
					{isLoading ? (
						<div className="flex justify-center  ">{/* <InfinitySpin width="200" color="#FF492C" /> */}</div>
					) : (
						<div
							className="flex justify-center items-center gap-[2px] font-[600] rounded-md cursor-pointer border-[#FF492C] border-[1px] px-8 py-3"
							onClick={handleLoadMore}
						>
							Load more <MdKeyboardArrowDown className={`arrow_rotate text-2xl`} />
						</div>
					)}
				</div>
			)}
		</>
	);
}

export default PinnedBlogCard;
