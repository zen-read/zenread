import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index.js";
import OriginPage from "./pages/OriginPage.js";
import PostPage from "./pages/PostPage.js";
import ReadList from "./pages/ReadList.js";
import { settingsOpenedStore } from "./store.js";
import "./styles.css";
import { checkConfig } from "./utils/checkConfig.js";

checkConfig();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/post",
    element: <PostPage />,
  },
  {
    path: "/origin",
    element: <OriginPage />,
  },
  {
    path: "/readlist",
    element: <ReadList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={settingsOpenedStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
