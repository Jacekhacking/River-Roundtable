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
        <Navigation />
        {children}
      </body>
    </html>
  );
}
