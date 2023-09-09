import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./scss/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/custom-style.css";

import App from "./App";
import ScrollToTop from "./components/common/ScrollToTop";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
      {/* <ReactQueryDevtools /> */}
    </BrowserRouter>
  </QueryClientProvider>
);
