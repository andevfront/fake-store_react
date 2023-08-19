import { createBrowserRouter } from "react-router-dom";
import { App } from "../layout";
import { HomePage } from "../containers";
import { LoginPage } from "../auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
