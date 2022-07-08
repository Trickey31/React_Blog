import React from "react";

const DashboardHeading = ({ title = "", desc = "", children }) => {
  return (
    <div className="mb-10 flex items-center justify-between">
      <div>
        <h1 className="font-bold text-[36px] text-primary tracking-[1px]">
          {title}
        </h1>
        <p className="dashboard-short-desc">{desc}</p>
      </div>
      {children}
    </div>
  );
};

export default DashboardHeading;
