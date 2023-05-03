
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

 export async function getSinglePost(id){

     const res = await fetch(`http://localhost:3000/api/posts/${id}`,
         { method: "GET", headers: {"Content-Type": "application/json"},})
     return await res.json()

}
export default async function PostDetailComponent({post}){
    // const id = post?.postId
    const postDetail = await getSinglePost(post?.postId)
    return (
        <div className='flex items-center justify-center'>
            <div className='text-black text-center pt-32 flex flex-col prose lg:prose-xl'>
                <h2> {postDetail.title}</h2>
                <ReactMarkdown children={postDetail.content} remarkPlugins={[remarkGfm]}/>

            </div>
        </div>
    )
}