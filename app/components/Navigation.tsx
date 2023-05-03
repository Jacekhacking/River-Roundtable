import Link from 'next/link';
import Image from 'next/image';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import Logout from './Logout';
import Login from './Login';

export default async function Navigation() {
  const session = await getServerSession(authOptions);
  return (
    <>
      {session?.user && (
        <div className=" hidden text-zinc-900 bg-white/10 backdrop-blur-sm md:flex flex-col items-center justify-between border-r-2 border-zinc-500 w-20 h-screen fixed left-0 ">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-zinc-950 h-10 w-10 flex items-center justify-center relative rounded-full text-zinc-200 m-2 ">
              <Image
                src={session?.user?.image || ''}
                alt="google picture"
                width={64}
                height={64}
                className="w-14 rounded-full"
              />
            </div>
            <Link href={'/'} className=" py-2 text-xl">
              Home
            </Link>
            <Link href={'/posts'} className=" py-2 text-xl">
              Posts
            </Link>
            <Link href={'/create-post'} className=" py-2 text-xl">
              Create
            </Link>
          </div>

          <Logout />
        </div>
      )}

      {!session?.user && (
        <div className=" hidden text-zinc-900 bg-white/10 backdrop-blur-sm md:flex flex-col items-center justify-between border-r-2 border-zinc-500 w-20 h-screen fixed left-0 ">
          <Link href={'/'} className="py-4">
            Home
          </Link>
          <Login />
        </div>
      )}
    </>
  );
}
