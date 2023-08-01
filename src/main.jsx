import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Parents from "./pages/ParentsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/otter-replica",
    element: <App />,
  },
  {
    path: "/otter-replica/parents",
    element: <Parents />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
