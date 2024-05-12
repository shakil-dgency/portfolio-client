"use client";
import React, { useEffect, useState } from "react";
import styles from "../../app/style/notfound.module.css";
import Link from "next/link";

function Body() {
	const [errorData, setErrorData] = useState();

	useEffect(() => {
		const APIurl = `${process.env.NEXT_PUBLIC_API_URL}/api/not-found-error?populate=*`;

		fetch(`${APIurl}`)
			.then((res) => res.json())
			.then((data) => setErrorData(data))
			.catch((error) => console.log(error));
	});
	return (
		<div>
			<main class={`${styles.container}`}>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>4</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<span class={`${styles.particle}`}>0</span>
				<article class={`${styles.content}`}>
					<p>{errorData?.data?.attributes.title_first_line}</p>
					<p dangerouslySetInnerHTML={{ __html: errorData?.data?.attributes.title_second_line }} />

					<p>
						<Link href={`${errorData?.data?.attributes.cta_slug}`}>{errorData?.data?.attributes.cta}</Link>
					</p>
				</article>
			</main>
		</div>
	);
}

export default Body;
