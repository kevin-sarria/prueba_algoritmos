import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "../modules/auth/pages/LoginPage";
import { AuthLayout } from "../shared/layouts/AuthLayout";
import { RegisterPage } from "../modules/auth/pages/RegisterPage";
import { ForgotPasswordPage } from "../modules/auth/pages/ForgotPasswordPage";
import { DashboardLayout } from "../shared/layouts/DashboardLayout";
import { DashboardPage } from "../modules/dashboard/pages/DashboardPage";
import { useAppSelector } from "../core/state/hooks";
import { useAuthInitializer } from "../modules/auth/hooks/use-auth-initializer";
import { Loader } from "../shared/Loader";

export const AppRouter = () => {
  useAuthInitializer()
  const { isAuthenticated, isLoading } = useAppSelector(state => state.app);

  if( isLoading ) return <Loader />

  const router = createBrowserRouter([
    {
      path: '/',
      element: isAuthenticated ? <DashboardLayout /> : <AuthLayout />,
      children: isAuthenticated
        ? [{ index: true, element: <DashboardPage /> }]
        : [
            { index: true, element: <LoginPage /> },
            { path: 'register', element: <RegisterPage /> },
            { path: 'forgot-password', element: <ForgotPasswordPage /> },
          ],
    },
  ]);

  return <RouterProvider router={router} />;
};
