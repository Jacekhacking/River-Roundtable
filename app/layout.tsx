import './globals.css';

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
      <body className="bg-gray-300 text-black">{children}</body>
    </html>
  );
}
