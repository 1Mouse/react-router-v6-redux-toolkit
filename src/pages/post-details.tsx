import { PostDetailsCard } from "@/molecules/post-details-card";
import { useParams } from "react-router-dom";

export function PostDetails() {
  const { id } = useParams();

  return (
    <div className='container mx-auto min-h-[100dvh] p-4'>
      <h2 className='mx-auto mb-5 text-center text-2xl font-bold'>
        Post Details
      </h2>
      {id ? <PostDetailsCard postId={id} /> : null}
    </div>
  );
}
