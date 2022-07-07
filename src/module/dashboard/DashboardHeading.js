import React from "react";

const DashboardHeading = ({ title = "", desc = "" }) => {
  return (
    <div className="mb-10">
      <h1 className="font-bold text-[36px] text-primary tracking-[1px]">
        {title}
      </h1>
      <p className="dashboard-short-desc">{desc}</p>
    </div>
  );
};

export default DashboardHeading;
