import Link from "next/link";
import Post from "../components/Post";

export default async function Posts() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    next: {
      revalidate: 60, // Update caced posts every 60 seconds
    },
  });

  const posts = await response.json();
  const postsJSX = posts.map((post, id) => (
    <>
      <Post {...post} key={id} isReview={true} />
    </>
  ));
  console.log(posts);
  return (
    <div>
      <Link href={`/articles`}>
        <button>Take me to Articles Page</button>
      </Link>
      <div className="flex justify-center items-center flex-col">
        {postsJSX}
      </div>
    </div>
  );
}
