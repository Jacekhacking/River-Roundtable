import Link from "next/link";
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
          className=" h-full flex flex-col items-center  text-zinc-800 "
        >
          <div className=''>
            <Link className="text-black" href={`/posts/${post.id}`}>{post.title}</Link>
          </div>

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