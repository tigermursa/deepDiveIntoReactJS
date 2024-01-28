import App from "@/App";
import AdminLayout from "@/components/layouts/AdminLayout";
import About from "@/pages/About";
import AddService from "@/pages/admin/AddService";
import Dashboard from "@/pages/admin/Dashboard";
import ServiceList from "@/pages/admin/ServiceList";
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
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "admin/service-list",
        element: <ServiceList />,
      },
      {
        path: "admin/add-services",
        element: <AddService />,
      },
    ],
  },
]);

export default router;
