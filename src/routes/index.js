import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home.js";
import ExplorePage from "../pages/ExplorePage.js";
import DetailPage from "../pages/DetailPage.js";
import SearchPage from "../pages/SearchPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":explore",
        element: <ExplorePage />,
      },
      {
        path: "explore/:id",
        element: <DetailPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
]);
export default router;
