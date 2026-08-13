import { useState } from "react";

import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-[#f7faf9]">
      <Sidebar
        sidebarOpen={sidebarOpen}
        closeSidebar={() =>
          setSidebarOpen(false)
        }
      />

      <div className="min-h-screen lg:pl-[270px]">
        <Topbar
          openSidebar={() =>
            setSidebarOpen(true)
          }
        />

        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout; 