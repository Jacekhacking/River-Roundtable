async function getPosts() {
  const res = await fetch('http://localhost:3000/api/posts');
  const data = await res.json();
  return data.posts;
}

export default async function PostPage() {
  const data = await getPosts();

  return (
    <div>
      {data?.map((post: any) => (
        <div
          key={post.id}
          className=" h-full w-full flex flex-col items-center p-10 text-zinc-800"
        >
          <h2 className="text-black">{post.title}</h2>
          <p>{post?.content}</p>
        </div>
      ))}
    </div>
  );
}
