import React from "react";
import GlobalSectionStarter from "../GlobalSectionStarter";
import GalleryItem from "./GalleryItem";
// import img1 from "../../../../public/profile/gallery/hamid1.jpg";
import img2 from "../../../../public/profile/gallery/hamid2.jpg";
import img3 from "../../../../public/profile/gallery/hamid3.jpg";
import img4 from "../../../../public/profile/gallery/hamid4.jpg";
import img5 from "../../../../public/profile/gallery/hamid5.jpg";
import img6 from "../../../../public/profile/gallery/hamid6.jpg";
import img1 from "../../../../public/hero/heroImage.jpg";

async function getGalleryData() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile?populate[0]=gallery.section_head&populate[1]=gallery.images`, {
		next: { revalidate: 10 },
	});

	const galleryData = await res.json();
	return galleryData;
}

async function GallerySection() {
	const galleryData = await getGalleryData();
	return (
		<div>
			<div id="gallery" className="g__body-container ">
				<GlobalSectionStarter data={galleryData?.data.attributes.gallery.section_head} />
				<GalleryItem data={galleryData?.data.attributes.gallery.images.data} />
			</div>
		</div>
	);
}

export default GallerySection;
