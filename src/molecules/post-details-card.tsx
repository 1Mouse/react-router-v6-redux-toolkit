import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loading } from "@/components/ui/loading";
import { isFetchBaseQueryError } from "@/lib/is-fetch-base-query-error";
import { useGetPostByIdQuery } from "@/services/posts/posts-slice";
import { NavLink } from "react-router-dom";

export type PostDetailsCardProps = {
  postId: string;
};

export function PostDetailsCard({ postId }: PostDetailsCardProps) {
  const {
    data: postData,
    isLoading,
    isError,
    error: postError,
  } = useGetPostByIdQuery(postId);

  if (isLoading) {
    return <Loading className='h-96' />;
  }
  if (isError) {
    if (isFetchBaseQueryError(postError) && postError.status === 404)
      return (
        <div className='h-[80dvh] pt-64 text-center text-lg'>
          404 - Page not found
        </div>
      );
    return <div>Something went wrong while retrieving post</div>;
  }

  if (!postData) return <div>Post not found</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{postData.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{postData.body}</p>
      </CardContent>

      <CardFooter className='flex flex-wrap items-center justify-between gap-4'>
        <p>posted by a user with id {postData.userId}</p>
        <NavLink to='/'>
          <Button variant='secondary'>Back to List</Button>
        </NavLink>
      </CardFooter>
    </Card>
  );
}
