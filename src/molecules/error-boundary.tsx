import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export function ErrorBoundary() {
  const error = useRouteError();
  console.error("error in error boundary", error);

  if (isRouteErrorResponse(error)) {
    if (error.status === 404)
      return (
        <div className='h-[80dvh] pt-64 text-center text-lg'>
          404 - Page not found
        </div>
      );
    return (
      <div className='h-[80dvh] pt-64 text-center text-lg'>
        Something went wrong while retrieving page
      </div>
    );
  }
}
