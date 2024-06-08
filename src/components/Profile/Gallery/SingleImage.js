import Image from "next/image";
import React from "react";

function SingleImage({ image, id }) {
	return (
		<div className={`${image?.width > image?.height ? "col-span-2" : ""}`} key={id}>
			<div className="group h-[323px] w-[100%] bg-[#E9EBEF] overflow-hidden relative ">
				<Image
					src={image?.url}
					height={image?.height}
					width={image?.width}
					quality={100}
					alt={image?.alternativeText}
					// fill
					// sizes="100vw"
					className="h-full object-cover transition-opacity opacity-0 duration-[2s] "
					onLoadingComplete={(image)=> image.classList.remove("opacity-0")}
				/>
				<div className="w-full h-[60px] px-2.5 py-1 bg-gradient-to-t from-[#000000b4] from-10% to-transparent to-90% text-white absolute bottom-0 flex justify-center items-center text-center text-[13px] sm:translate-y-[100px] sm:group-hover:translate-y-0 duration-500">
					{image?.caption}
				</div>
			</div>
		</div>
	);
}

export default SingleImage;
