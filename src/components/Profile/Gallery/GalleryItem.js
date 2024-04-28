import Image from "next/image";
import React from "react";

function GalleryItem({ image }) {
	console.log(image);
	return (
		<div>
			<div className="h-[323px] w-[100%] bg-[#E9EBEF]">
				<Image src={image} height={300} width={500} alt="" className="h-full w-full object-cover object-top" />
			</div>
		</div>
	);
}

export default GalleryItem;
