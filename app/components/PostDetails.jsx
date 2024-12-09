import Link from "next/link";
import React from "react";

export default async function PostDetails({routeId}) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${routeId}`,
        {
          next: {
            revalidate: 60,
          },
        }
      );
      const post = await response.json();
      console.log(post)
      const loadinJSX = <div>Loadin...</div>;
  return (
    <div className="mb-5 text-black bg-white w-[70%] rounded-[10px] p-5">
      <p>ID: {post.id}</p>
      <p>UserId: {post.userId}</p>
      <p>Title: {post.title}</p>
      <p className="text-red-500">Body: {post.body}</p>
      {post.isReview && <Link href={`posts/${post.id}`}>Post review</Link>}
    </div>
  );
}
