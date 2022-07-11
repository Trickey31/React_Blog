import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center flex-col bg-black text-white">
      <div className="max-w-[1000px] mx-auto text-center">
        <img
          src="/404.png"
          alt="notfound"
          className="max-w-[250px] mx-auto mb-10"
        />
        <h1 className="text-[60px] font-bold mb-5">
          404 - Looks like you're lost.
        </h1>
        <p className="max-w-[800px] mx-auto mb-10">
          Maybe this page used to exist or you just spelled something wrong.
          Chances are your spelled something wrong, so can you double check the
          URL?
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-block px-[30px] py-[15px] text-white bg-secondary-gradient rounded-lg font-medium"
        >
          Go home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
