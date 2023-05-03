import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import {isHTTPMethod} from "next/dist/server/web/http";

async function getPosts() {
  const res = await fetch('http://localhost:3000/api/posts',{
    method: "GET",
    headers: {"Content-Type": "application/json"},
  });
  const data = await res.json();
  return data.posts;
}

export default async function PostPage() {
  const data = await getPosts();
    console.log(data)
  return (
    <div>
      {data?.map((post:PostsType) => (
        <div
          key={post.id}
          className=" h-full w-full flex flex-col items-center p-10 text-zinc-800 prose lg:prose-xl"
        >
          <h2 className="text-black">{post.title}</h2>
          <ReactMarkdown children={post.content} remarkPlugins={[remarkGfm]}/>
        </div>
      ))}
    </div>
  );
}

type PostsType = {
  id: string;
  title: string;
  content: string;
}