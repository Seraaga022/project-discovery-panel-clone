import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/pages/Layout";
import Dashboard from "../components/pages/Dashboard";
import Scans from "../components/pages/Scans";
import Templates from "../components/pages/Templates";
import Assets from "../components/pages/Assets";
import Technologies from "../components/Assets/AssetsTabs/Technologies";
import AssetGroups from "../components/Assets/AssetsTabs/AssetGroups";
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
          { index: true, element: <AssetGroups /> },
          { path: "inventory", element: <Inventory /> },
          { path: "technologies", element: <Technologies /> },
        ],
      },
      { path: "scans", element: <Scans /> },
      { path: "templates", element: <Templates /> },
    ],
  },
]);
