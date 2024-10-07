import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Dashboard from "../pages/Dashboard";
import Scans from "../pages/Scans";
import Templates from "../pages/Templates";
import Assets from "../pages/Assets";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "assets", element: <Assets /> },
      { path: "scans", element: <Scans /> },
      { path: "templates", element: <Templates /> },
    ],
  },
]);
