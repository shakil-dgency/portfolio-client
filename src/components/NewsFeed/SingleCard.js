"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { LiaFacebookSquare } from "react-icons/lia";
import { LiaTwitterSquare } from "react-icons/lia";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
import Link from "next/link";
import LikeCount from "./LikeCount";
import next from "next";

function SingleCard({ data, highlightedSearch, singleNews, previousData, nextData, randomFeed }) {
	const [likeCount, setLikeCount] = useState();
	const [likeStatus, setLikeStatus] = useState(false);

	useEffect(() => {
		const handleStorage = (id) => {
			const storageValue = localStorage.getItem("likeId" + id);
			return storageValue ? JSON.parse(storageValue) : false;
		};

		setLikeStatus(handleStorage(data.id));
	});

	// console.log(previousNextData && previousNextData);

	useEffect(() => {
		const fetchLikeCount = async () => {
			try {
				const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news-feeds/${data.id}`);
				const like = await res.json();

				setLikeCount(like.data.attributes.like_count);

				console.log();
			} catch (error) {}
		};

		fetchLikeCount();
	}, []);

	// Function for structure the slug
	const handleSlug = (title, date) => {
		// const titleToSlug = title.toLowerCase().replace(/ /g, "-");
		const createdAtDate = new Date(date);
		const year = createdAtDate.getFullYear();
		const month = createdAtDate.getMonth() + 1;
		const formattedDate = `/${year}/${month < 10 ? "0" + month : month}`;

		return `${formattedDate}/${title}`;
	};

	//Function for format the date
	const handleFormatedDate = (dateString) => {
		const date = new Date(dateString);
		const day = date.getDate();
		const month = date.toLocaleString("default", { month: "long" });
		const year = date.getFullYear();

		let daySuffix;
		if (day >= 11 && day <= 13) {
			daySuffix = "th";
		} else {
			switch (day % 10) {
				case 1:
					daySuffix = "st";
					break;
				case 2:
					daySuffix = "nd";
					break;
				case 3:
					daySuffix = "rd";
					break;
				default:
					daySuffix = "th";
					break;
			}
		}

		return `${day}${daySuffix} ${month} ${year}`;
	};

	//Function for count the like and update the like count
	async function handleLike(id) {
		let isLike = localStorage.getItem("likeId");

		if (!localStorage.getItem("likeId" + id)) {
			localStorage.setItem("likeId" + id, id);

			let stringToInt = parseInt(likeCount) + 1;
			let count = stringToInt.toString();
			console.log(count);

			const dataToUpdate = {
				data: {
					like_count: count,
				},
			};

			const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news-feeds/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(dataToUpdate),
			});

			setLikeCount(count);

			if (!response.ok) {
				console.error("Failed to update data:", response.statusText);
				return;
			}

			console.log("Data updated successfully");
		}
		console.log(id);
	}

	//Function for highlight the text which is searched

	const highlightSearchKeyword = (text, search) => {
		const parts = text.split(new RegExp(`(${search})`, "gi"));
		return parts.map((part, index) =>
			part.toLowerCase() === search.toLowerCase() ? (
				<span key={index} style={{ backgroundColor: "yellow" }}>
					{part}
				</span>
			) : (
				part
			)
		);
	};

	// Function to parse HTML content to text and apply highlighting to text nodes
	const parseAndHighlightHTML = (html, search) => {
		const tempDiv = document.createElement("div");
		tempDiv.innerHTML = html;
		const nodes = tempDiv.childNodes;
		const highlightedNodes = Array.from(nodes).map((node, index) => {
			if (node.nodeType === Node.TEXT_NODE) {
				return highlightSearchKeyword(node.textContent, search);
			} else {
				return React.createElement(node.tagName.toLowerCase(), { key: index, ...node.attributes }, parseAndHighlightHTML(node.innerHTML, search));
			}
		});
		return highlightedNodes;
	};

	return (
		<div>
			<div className="max-w-[640px] mx-auto bg-[#ffffff] rounded-md mb-5 ">
				<div className="px-6 py-6">
					<Link href={handleSlug(data.attributes.slug, data.attributes.createdAt)} className="text-[22px] font-[500] hover:underline">
						{highlightSearchKeyword(data.attributes.feed_title, highlightedSearch)}
					</Link>
					<p className="text-[13px] text-[#606060] pt-1">{handleFormatedDate(data.attributes.createdAt)}</p>
					<div className="caption mt-3 mb-7">
						<div className="text-[#191919]">{parseAndHighlightHTML(data.attributes.feed_description, highlightedSearch)}</div>
					</div>

					<div className="image_video">
						{data.attributes.image.data !== null && (
							<Image src={data.attributes.image.data?.attributes.url} height={400} width={650} alt="" className="w-full" />
						)}
						{data.attributes.video_url && (
							<iframe
								src={data.attributes.video_url + "?rel=0&controls=0"}
								title="YouTube video"
								allowFullScreen
								className="w-full h-[350px]"
							></iframe>
							// <ReactPlayer
							// 	url={data.video}
							// 	config={{
							// 		youtube: {
							// 			playerVars: { showinfo: 0 },
							// 		},
							// 	}}
							// />
						)}

						{data.attributes.gif_file && <img src={data.attributes.gif_file} className="w-full h-[350px] object-contain bg-black" />}
					</div>
					<div className="">
						<div className="flex items-center mt-3 gap-2">
							<BiLike />
							<p className="text-[14px]">{likeCount} people liked it</p>
						</div>
						<div className="h-[1px] w-[full] bg-[#efefef] my-2"></div>
						<div className="flex items-center justify-between">
							<button className={`flex items-center ${likeStatus ? "text-[#717171]" : ""}`} onClick={() => handleLike(data.id)}>
								<BiSolidLike className="text-[20px]" />
								<span className="ml-1 font-[500]">Like</span>
							</button>
							<div className="flex gap-3 text-[24px]">
								<LinkedinShareButton>
									<CiLinkedin />
								</LinkedinShareButton>
								<FacebookShareButton url={"https://hamiduzjaman.com/2023/12/beauty-of-eyes"}>
									<LiaFacebookSquare />
								</FacebookShareButton>
								<TwitterShareButton>
									<LiaTwitterSquare />
								</TwitterShareButton>
							</div>
						</div>
					</div>
				</div>
			</div>
			{singleNews && (
				<div className="flex justify-center gap-10 my-16 ">
					{previousData && (
						<Link
							href={handleSlug(previousData && previousData.attributes.slug, previousData && previousData.attributes.createdAt)}
							className="bg-black text-white font-[700] rounded-md px-[38px] py-2"
						>
							BACK
						</Link>
					)}
					<Link
						href={handleSlug(randomFeed && randomFeed.attributes.slug, randomFeed && randomFeed.attributes.createdAt)}
						className="bg-black text-white font-[700] rounded-md px-6 py-2"
					>
						RANDOM
					</Link>
					{nextData && (
						<Link
							href={handleSlug(nextData && nextData.attributes.slug, nextData && nextData.attributes.createdAt)}
							className="bg-black text-white font-[700] rounded-md px-[38px] py-2"
						>
							NEXT
						</Link>
					)}
				</div>
			)}
		</div>
	);
}

export default SingleCard;
