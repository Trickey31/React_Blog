import { Button } from "components/button";
import React from "react";

const HomeBanner = () => {
  return (
    <div className="min-h-[520px] bg-primary-gradient px-10">
      <div className="container">
        <div className="flex items-center justify-between py-14">
          <div className="text-white">
            <h1 className="text-[48px] font-bold mb-7 leading-none">
              Monkey Blogging
            </h1>
            <p className="max-w-[420px] text-sm font-normal mb-12 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi.
            </p>
            <Button
              to="/sign-up"
              className="text-primary font-semibold bg-white px-16 py-4 rounded-lg"
            >
              Get Started
            </Button>
          </div>
          <div>
            <img srcSet="/banner.png 2x" alt="banner-blogging" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
