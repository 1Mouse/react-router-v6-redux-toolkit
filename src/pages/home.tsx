import { Loading } from "@/components/ui/loading";
import { PostsContainer } from "@/molecules/posts-container";
import { SearchBar } from "@/molecules/search-bar";
import {
  selectPaginatedPosts,
  useGetPostsQuery,
} from "@/services/posts/posts-slice";
import { useState } from "react";
import { useSelector } from "react-redux";

export function Home() {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [sortingMode, setSortingMode] = useState<"asc" | "desc">();
  const { isLoading, isError } = useGetPostsQuery();

  // Get paginated and filtered posts with sorting if applied
  const { paginatedPosts, meta } = useSelector(
    selectPaginatedPosts({
      searchTerm: keyword,
      page,
      sortingMode,
    })
  );

  const getPostsContent = () => {
    if (isLoading) {
      return <Loading className='h-96' />;
    }
    if (isError) {
      return <div>Something went wrong while retrieving posts...</div>;
    }

    if (paginatedPosts)
      return (
        <PostsContainer
          postsData={paginatedPosts}
          meta={meta}
          setPage={setPage}
          sortingMode={sortingMode}
          setSortingMode={setSortingMode}
        />
      );
  };

  console.log("paginatedPosts", paginatedPosts);
  return (
    <div className='container mx-auto min-h-[100dvh] p-4' id='page-container'>
      <h2 className='mx-auto mb-5 mt-4 text-center text-2xl font-bold'>
        JSON Placeholder react-router-v6-redux-toolkit demo
      </h2>
      <SearchBar setKeyword={setKeyword} setPage={setPage} />
      <div className='mb-10 mt-8'>{getPostsContent()}</div>
    </div>
  );
}
