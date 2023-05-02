import './globals.css';
import Navigation from './components/Navigation';

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
      <body className="bg-zinc-100 h-screen w-screen text-white bg-no-repeat bg-cover ">
        {/* @ts-expect-error Server Component */}
        <Navigation />
        <div className="md:pl-20">{children}</div>
      </body>
    </html>
  );
}
