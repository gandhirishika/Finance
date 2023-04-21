import React, { useState } from "react";
import Cards from "./Cards";
import Data from "../utils/Data";

const Body = () => {
  const [items, setItems] = useState(Data);
  const [lists, setLists] = useState(Data);
  const handleAll = () => {
   setLists( items.filter((item)=> item.type==="Principal Protected" || item.type==="Ramses Yield Booster"))
  }
  const handlePrincipal = () => {
   setLists( items.filter((item)=> item.type==="Principal Protected" ))
  }
  const handleRamses = () => {
   setLists( items.filter((item)=> item.type==="Ramses Yield Booster"))
  }
  console.log(items)
  return (
    <div className="">
      <div className="text-center pt-32 bg-blue-200">
        <h1 className="text-7xl m-5 p-3 font-bold italic font-">Vaults</h1>
      
      <h3 className="text-center font-medium text-gray-500 text-2xl">
       <p>Invest in safer, principal protected income opportunities </p> through novel
        structured products
      </h3>
     
      <div className="flex pt-32 justify-center ">
        <button className="m-4 p-3  hover:bg-black text-white active:bg-black focus:outline-none focus:ring focus:ring-black  rounded-2xl font-semibold" onClick = {() => {handleAll()}}>
          All
        </button>
        <button className="m-4 p-3 hover:bg-black text-white active:bg-black focus:outline-none focus:ring focus:ring-black   rounded-2xl font-semibold" onClick = {() => {handlePrincipal()}}>
          Principal Protected
        </button>
        <button className="m-4 p-3 hover:bg-black text-white active:bg-black focus:outline-none focus:ring focus:ring-black   rounded-2xl font-semibold"onClick = {() => {handleRamses()}}>
          Ramses Yeild Protected
        </button>
      </div> </div>

      <div className="m-3 p-2 grid grid-cols-3 justify-center">
        {lists.map((items, index) => {
          return <Cards key={index} {...items} />;
        })}
      </div>
    </div>
  );
};

export default Body;
