"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import story from "../../../public/newsFeed/story.jpg";
import story2 from "../../../public/newsFeed/story2.jpeg";

import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { LiaFacebookSquare } from "react-icons/lia";
import { LiaTwitterSquare } from "react-icons/lia";

import ReactPlayer from "react-player";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
import Link from "next/link";

function SingleCard({ data }) {
	const [likeCount, setLikeCount] = useState(17);

	const handleLike = (id) => {
		let isLike = localStorage.getItem("likeId");

		if (!localStorage.getItem("likeId" + id)) {
			setLikeCount(likeCount + 1);
			localStorage.setItem("likeId" + id, id);
		}
		console.log(id);
	};

	const handleStorage = (id) => {
		return window && localStorage.getItem("likeId" + id);
	};

	const handleSlug = (title, date) => {
		const titleToSlug = title.toLowerCase().replace(/ /g, "-");
		const createdAtDate = new Date(date);
		const year = createdAtDate.getFullYear();
		const month = createdAtDate.getMonth() + 1;
		const formattedDate = `/${year}/${month < 10 ? "0" + month : month}`;

		return `${formattedDate}/${titleToSlug}`;
	};

	return (
		<div>
			<div className="max-w-[640px] mx-auto bg-[#ffffff] rounded-md mb-5 ">
				<div className="px-6 py-6">
					<Link href={handleSlug(data.title, data.createdAt)} className="text-[22px] font-[500] hover:underline">
						{data.title}
					</Link>
					<p className="text-[13px] text-[#606060] pt-1">{data.date}</p>
					<div className="caption mt-3 mb-7">
						<p className="text-[#191919]">{data.caption}</p>
					</div>
					<div className="image_video">
						{data.image && <Image src={data.image} height={400} width={650} alt="" className="w-full" />}
						{data.video && (
							<iframe src={data.video + "?rel=0&controls=0"} title="YouTube video" allowFullScreen className="w-full h-[350px]"></iframe>
							// <ReactPlayer
							// 	url={data.video}
							// 	config={{
							// 		youtube: {
							// 			playerVars: { showinfo: 0 },
							// 		},
							// 	}}
							// />
						)}
					</div>
					<div className="">
						<div className="flex items-center mt-3 gap-2">
							<BiLike />
							<p className="text-[14px]">{likeCount} people liked it</p>
						</div>
						<div className="h-[1px] w-[full] bg-[#efefef] my-2"></div>
						<div className="flex items-center justify-between">
							<button className={`flex items-center ${handleStorage(data.id) ? "text-[#717171]" : ""}`} onClick={() => handleLike(data.id)}>
								<BiSolidLike className="text-[20px]" />
								<span className="ml-1 font-[500]">Like</span>
							</button>
							<div className="flex gap-3 text-[24px]">
								<LinkedinShareButton url={data.url}>
									<CiLinkedin />
								</LinkedinShareButton>
								<FacebookShareButton url={data.url} quote={data.caption} hashtag="">
									<LiaFacebookSquare />
								</FacebookShareButton>
								<TwitterShareButton url={data.url}>
									<LiaTwitterSquare />
								</TwitterShareButton>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SingleCard;
