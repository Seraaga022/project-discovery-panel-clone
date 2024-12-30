import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Pages/Layout";
import Dashboard from "../components/Pages/Dashboard";
import Scans from "../components/Pages/Scans";
import Templates from "../components/Pages/Templates";
import Assets from "../components/Pages/Assets";
import Technologies from "../components/Assets/AssetsTabs/Technologies";
import Overview from "../components/Assets/AssetsTabs/Overview";
import Inventory from "../components/Assets/AssetsTabs/Inventory";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "assets",
        element: <Assets />,
        children: [
          { index: true, element: <Overview /> },
          { path: "inventory", element: <Inventory /> },
          { path: "technologies", element: <Technologies /> },
        ],
      },
      { path: "scans", element: <Scans /> },
      { path: "templates", element: <Templates /> },
    ],
  },
]);
