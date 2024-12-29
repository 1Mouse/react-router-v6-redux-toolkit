import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "@/services/posts/posts.schema";
import { NavLink } from "react-router-dom";

export type PostCardProps = {
  postData: Post;
};

export function PostCard({ postData }: PostCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <NavLink
            to={`/post-details/${postData.id}`}
            className='hover:underline'
          >
            {postData.title}
          </NavLink>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className='line-clamp-2'>{postData.body}</p>
      </CardContent>
    </Card>
  );
}
