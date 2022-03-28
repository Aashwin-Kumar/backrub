import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/backrub.jpg'

import { Searcher } from "./Searcher";

export const Navbar = () => {
  return (
    <div className="p-5  pb-0 flex flex-wrap sm:justify-between  justify-center items-center border-b  border-gray-100 ">
      <div className="flex justify-between items-center space-x-5 w-screen ">
        <Link to="/">
          <div className="justify-center">
           <img src={logo} height={130} width={130} />
          </div>
        </Link>
      </div>
      <Searcher />
    </div>
  );
};
