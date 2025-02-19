import { useRouter } from "next/router";
import SectionContainer from "@/components/utils/SectionContainer";
import TitleSectionPageContainer from "@/components/utils/TitleSectionPageContainer";

// Define the blog post type
interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding TypeScript for React",
    content: "TypeScript adds static typing to JavaScript, improving maintainability...",
    date: "February 18, 2025",
  },
  {
    id: 2,
    title: "Getting Started with Next.js 14",
    content: "Next.js is a powerful framework for building React applications...",
    date: "January 10, 2025",
  },
];

const BlogPostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) return <p className="text-center text-gray-400">Post not found</p>;

  return (
    <SectionContainer>
      <div className="w-full flex flex-col items-center gap-6 min-h-screen">
        <TitleSectionPageContainer title={post.title} />
        <p className="text-gray-500">{post.date}</p>
        <p className="max-w-3xl text-gray-300">{post.content}</p>
      </div>
    </SectionContainer>
  );
};

export default BlogPostPage;
