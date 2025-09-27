import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../modules/auth/pages/LoginPage";
import { AuthLayout } from "../shared/layouts/AuthLayout";
import { RegisterPage } from "../modules/auth/pages/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    //   { path: "courses", element: <CoursesListPage /> },
    //   { path: "courses/:id", element: <CourseDetailPage /> },
    ],
  },
]);
