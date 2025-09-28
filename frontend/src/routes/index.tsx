import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../modules/auth/pages/LoginPage";
import { AuthLayout } from "../shared/layouts/AuthLayout";
import { RegisterPage } from "../modules/auth/pages/RegisterPage";
import { ForgotPasswordPage } from "../modules/auth/pages/ForgotPasswordPage";
import { DashboardLayout } from "../shared/layouts/DashboardLayout";
import { DashboardPage } from "../modules/dashboard/pages/DashboardPage";

const auth = true

export const router = createBrowserRouter([
  {
    path: "/",
    element: auth ? <DashboardLayout /> : <AuthLayout />,
    children: auth ? [
      { index: true, element: <DashboardPage /> }
    ] : [
      { index: true, element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "forgot-password", element: <ForgotPasswordPage /> },
    ],
  },
]);
