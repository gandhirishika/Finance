import React from "react";
import Data from "../utils/Data";
import { Link } from "react-router-dom";
const CardInfo = ({ title }) => {
  return (
    <div className="mt-20 bg-pink-100">
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      <h2 className="text-3xl font-bold">Protected Twin Peaks</h2>
      <div className="flex mt-20">
        <div className="flex flex-col m-2">
          <div className="flex justify-between p-2 m-2 bg-slate-100">
            <h2 className="font-bold text-lg">WBTC</h2>
            <div className="flex">
              <h3 className="font-bold text-lg mx-2">$16.2 K</h3>
              <h3 className="font-bold text-lg mx-2">0.315%</h3>
              <h3 className="font-bold text-lg mx-2" >10.035%</h3>
            </div>
          </div>
          <h2 className="font-bold text-2xl">Strategy</h2>
          <p className="mt-2">
            This weekly strategy earns interest through an exotic option
            strategy called Twin Peaks
          </p>
          <p>
            The strategy captures a linearly increasing rate of return for price
            movements in
          </p>{" "}
          both directions up to the upper and lower barriers respectively
        </div>
        <div className="flex flex-col m-10 p-2 rounded-xl border-black bg-white h-56 w-60 ml-96">
          <div className="flex ">
            <button className="p-2 m-2 rounded-lg">
              Deposits
            </button>
            <button className="p-2 m-2    rounded-lg">
              WithDraw
            </button>
          </div>

          <div className="flex flex-col ">
            <label>Amount</label>{" "}
            <input className="bg-gray-400" type="number" />
          </div>
          <button className="bg-black rounded-lg text-white m-2 p-2">
            Collect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
