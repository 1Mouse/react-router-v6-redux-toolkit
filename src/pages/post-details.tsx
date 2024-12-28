import { useParams } from "react-router-dom";

export function PostDetails() {
  const { id } = useParams();
  return <div>Post Details : {id}</div>;
}
