import { Button } from "components/button";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React from "react";
import UserTable from "./UserTable";

const UserManage = () => {
  const handleLoadMoreUser = () => {};
  return (
    <div>
      <DashboardHeading title="Users" desc="Manage your user">
        {/* <Button
          type="button"
          to="/manage/add-category"
          className="h-[60px] mx-auto px-[25px] flex items-center justify-center text-base text-white bg-primary-gradient rounded-lg font-semibold"
        >
          Create category
        </Button> */}
      </DashboardHeading>
      <div className="flex justify-end mb-10">
        <input
          type="text"
          placeholder="Search user..."
          className="py-4 px-6 border border-gray-300 outline-none rounded-lg"
          // onChange={handleInputFilter}
        />
      </div>
      <UserTable></UserTable>

      <div className="mt-10">
        <Button onClick={handleLoadMoreUser} className="max-w-[150px]">
          Load more
        </Button>
      </div>
    </div>
  );
};

export default UserManage;
