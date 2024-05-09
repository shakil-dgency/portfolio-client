"use client";
import React, { useEffect, useState } from "react";
import FooterItem from "./Footer/FooterItem";

// async function getFooterData() {
// 	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/footer?populate[0]=links&populate[1]=social_links.icon`, {
// 		next: { revalidate: 10 },
// 	});

// 	const footerData = await res.json();
// 	return footerData;
// }

function Footer() {
	const [footerData, setFooterData] = useState();

	useEffect(() => {
		const APIurl = `${process.env.NEXT_PUBLIC_API_URL}/api/footer?populate[0]=links&populate[1]=social_links.icon`;

		fetch(`${APIurl}`)
			.then((res) => res.json())
			.then((data) => setFooterData(data))
			.catch((error) => console.log(error));
	});

	return (
		<div>
			<FooterItem data={footerData?.data.attributes} />
		</div>
	);
}

export default Footer;
