import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";
import { TechStack } from "@/components/TechStack";
import type { Blog } from "@/types/blog";


export const metadata: Metadata = {
  title: "Blogs | Nathan Hernandez",
  description:
    "Nathan Hernandez is a Full Stack developer and Software Engineer.",
};

export default async function Blog() {
  const blogs: Blog[] = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 w-full">
      <div className="text-center mb-10">
        <span className="text-5xl block mb-4">📝</span>
      </div>
      
      <TechStack />

      <Blogs blogs={data} />
    </div>
  );
}