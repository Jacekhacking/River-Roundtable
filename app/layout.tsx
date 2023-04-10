import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
export const metadata = {
  title: 'River Round Table',
  description: 'A place to share experiences!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-300 h-screen w-screen text-white bg-no-repeat bg-cover ">
        <div className=" hidden bg-white/10 backdrop-blur-sm md:flex flex-col items-center justify-between border-r-2 border-zinc-500 w-12 h-screen fixed left-0 ">
          <div>
            <ul className="flex flex-col">
              <Link href={'/'}>Home</Link>
              <Link href={'/login'}>Login</Link>
            </ul>
          </div>

          <div className="bg-zinc-950 h-10 w-10 flex items-center justify-center rounded-full text-zinc-200 m-2 ">
            User
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
