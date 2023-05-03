import CreatePostForm from './CreatePostForm';
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
export default async function CreatePostPage() {
  const formSubmitHandler = () => {};
  const session = await getServerSession(authOptions)
  return <CreatePostForm session={session} />;
}
