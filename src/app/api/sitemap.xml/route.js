import { NextResponse } from 'next/server';

export async function GET() {

    const blog = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?fields=slug&fields=updatedAt`);
	const blogData = await blog.json();
    

    const newsfeedData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news-feeds?populate=*`);
    const newsFeeds = await newsfeedData.json();

    const sortedData = newsFeeds.data.reduce((accumulator, currentValue) => {
        if (typeof currentValue.id === "number") {
            const index = accumulator.findIndex(item => item.id >= currentValue.id);
            if (index === -1) {
                accumulator.push(currentValue);
            } else {
                accumulator.splice(index, 0, currentValue);
            }
        }
        return accumulator;
    }, []);

    const xml = generateSitemap(sortedData,blogData);

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}

const handleSlug = (title, date) => {
    // const titleToSlug = title.toLowerCase().replace(/ /g, "-");
    const createdAtDate = new Date(date);
    const year = createdAtDate.getFullYear();
    const month = createdAtDate.getMonth() + 1;
    const formattedDate = `/${year}/${month < 10 ? "0" + month : month}`;

    return `${formattedDate}/${title}`;
};

function generateSitemap(sortedData,blogData) {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://hamiduzjaman.com/</loc>
            <lastmod>2024-04-01</lastmod>
        </url>
        <url>
            <loc>https://hamiduzjaman.com/profile</loc>
            <lastmod>2024-04-01</lastmod>
        </url>
        <url>
            <loc>https://hamiduzjaman.com/contact</loc>
            <lastmod>2024-04-01</lastmod>
        </url>
        <url>
            <loc>https://hamiduzjaman.com/schedule-call</loc>
            <lastmod>2024-04-01</lastmod>
        </url>
        ${blogData?.data.map((item, index) => `
            <url>
                <loc>https://hamiduzjaman.com/blog/${item.attributes.slug}</loc>
                <lastmod>${new Date(item.attributes.updatedAt).toISOString().slice(0, 10)}</lastmod>
            </url>
        `).join('')}
        ${sortedData.map((d, index) => `
            <url>
                <loc>https://hamiduzjaman.com${handleSlug(d.attributes.slug,d.attributes.createdAt)}</loc>
                <lastmod>${new Date(d.attributes.updatedAt).toISOString().slice(0, 10)}</lastmod>
            </url>
        `).join('')}
        <url>
           <loc>https://hamiduzjaman.com/privacy-policy</loc>
           <lastmod>2024-04-01</lastmod>
        </url>
        <url>
            <loc>https://hamiduzjaman.com/terms-of-service</loc>
            <lastmod>2024-04-01</lastmod>
        </url>
       
    </urlset>`;
}