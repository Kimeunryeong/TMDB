import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Banana from "./router/Banana";
import TV from "./router/TV";
import NotFound from "./router/NotFound";
import Detail from "./router/Detail";

import Search from "./router/Search";
import Chakra from "./router/Chakra";
import Muitest from "./router/Muitest";

const router = createBrowserRouter([
  {path: "",element: <Outlet />,
    errorElement: <NotFound />,
    children: [{ path: "/", element: <App /> }],
  },
  {
    path: "/banana",
    element: <Banana />,
  },
  {
    path: "/tv",
    element: <TV />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  { path: "/search/", element: <Search /> },
  { path: "/chakra", element: <Chakra /> },
  { path: "/mui", element: <Muitest /> },
]);

export default router;
