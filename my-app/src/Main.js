import React from "react";

const Main = () => {
  return (
    <header className="w-full h-auto relative">
      <h1 className="text-white absolute top-6 uppercase left-5 text-2xl font-bold">
        Healet
      </h1>
      <div className=" absolute top-36 left-28">
        <div className="w-[40rem] font-bold">
          <p className="text-6xl text-start  text-white font-bold">
            Best Jewellery Collection
          </p>
        </div>
        <div className="w-[36rem] text-xl mt-2">
          <p className="text-white text-start">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem
          </p>
        </div>
        <div className="mt-12 flex items-start">
          <button className="bg-transparent text-base  hover:bg-yellow-700 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
            Shop Now
          </button>
        </div>
      </div>

      <img
        className="w-full h-[41rem] center"
        src="/images/slider.jpg"
        alt="header-img"
      ></img>
    </header>
  );
};

export default Main;
