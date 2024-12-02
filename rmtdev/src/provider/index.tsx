import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "../store/store";
import TanstackProvider from "./Tanstack.provider";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <Provider store={store}>
        <TanstackProvider>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster />
        </TanstackProvider>
      </Provider>
    </>
  );
}
