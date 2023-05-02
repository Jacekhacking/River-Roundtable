import Image from 'next/image';
import Login from './components/Login';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../pages/api/auth/[...nextauth]';

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <div className=" h-full w-full flex flex-col items-center p-10 text-zinc-800">
        <h1 className=" text-center text-3xl  bg-emerald-700/40 h-20 flex items-center px-4  py-4 rounded-md ">
          {!session?.user && ` Welcome to River Round Table`}
          {session?.user &&
            ` Welcome to River Round Table ${session?.user?.name}`}
        </h1>
        <div className=" flex items-center justify-center text-center overflow-hidden z-0">
          {session?.user && <div> logged in!</div>}
        </div>
      </div>
    </>
  );
}
