import { validateSchema } from "@/lib/validate-schema";
import { apiSlice } from "../api/api-slice";
import { Post, postSchema, postsSchema } from "./posts.schema";
import { createSelector } from "@reduxjs/toolkit";
import { ITEMS_PER_PAGE } from "@/constants";

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
      transformResponse: response => {
        const validated = validateSchema(postsSchema, response);
        if (!validated) {
          // In development, throwing an error will trigger RTK Query's error handling
          // In production, this won't execute since validateSchema returns the original data
          throw new Error("Invalid API response schema at getPosts");
        }
        return validated;
      },
    }),
    getPostById: builder.query<Post, string>({
      query: id => `posts/${id}`,
      transformResponse: response => {
        const validated = validateSchema(postSchema, response);
        if (!validated) {
          throw new Error("Invalid API response schema at getPostById");
        }
        return validated;
      },
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApiSlice;

// Base selector to access the query cache
const selectGetPostsResult = postsApiSlice.endpoints.getPosts.select();

// Memoized selector for all posts
const selectAllPosts = createSelector(
  selectGetPostsResult,
  getPostsResult => getPostsResult?.data ?? [] // Return the fetched posts or an empty array
);

// Selector to filter posts by title
export const selectPostsByTitle = (
  searchTerm: string,
  sortingMode?: "asc" | "desc"
) =>
  createSelector(selectAllPosts, posts =>
    posts
      .filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortingMode === "asc") return a.title.localeCompare(b.title);
        else if (sortingMode === "desc") return b.title.localeCompare(a.title);
        else return 0;
      })
  );

export const selectPaginatedPosts = ({
  searchTerm,
  page,
  sortingMode,
  itemsPerPage = ITEMS_PER_PAGE,
}: {
  searchTerm: string;
  page: number;
  sortingMode?: "asc" | "desc";
  itemsPerPage?: number;
}) =>
  createSelector(selectPostsByTitle(searchTerm, sortingMode), filteredPosts => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    const total = filteredPosts.length;
    const from = (page - 1) * itemsPerPage;
    const to = from + paginatedPosts.length;
    const numberOfPages = Math.ceil(total / itemsPerPage);

    return {
      paginatedPosts,
      meta: {
        page,
        total,
        from,
        to,
        numberOfPages,
      },
    };
  });
