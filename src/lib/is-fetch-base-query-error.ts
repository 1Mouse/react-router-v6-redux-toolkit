import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export function isFetchBaseQueryError(
  error: FetchBaseQueryError | SerializedError
): error is FetchBaseQueryError {
  return "status" in error;
}
