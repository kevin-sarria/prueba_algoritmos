import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <Outlet />
    </div>
  );
}