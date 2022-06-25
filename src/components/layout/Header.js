import { Button } from "components/button";
import { useAuth } from "contexts/auth-context";
import React from "react";
import { NavLink } from "react-router-dom";

const headerItem = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/blog",
    title: "Blog",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

function getLastName(name) {
  if (!name) return " ";
  const length = name.split(" ").length;
  return name.split(" ")[length - 1];
}

const Header = () => {
  const { userInfo } = useAuth();
  return (
    <div className="container">
      <div className="flex items-center py-10">
        <NavLink to="/">
          <img srcSet="/logo.png 2x" alt="" className="block max-w-[40px]" />
        </NavLink>
        <ul className="flex items-center gap-10 ml-6">
          {headerItem.map((item) => (
            <li key={item.title}>
              <NavLink to={item.url}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
        <div className="relative w-full max-w-[320px] border border-[#cfcfcf] rounded-lg px-4 py-4 ml-auto mr-5 flex items-center">
          <input
            type="text"
            className="flex-1 pr-[45px] placeholder:font-normal placeholder:text-[#999]"
            placeholder="Search posts..."
          />
          <span className="absolute top-1/2 right-[25px] -translate-y-1/2">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="7.66669"
                cy="7.05161"
                rx="6.66669"
                ry="6.05161"
                stroke="#999999"
                strokeWidth="1.5"
              />
              <path
                d="M17.0001 15.5237L15.2223 13.9099L14.3334 13.103L12.5557 11.4893"
                stroke="#999999"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M11.6665 12.2964C12.9671 12.1544 13.3706 11.8067 13.4443 10.6826"
                stroke="#999999"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
        {!userInfo ? (
          <Button
            to="/sign-up"
            className="bg-primary-gradient text-white py-4 px-4 h-[58px] rounded-lg"
          >
            Sign up
          </Button>
        ) : (
          <div>
            <span>Welcome back, </span>
            <strong className="text-primary">
              {getLastName(userInfo?.displayName)}
            </strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
