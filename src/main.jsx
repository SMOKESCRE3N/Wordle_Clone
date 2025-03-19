import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  RouterProvider,
  //createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Home from "./components/Home/Home.jsx";
import Intro from "./components/Intro/Intro.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "play",
        element: <Home />,
      },
      {
        path: "",
        element: <Intro />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
