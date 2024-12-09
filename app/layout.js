import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Fetch Posts",
  description: "Fetching posts from the JsonPlaceholder API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="mb-5 flex gap-[4rem] bg-teal-500 items-center justify-center text-3xl">
          <Link href={`/`}>
            <button>Home</button>
          </Link>
          <Link href={`/posts`}>
            <button>Posts</button>
          </Link>
          <Link href={`/articles`}>
            <button>Articles</button>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
