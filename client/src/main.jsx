import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import Pomodoro from "./pages/Pomodoro.jsx";
import Settings from "./pages/settings.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Pomodoro />, errorElement: <Error /> },
      { path: "settings", element: <Settings />, errorElement: <Error /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // removed strict to prevent useeffect tfrom firing twice
  <RouterProvider router={router} />
);
