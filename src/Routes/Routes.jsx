import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main/Main";
import Popular from "../Pages/Home/Popular/Popular";
import SinglePage from "../Pages/SinglePage/SinglePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "popular",
        element: <Popular></Popular>,
      },
      {
        path: "/singleMovie/:id",
        element: <SinglePage></SinglePage>,
        loader: ({params}) => fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=65bcfb33d2eb703f7bb3511a48700d6f&language=en-US`)
      },
    ],
  },
]);

export default routes;
