import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Banana from "./router/Banana";
import Grape from "./router/Grape";
import NotFound from "./router/NotFound";
import MovieDetail from "./router/MovieDetail";
import Detail from "./router/Detail";


const router = createBrowserRouter([
  {
    path: "",
    element: <Outlet/>,
    errorElement: <NotFound />,
    children: [
      {path: "/", element: <App />},
    ]
  },
  {
    path: "/banana",
    element: <Banana />,
  },
  {
    path: "/grape",
    element: <Grape />,
  },
  {
    path: "/moviedetail",
    element: <MovieDetail />
  },
  {
    path:"/detail/:id",
    element: <Detail />
  }

]);

export default router;
