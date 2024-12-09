import Link from "next/link";
import React from "react";

export default function Post(params) {
  return (
    <div className="mb-5 text-black bg-white w-[70%] rounded-[10px] p-5">
      <p>ID: {params.id}</p>
      <p>UserId: {params.userId}</p>
      <p>Title: {params.title}</p>
      <p className="text-red-500">Body: {params.body}</p>
      {params.isReview && <Link href={`posts/${params.id}`}>Post review</Link>}
    </div>
  );
}
