import React from "react";

const DiscountSection = () => {
  return (
    <div className="mt-32 px-8 ">
      <div class="flex flex-wrap gap-5 relative ">
        <div class="w-[60%]">
          <img src="/images/o1.jpg" className=""></img>
          <div className="absolute top-8 left-4">
            <h1 className="text-white font-bold text-5xl">Upto 15% Off</h1>
            <div className="flex justify-start mt-5">
              <button className="bg-transparent text-base  px-12 py-3 hover:bg-yellow-700 text-yellow-700 font-semibold hover:text-white  border border-yellow-500 hover:border-transparent rounded">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div class="w-[38%]  grid grid-col-1 divide-y gap-4">
          <div className="relative ">
            <img src="/images/o2.jpg" className="h-full"></img>
            <div className="absolute bottom-0 right-4">
              <h1 className="text-white font-bold text-4xl mb-2">
                Upto 10% Off
              </h1>
              <div className="mb-5">
                <button className="bg-transparent text-base   px-12 py-3 hover:bg-yellow-700 text-yellow-700 font-semibold hover:text-white  border border-yellow-500 hover:border-transparent rounded">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="/images/o3.jpg" className="h-full"></img>
            <div className="absolute bottom-0 left-4">
              <h1 className="text-white font-bold text-4xl">Upto 20% Off</h1>
              <div className="mb-5 flex justify-start">
                <button className="bg-transparent mt-2 text-base text-start  px-12 py-3 hover:bg-yellow-700 text-yellow-700 font-semibold hover:text-white  border border-yellow-500 hover:border-transparent rounded">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountSection;
