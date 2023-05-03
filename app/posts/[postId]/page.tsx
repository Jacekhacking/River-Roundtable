import PostDetailComponent from "./PostDetailComponent";
export default  function PostDetailPage({params}: { params: { slug: string } }){
    return (
        <div>
            {/* @ts-expect-error Server Component */}
            <PostDetailComponent post={params} />
        </div>
    )
}