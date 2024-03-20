import React from "react";
import styles from "@/app/style/expertise.module.css";

import google3d from "../../../public/google.png";
import google2 from "../../../public/google2.png";
import Image from "next/image";

function ExpertiseCard({ title, image }) {
	return (
		<div className="mb-14">
			<div className={styles.card}>
				<div className="">
					<div className={styles.wrapper}>
						<Image className={styles.cover_image} src={image} />
						{/* <Image className={styles.character} src={google} /> */}
					</div>
				</div>
				<div className={styles.title}>
					<div className="px-2">
						<h3 className="">{title}</h3>
						<p className="pt-3 pb-3 ">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos illo omnis ut praesentium, nobis aliquam?Lorem ipsum, dolor sit
							amet consectetur adipisicing elit
						</p>
						<button className="border-[1px] border-[#383838] bg-transparent px-2 py-1 rounded-md mt-2 hover:bg-[#383838] hover:text-white">
							Learn More
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ExpertiseCard;
