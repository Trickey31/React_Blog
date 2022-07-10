import { Button } from "components/button";
import PostImage from "module/post/PostImage";
import React from "react";
import { NavLink } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <div className="bg-white p-5 border-b border-[#eee] flex justify-between gap-5">
      <NavLink to="/" className="flex items-center gap-5 text-lg font-semibold">
        <img
          srcSet="/logo.png 2x"
          alt="monkey-blogging"
          className="max-w-[40px]"
        />
        <span className="hidden lg:inline-block">Monkey Blogging</span>
      </NavLink>
      <div className="flex items-center gap-5">
        <Button
          to="/dashboard"
          className="cursor-pointer px-[25px] rounded-lg font-semibold text-base leading-none flex justify-center items-center bg-greenGradient text-white h-[52px]"
        >
          Write new post
        </Button>
        <PostImage
          url="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
          className="w-[52px] h-[52px]"
        ></PostImage>
      </div>
    </div>
  );
};

export default DashboardHeader;
