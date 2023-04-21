import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" text-gray-500 flex fixed top-0 left-0 right-0 justify-between bg-blue-200  ">
      <img
        src="https://lh3.googleusercontent.com/gt9F2OBc-IXc2VywGSLUYjzQDvc7snS5mycu99Ixg_12RSEshA0sn5UPB5qtnCQW2gbeCaEw-CwsXcJ_qaYxSuPg7hMs1U_LE25cftK9"
        alt="loading"
        className="mx-8"
      />

      <ul className="flex m-2 p-2">
       <Link to ="/"> <li className="mx-8 font-bold text-black">Vaults</li></Link>
       <Link to ="/portfolio"> <li className="mx-8 font-bold text-black">PortFolio</li></Link>
        
      </ul>
      <div className="m-2 p-2 ml-1">
      <Link to ="/wallet">
        <button className=" mx-178 font-bold  text-black">
          Connect Wallet
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
