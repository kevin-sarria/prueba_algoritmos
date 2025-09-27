import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
}