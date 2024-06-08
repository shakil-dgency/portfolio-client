"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/newsFeed/like animation.json";
import styles from "../../app/style/richtext.module.css";

import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import like from "../../../public/newsFeed/like.svg";
import dolike from "../../../public/newsFeed/dolike.svg";
import likeOut from "../../../public/newsFeed/likeOutline.svg";
import linkedIn from "../../../public/newsFeed/linkedin.svg";
import facebook from "../../../public/newsFeed/facebook.svg";
import twitter from "../../../public/newsFeed/twitter.svg";
import linkCopy from "../../../public/newsFeed/link.svg";
import random from "../../../public/Random.svg";
import pin from "../../../public/pin.svg";
import { usePathname } from "next/navigation";

function SingleCard({ data, highlightedSearch, singleNews, previousData, nextData, randomFeed }) {
	const [likeCount, setLikeCount] = useState();
	const [likeStatus, setLikeStatus] = useState(false);
	const [likeAnim, setLikeAnim] = useState(false);

	const navigate = usePathname();

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
				const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news-feeds/${data?.attributes.slug}`);
				const like = await res.json();

				setLikeCount(like.data.attributes.like_count);

				// console.log(likeCount);
			} catch (error) {}
		};

		fetchLikeCount();

		//if a tag has own link then load on the page otherwise new tab

		if (document.querySelectorAll(".caption a").length !== 0) {
			var aTags = document.querySelectorAll(".caption a");
			aTags.forEach(function (aTag) {
				if (aTag.href.split("/")[2] === "hamiduzjaman.com") {
					// console.log("on same tab");
				} else {
					aTag.setAttribute("target", "_blank");
				}
			});
		}
	}, [likeCount]);

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
	async function handleLike(id, slug) {
		let isLike = localStorage.getItem("likeId");
		// const likeBtn = document.querySelector(".like_btn");

		if (!localStorage.getItem("likeId" + id)) {
			localStorage.setItem("likeId" + id, id);

			let stringToInt = parseInt(likeCount) + 1;
			let count = stringToInt.toString();

			setLikeAnim(true);

			// setTimeout(() => {
			// 	likeBtn.classList.add("like_anim");
			// }, 100);

			const dataToUpdate = {
				data: {
					like_count: count,
				},
			};

			// console.log(count);

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
		}
		// console.log();
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
			} else if (node.nodeType === Node.ELEMENT_NODE) {
				if (node.tagName.toLowerCase() === "a") {
					const href = node.getAttribute("href");
					const highlightedContent = parseAndHighlightHTML(node.innerHTML, search);
					return React.createElement(node.tagName.toLowerCase(), { key: index, href: href, ...node.attributes }, highlightedContent);
				} else {
					return React.createElement(node.tagName.toLowerCase(), { key: index, ...node.attributes }, parseAndHighlightHTML(node.innerHTML, search));
				}
			}
		});

		return highlightedNodes;
	};

	const handleCopyUrl = (e) => {
		let linkBtn = document.querySelector(".link_copy");
		const url = handleSlug(data.attributes.slug, data.attributes.createdAt);
		const completeUrl = "https://hamiduzjaman.com" + url;
		navigator.clipboard.writeText(completeUrl);
		e.target.classList.add("bg-[#BFFF00]");
		setTimeout(() => {
			e.target.classList.remove("bg-[#BFFF00]");
		}, 700);
	};

	// console.log(data);

	return (
		<div>
			<div>
				<div className="max-w-[672px] mx-auto bg-[#ffffff] sm:rounded-md mb-7 md:mb-[30px] relative">
					<div className="px-[16px] py-[24px] sm:px-[30px] sm:py-[30px]">
						<div className="flex justify-between gap-12">
							<Link
								href={handleSlug(data.attributes.slug, data.attributes.createdAt)}
								className="post_title text-[18px] leading-[30.8px] md:leading-[inherit] sm:text-[22px] text-[var(--bold-text)] font-[500] hover:underline"
							>
								{highlightSearchKeyword(data.attributes.feed_title, highlightedSearch)}
							</Link>
							{data?.attributes?.pin_post === true && navigate =='/' && (
							<span className=" text-[#ADB5BD] flex items-center gap-1 py-1 text-[12px] font-[500] rounded">
								{" "}
								<Image src={pin} height={30} width={15} alt="" className=" " />
								<p>Pinned</p>
							</span>
						)}
						</div>

						<p className="text-[14px] text-[#ADB5BD] pt-1 font-[400]">{handleFormatedDate(data.attributes.createdAt)}</p>
						<div className="caption my-[14px] ">
							<div className={`${styles.text_area}`}>
								<div className="text-[var(--para-text)] text-[14px] sm:text-[16px] font-[400]">
									{parseAndHighlightHTML(data.attributes.feed_description, highlightedSearch)}
								</div>
							</div>
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
									className="w-full h-[200px] sm:h-[350px]"
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

							{data.attributes.gif_file && <img src={data.attributes.gif_file} className="w-full sm:h-[350px] object-contain bg-black" />}
						</div>
						{data.attributes.feed_description_down && (
							<div className="caption my-[14px] pb-2">
								<div className={`${styles.text_area}`}>
									<div className="text-[var(--para-text)] text-[14px] sm:text-[16px] font-[400]">
										{parseAndHighlightHTML(data.attributes.feed_description_down, highlightedSearch)}
									</div>
								</div>
							</div>
						)}

						<div className="">
							<div className="flex items-center mt-[14px] gap-2">
								{/* <BiLike /> */}
								<Image src={like} alt="" className="w-[25px] h-[25px]" />
								<p className="text-[14px] text-[var(--para-text)]">
									{likeStatus && <span>You and</span>} {likeCount} others liked it
								</p>
							</div>
							<div className="h-[1px] w-[full] bg-[#ADB5BD] mt-[10px] mb-[14px]"></div>
							<div className="flex items-center justify-between">
								<div className={`flex items-center ${likeStatus ? "text-[#717171]" : ""}`} onClick={() => handleLike(data.id, data?.attributes.slug)}>
									{/* <BiSolidLike className="text-[20px]" /> */}
									{likeStatus ? (
										<div className="">
											<Image src={dolike} alt="" className={`${likeAnim ? "like_anim" : ""} w-[26px] h-[26px]`} />
											{/* <Lottie animationData={animationData} className=" absolute top-0 left-0" loop={true} /> */}
										</div>
									) : (
										// <BiSolidLike className="text-[20px]" />
										<Image src={likeOut} alt="" className=" w-[29px] h-[26px] hover:cursor-pointer" />
									)}
									<p className="ml-[10px] mt-1 font-[500] text-[var(--bold-text)]">Like</p>
								</div>
								<div className="flex gap-3 text-[24px]">
									<LinkedinShareButton url={`https://hamiduzjaman.com${handleSlug(data.attributes.slug, data.attributes.createdAt)}`}>
										<Image src={linkedIn} alt="" className=" w-[20px] h-[20px]" />
									</LinkedinShareButton>
									<FacebookShareButton url={`https://hamiduzjaman.com${handleSlug(data.attributes.slug, data.attributes.createdAt)}`}>
										<Image src={facebook} alt="" className=" w-[20px] h-[20px]" />
									</FacebookShareButton>
									<TwitterShareButton url={`https://hamiduzjaman.com${handleSlug(data.attributes.slug, data.attributes.createdAt)}`}>
										<Image src={twitter} alt="" className=" w-[20px] h-[20px]" />
									</TwitterShareButton>
									<Image
										src={linkCopy}
										alt=""
										className="link_copy w-[20px] h-[20px] rounded-tl-md rounded-br-md cursor-pointer"
										onClick={(Event) => handleCopyUrl(Event)}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				{singleNews && (
					<div className="flex justify-center gap-4 sm:gap-10">
						{previousData && (
							<Link
								href={handleSlug(previousData && previousData.attributes.slug, previousData && previousData.attributes.createdAt)}
								className="flex items-center rounded-[5px] text-[14px] sm:text-[16px] text-[var(--bold-text)] border-[var(--para-text)] border-[1px] py-[7px] px-[10px] sm:py-[15px] sm:px-[25px]"
							>
								<BiChevronLeft className="text-2xl -ml-[6px]" />
								Previous
							</Link>
						)}
						<Link
							href={handleSlug(randomFeed && randomFeed.attributes.slug, randomFeed && randomFeed.attributes.createdAt)}
							className="flex items-center gap-2 rounded-[5px] text-[14px] sm:text-[16px] text-[var(--bold-text)] border-[var(--para-text)] border-[1px] py-[7px] px-[9px] sm:py-[15px] sm:px-[22px]"
						>
							{/* <LiaRandomSolid /> */}
							<Image src={random} alt="" className=" w-[18px] h-[18px]" />
							Random
						</Link>
						{nextData && (
							<Link
								href={handleSlug(nextData && nextData.attributes.slug, nextData && nextData.attributes.createdAt)}
								className=" flex items-center rounded-[5px] text-[14px] sm:text-[16px] text-[var(--bold-text)] border-[var(--para-text)] border-[1px] py-[7px] px-[20px] sm:py-[15px] sm:px-[40px]"
							>
								Next
								<BiChevronRight className="text-2xl -mr-[6px]" />
							</Link>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default SingleCard;
