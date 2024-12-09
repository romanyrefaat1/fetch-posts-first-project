import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/posts">
        <button>Take me to Posts Page</button>
      </Link>
    </div>
  );
}
