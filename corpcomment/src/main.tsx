import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import TanstackProvider from "./hooks/TanstackProvider.tsx";
import "./index.css";
import store from "./store/store.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <TanstackProvider>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </TanstackProvider>
    </Provider>
  </StrictMode>
);
