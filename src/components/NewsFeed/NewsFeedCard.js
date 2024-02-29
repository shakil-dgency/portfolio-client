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
import SingleCard from "./SingleCard";

function NewsFeedCard() {
	const feedData = [
		{
			id: 1,
			title: "Beauty of eyes",
			date: "19th December 2023",
			caption:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, numquam quae a quos, velit omnis sapiente similique officia itaque assumenda temporibus soluta eligendi quod architecto inventore nobis doloremque eos at.",
			image: "/newsFeed/story.jpg",
			video: "",
			url: "https://escaperoommarketer.com/23-smart-landing-page-trends-and-over-60-examples",
			createdAt: "2023-12-19T16:40:23.978Z",
		},
		{
			id: 2,
			title: "The Color of City Life",
			date: "19th December 2023",
			caption:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, numquam quae a quos, velit omnis sapiente similique officia itaque assumenda temporibus soluta eligendi quod architecto inventore nobis doloremque eos at.",
			image: "",
			video: "https://www.youtube.com/embed/SMKPKGW083c",
			url: "https://www.youtube.com/watch?v=3UvI0k_KUIo",
			createdAt: "2023-12-19T16:40:23.978Z",
		},
		{
			id: 3,
			title: "Corporate Lifestyle",
			date: "19th February 2024",
			caption:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, numquam quae a quos, velit omnis sapiente similique officia itaque assumenda temporibus soluta eligendi quod architecto inventore nobis doloremque eos at.",
			image: "",
			video: "",
			url: "https://escaperoommarketer.com/another-blog",
			createdAt: "2024-02-19T16:40:23.978Z",
		},
	];

	// useEffect(() => {
	// 	localStorage.removeItem("likedId");
	// }, []);

	return (
		<div className="mb-20">
			<div className="max-w-[768px] mx-auto   py-4">
				<h1 className="text-[32px] font-[700] ">News Feed</h1>
			</div>
			{feedData &&
				feedData.map((data) => {
					return <SingleCard data={data} key={data.id} />;
				})}
		</div>
	);
}

export default NewsFeedCard;
