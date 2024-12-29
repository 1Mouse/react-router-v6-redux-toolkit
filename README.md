# Redux toolkit/ rtk query + react-router v6 demo

## Deployed at [Vercel](https://react-router-v6-redux-toolkit.vercel.app/)
## Usage
> development
> ```
> pnpm install
> pnpm dev
> ```
> build
> ```
> pnpm build
> ```
> preview production build
> ```
> pnpm preview
> ```

## Technologies used:
- Vite
- React-router v6
- Redux toolkit, RTK query
- TailwindCss: to increase development speed
- Class-variance-authority, tailwind merge, clsx and other plugins to sort classes and make tailwind as clean as possible.
- eslint and prettier
- Typescript
- Radix UI: for headless component with premade A11ty
- zod: to validate api response.
- pnpm

## Env
please create a `.env` file containing
> VITE_API_URL="https://jsonplaceholder.typicode.com/"

and for production use the same but name it `.env.production`

## Features:
- Showing posts with searching and filtering.
- Sorting by post title
- Pagination with a go to certain page to enhance user experience.
- Loading spinners, handle errors and empty state.
- Post details page
