import Link from "next/link";
import PostDetails from "@/app/components/PostDetails";
import { Suspense } from "react";

export default async function Post(props) {
  const routeId = await props.params.postId  
  const loadinJSX = <div>Loadin...</div>;

  return (
    <div className="flex justify-center items-center flex-col">
      <h1>Post Details</h1>

      <Suspense fallback={loadinJSX}>
        <PostDetails routeId={routeId} />
      </Suspense>

      <Link href={`/posts`}>
        <button>Take me to Posts Page</button>
      </Link>
    </div>
  );
}
