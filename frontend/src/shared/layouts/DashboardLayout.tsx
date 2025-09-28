import { Outlet } from "react-router-dom";
import { SidebarApp } from "../components/Sidebar";
import { NavbarApp } from "../components/Navbar";
import { useState } from "react";

export const DashboardLayout = () => {

  const [isOpen, setIsOpen] = useState(false)

  const openNavbar = () => {
    setIsOpen(true)
  }

  const closeNavbar = () => {
    setIsOpen(false)
  }

  return (
    <div className="flex h-screen max-w-screen">
      <SidebarApp isOpen={isOpen} closeNavbar={closeNavbar} />

      {/* Main */}
      <div className="flex-1 flex flex-col max-w-full overflow-x-hidden">
        <NavbarApp openNavbar={openNavbar} />

        <main className="p-6 gap-6 max-w-full max-h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}