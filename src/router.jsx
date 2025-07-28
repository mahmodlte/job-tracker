import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import App from "./App";
import JobAdd from "./pages/JobAdd";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "add",
        element: <JobAdd />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;
