import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { PostDetails } from "./pages/post-details";
import { ErrorBoundary } from "./molecules/error-boundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: "/post-details/:id",
    element: <PostDetails />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
