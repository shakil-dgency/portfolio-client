"use client";
import React, { useEffect, useState } from "react";

import SingleCard from "./SingleCard";
import SearchComponent from "./SearchComponent";
import Link from "next/link";
import NavBar from "../NavBar";
import { BiChevronLeft } from "react-icons/bi";

import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Spinner";
import { usePathname } from "next/navigation";

function NewsFeedCard({ feedData, singleNews, previousData, nextData, randomFeed }) {
	const [sortedData, setSortedData] = useState();
	const [search, setSearch] = useState("");
	const [count, setCount] = useState(2);
	const [dataLength, setdataLength] = useState(1);
	const [noData, setNoData] = useState();

	const navigate = usePathname();

	// console.log(newFunction);

	useEffect(() => {
		if (feedData) {
			let finalData = feedData.reduce(function (accumulator, currentValue) {
				if (typeof currentValue.id === "number") {
					// Insert currentValue into the correct position in the accumulator array
					if (navigate === "/") {
						// Check if pin_post is true
						if (currentValue.attributes.pin_post === true) {
							// Insert at the beginning
							accumulator.unshift(currentValue);
							console.log(accumulator);
						} else {
							const index = accumulator.findIndex((item) => item.id <= currentValue.id);

							if (index === -1) {
								accumulator.push(currentValue);
							} else {
								accumulator.splice(index, 0, currentValue);
							}
						}

						
					} else {
						const index = accumulator.findIndex((item) => item.id <= currentValue.id);

						if (index === -1) {
							accumulator.push(currentValue);
						} else {
							accumulator.splice(index, 0, currentValue);
						}
					}

				}
				return accumulator;
			}, []);
			setSortedData(finalData);
			setdataLength(feedData.length);
			console.log(sortedData);
		}

		const foundData = sortedData?.filter((item) => {
			return search.toLowerCase() === ""
				? item
				: item.attributes.feed_title.toLowerCase().includes(search.toLowerCase()) ||
						item.attributes.feed_description.toLowerCase().includes(search.toLowerCase());
		});

		setNoData(foundData?.length);
	}, [feedData, search]);

	// setNextData(sortedData && sortedData);

	const handleLoad = () => {
		setTimeout(() => {
			setCount(count + 1);
		}, 1500);
	};

	return (
		<div className="  mb-10">
			<NavBar search={search} setSearch={setSearch} isSearch={singleNews ? false : true} />
			{/* <SearchComponent search={search} setSearch={setSearch} /> */}
			<div className="g__body-container g__mobile-container">
				<div className=" max-w-[672px] mx-auto sm:pt-16  sm:pb-[50px] flex flex-col sm:flex-row items-center sm:justify-between">
					{singleNews ? (
						<div className="h-[inherit] sm:h-[68px] self-start sm:self-auto sm:flex sm:items-center pt-[25px] sm:pt-0 ml-2.5 md:ml-0 mb-[30px] sm:mb-0">
							<Link
								href="/"
								className="text-[var(--bold-text)] text-center font-[500] text-[12px] md:text-[14px] flex items-center decoration-[1px]  underline underline-offset-4 "
							>
								<BiChevronLeft className="text-2xl" /> BACK TO All DAILY DIGEST
							</Link>
						</div>
					) : (
						<div className="h-[inherit] sm:h-[68px] sm:ml-2.5 md:ml-0 mb-[15px] sm:mb-0 pt-[25px] sm:pt-0">
							<h1 className="text-[26px] sm:text-[32px] font-[600] text-center sm:text-left cursor-pointer" onClick={() => window.location.reload()}>
								DAILY DIGEST
							</h1>
							<p className="text-[14px] font-[400] text-[ #2C3E50]">Cutting-edge trends and timeless truths.</p>
						</div>
					)}
					<div className={`subscribe h-[inherit] sm:h-[68px] mr-2.5 md:mr-0 ${singleNews ? "pb-[15px] sm:pb-0" : "pb-[25px] sm:pb-0"}`}>
						<div className="relative flex max-w-[330px] sm:max-w-[250px]">
							<input
								type="email"
								placeholder="Type your email...."
								className="outline-none px-2 py-[10px] sm:py-[7px] w-full rounded-l-[5px] border-[1px] border-[#222222] bg-transparent"
							/>
							<button className=" bg-[#222222] text-white px-[15px] rounded-r-[5px] text-[13px]  ml-[-10px] ">Subscribe</button>
						</div>
						<p className="text-[14px] text-[var(--para-text)] text-center pt-2 sm:pt-1">
							Email <Link href={"/privacy-policy"}>Terms & Privacy</Link>
						</p>
					</div>
				</div>
				{noData !== 0 ? (
					<InfiniteScroll dataLength={count} next={handleLoad} hasMore={count <= dataLength} loader={<Spinner />}>
						{sortedData &&
							sortedData
								.filter((item) => {
									return search.toLowerCase() === ""
										? item
										: item.attributes.feed_title.toLowerCase().includes(search.toLowerCase()) ||
												item.attributes.feed_description.toLowerCase().includes(search.toLowerCase());
								})
								.slice(0, count)
								.map((data) => {
									return (
										<SingleCard
											data={data ? data : "No data"}
											key={data.id}
											highlightedSearch={search.toLowerCase()}
											singleNews={singleNews}
											previousData={previousData}
											nextData={nextData}
											randomFeed={randomFeed}
										/>
									);
								})}
					</InfiniteScroll>
				) : (
					<div>
						<p className="text-center text-[24px] pt-8">No data Found</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default NewsFeedCard;
