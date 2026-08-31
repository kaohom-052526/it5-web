import BlogCard from "@/components/BlogCard";

export default function Home() {
  return (
    <div >
      <BlogCard blog={{
        _id: "",
        title: undefined,
        slug: undefined,
        content: undefined,
        createdAt: undefined
      }}/>

    </div>
  );
}
