import App from "@/App";
import About from "@/pages/About";
import Home from "@/pages/home";
import ServicesSection from "@/pages/home/ServicesSection";

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
        path: "/service",
        element: <ServicesSection />,
      },
    ],
  },
]);

export default router;
