const Cards = ({ id, type, img, title, percentage }) => {
  return (
    <div className="text-black flex text-center">
      <div className="border-2 border-gray-500 w-96 h-96 m-5 p-2 rounded-md">
        <h6 className=" bg-green-400 rounded-s-lg text-sm justify-end ml-20">{type}</h6>
        <img className="h-20  ml-24 mt-4 justify-evenly" src={img} alt="loading" />
        {/* <h2>{id}</h2> */}
        <h1 className="font-bold mt-5 text-xl">{title}</h1>
        <h2 className="mt-6">Earn upto {percentage}</h2>
        <button className="bg-black text-white rounded-2xl mt-8 p-2 font-bold">
          Start Earning  --
        </button>
      </div>
    </div>
  );
};

export default Cards;
