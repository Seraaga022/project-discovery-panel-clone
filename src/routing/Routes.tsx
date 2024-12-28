import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/pages/Layout";
import Dashboard from "../components/pages/Dashboard";
import Scans from "../components/pages/Scans";
import Templates from "../components/pages/Templates";
import Assets from "../components/pages/Assets";
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
