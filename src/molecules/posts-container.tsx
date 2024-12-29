import { Post } from "@/services/posts/posts.schema";
import { PostCard } from "./post-card";

import { Pagination } from "./pagination";
import { SortingDropdown } from "./SortingDropdown";

export type PostsContainerProps = {
  postsData: Post[];
  meta: {
    page: number;
    total: number;
    from: number;
    to: number;
    numberOfPages: number;
  };
  setPage: React.Dispatch<React.SetStateAction<number>>;
  sortingMode?: "asc" | "desc";
  setSortingMode: React.Dispatch<
    React.SetStateAction<"asc" | "desc" | undefined>
  >;
};

export function PostsContainer({
  postsData,
  meta,
  setPage,
  sortingMode,
  setSortingMode,
}: PostsContainerProps) {
  return (
    <>
      {postsData.length > 0 && (
        <div className='mb-4 flex justify-end pe-2'>
          {
            <SortingDropdown
              sortingMode={sortingMode}
              setSortingMode={setSortingMode}
            />
          }
        </div>
      )}
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
        {postsData.length === 0 ? (
          <div className='py-7 text-center text-lg'>No posts found</div>
        ) : null}
        {postsData.map(post => (
          <PostCard key={post.id} postData={post} />
        ))}
      </div>
      {postsData.length > 0 && <Pagination meta={meta} setPage={setPage} />}{" "}
    </>
  );
}
