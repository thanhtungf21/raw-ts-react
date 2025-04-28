import { RouteObject } from "react-router";
import {
  DefaultLayout,
  AuthLayout,
  DashboardLayout,
  LandingLayout,
} from "../layouts";
// import DefaultLayout from "../layouts/DefaultLayout";
// import AuthLayout from "../layouts/AuthLayout";
// import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/Home";
import Login from "../pages/auth/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import NotFound from "../pages/default/NotFound";
import ProtectedRoute from "./ProtectedRoute";

// For demonstration purposes - in a real app this would come from auth state
const isAuthenticated = true;

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/",
    element: <LandingLayout />,
    children: [{ path: "*", element: <NotFound /> }],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [{ path: "login", element: <Login /> }],
  },
  {
    path: "/",
    element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
    children: [
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [{ index: true, element: <Dashboard /> }],
      },
    ],
  },
];
