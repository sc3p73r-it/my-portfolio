import SectionContainer from "@/components/utils/SectionContainer";
import TitleSectionPageContainer from "@/components/utils/TitleSectionPageContainer";
import Link from "next/link";

// Define the blog post structure
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

// Sample blog posts
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding TypeScript for React",
    excerpt: "Learn how TypeScript enhances React development with strong typing...",
    date: "February 18, 2025",
  },
  {
    id: 2,
    title: "Getting Started with Next.js 14",
    excerpt: "A beginner-friendly guide to setting up and building applications using Next.js...",
    date: "January 10, 2025",
  },
];

const Blog = () => (
  <SectionContainer>
    <div className="w-full flex flex-col items-center gap-6 min-h-screen">
      <TitleSectionPageContainer title="Sc3p73R Blog" />
      <p className="text-base text-gray-400">Welcome to my blog! 🚀</p>

      <div className="w-full max-w-3xl flex flex-col gap-4">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            <h2 className="text-xl text-white font-bold">{post.title}</h2>
            <p className="text-gray-400 text-sm">{post.excerpt}</p>
            <span className="text-gray-500 text-xs">{post.date}</span>
          </Link>
        ))}
      </div>
    </div>
  </SectionContainer>
);

export default Blog;
