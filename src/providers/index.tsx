import { ReduxProvider } from "./redux-provider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ReduxProvider>{children}</ReduxProvider>
    </>
  );
};
