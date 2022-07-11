import { useAuth } from "contexts/auth-context";
import PageNotFound from "pages/PageNotFound";
import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  const { userInfo } = useAuth();
  if (!userInfo) return <PageNotFound></PageNotFound>;
  return (
    <div className="max-w-[1600px] mx-auto">
      <DashboardHeader></DashboardHeader>
      <div className="dashboard-main">
        <Sidebar></Sidebar>
        <div className="dashboard-children">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
