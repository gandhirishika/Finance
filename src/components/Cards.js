const Cards = ({ id, type, img, title, percentage }) => {
  return (
    <div className="text-black flex text-center rounded-t-lg  ">
      <div className="border-2 border-gray-500 w-96 h-96 m-5 p-2 rounded-md drop-shadow-2xl">
        <h6 className=" bg-green-400 rounded-s-lg text-sm  ml-48 text-end">{type}</h6>
       {id<4? <img className="h-20  ml-32 mt-4 justify-evenly" src={img} alt="loading" /> :
       <div className="flex m-4 ml-28">
       <img className="h-20   mt-4 justify-evenly" src={img} alt="loading" />
       <img className="h-20   mt-4 justify-evenly" src={img} alt="loading" />
       </div>
       }
        {/* <h2>{id}</h2> */}
        <h1 className="font-bold mt-5 text-xl">{title}</h1>
        <h2 className="mt-6">Earn upto </h2>
        <h2 className="font-bold text-xl">{percentage} APY</h2>
        {id<4? <button className="bg-black text-white rounded-2xl mt-8 p-2 font-bold">
          Start Earning  --
        </button> :
       <button className="bg-black text-white rounded-2xl mt-8 p-2 font-bold">
       Coming Soon  --
     </button> 
     
       }
        
      </div>
    </div>
  );
};

export default Cards;
