import App from "@/App";
import About from "@/pages/About";
import Home from "@/pages/home";
import AboutUsSection from "@/pages/home/AboutUsSection";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/aboutus",
        element: <AboutUsSection />,
      },
    ],
  },
]);

export default router;
