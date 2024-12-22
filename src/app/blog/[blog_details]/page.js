import React from "react";
import styles from "../../style/blogdetails.module.css";
import Image from "next/image";
import SocialShare from "@/components/Blog/BlogDetails/SocialShare";
import linkCopy from "@/../../public/blog/link.svg";
import MoreBlog from "@/components/Blog/BlogDetails/MoreBlog";
import Hero from "@/components/Blog/BlogDetails/Hero";

export const revalidate = 20;

export async function generateStaticParams() {
	let blogsData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?fields=slug`);

	let blogs = await blogsData.json();
	console.log(blogs);

	return blogs?.data?.map((blog) => ({
		blog_details: blog?.attributes?.slug,
	}));
}

async function getDataFatch(slug) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${slug}`);
	const blog = await res.json();

	return blog;
}

async function page({ params: { blog_details } }) {
	const blogData = await getDataFatch(blog_details);

	return (
		<div className="bg-white">
		    <Hero blogData={blogData} />
			<div className={styles.blog_details}>
				<div className="relative max-w-[700px] lg:max-w-[800px] mx-auto lg:flex -mt-[200px] ">
					<SocialShare blog_details={blog_details} />

					<div className="col-start-2 col-span-full pb-12 px-[10px] max-w-[700px] mx-auto list-inside ">
						{blogData && (
							<div className="">
								{blogData.data.attributes.cover_image.data && (
									<Image
										src={`${blogData.data.attributes.cover_image.data ? blogData.data.attributes.cover_image.data.attributes.url : "/"}`}
										height={350}
										width={690}
										className="w-[100%] max-h-[350px]  relative z-20  object-cover shadow-[0px_0px_3px_0px_rgb(0,0,0,0.1)] rounded-t-lg "
										alt={blogData.data.attributes.cover_image.data ? blogData.data.attributes.cover_image.data.attributes.alternativeText : ""}
									/>
								)}
							</div>
						)}
						{blogData !== undefined && (
							<div className="blog_body mt-12 text-[18px] leading-[1.8]" dangerouslySetInnerHTML={{ __html: blogData.data.attributes.description }} />
						)}
					</div>
				</div>
			</div>
			<div className="max-w-[580px] mx-8 md:mx-auto h-[1px] bg-[#633abdbd] mb-12 "></div>

            <MoreBlog blog_details={blog_details} />

			
		</div>
	);
}

export default page;
