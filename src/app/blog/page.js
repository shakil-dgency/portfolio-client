import Header from "@/components/Blog/Header";
import PinnedBlogCard from "@/components/Blog/PinnedBlogCard";
import React from "react";


async function getBlogs() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate=*`, {
		next: { revalidate: 10 },
	});
	const blogs = await res.json();
	const normalBlog = blogs?.data?.filter((post) => !post.attributes.pin_post);

	return { ...blogs, data: normalBlog };
}

async function page() {
	const blogPosts = await getBlogs();
	return (
		<div>
			<div className=" pb-48">
				{/* Render Pinned Posts */}
				<Header />

				<PinnedBlogCard blogPosts={blogPosts} />

				{/* {!blogPosts && (
					<div className="flex justify-center h-[600px]">
						<InfinitySpin width="200" color="#FF492C" />
					</div>
				)} */}
			</div>
		</div>
	);
}

export default page;
