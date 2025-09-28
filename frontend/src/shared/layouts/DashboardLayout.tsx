import { Outlet } from "react-router-dom";
import { SidebarApp } from "../components/Sidebar";
import { NavbarApp } from "../components/Navbar";

export const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <SidebarApp />

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <NavbarApp />

        <main className="p-6 gap-6 max-w-full max-h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}