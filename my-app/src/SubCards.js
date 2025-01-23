import React from "react";

const SubCards = () => {
  return (
    //  subcards section start
    <div className=" p-24">
      <div className="font-bold text-4xl uppercase font-serif ">
        Latest Products
      </div>
      <div className="mt-8 flex justify-between gap-6 flex-wrap">
        <div className="w-72 h-80 bg-stone-100 p-3">
          <div className="bg-white rounded-full w-12 h-12 p-2">New</div>
          <div className="flex items-center justify-center">
            <img className="w-44 h-40" src="/images/p1.png"></img>
          </div>

          <div className="flex justify-between mt-14">
            <p className="text-xl">Necklace</p>
            <p className="text-xl">
              Price<span className="text-orange-500">$200</span>
            </p>
          </div>
        </div>
        <div className="w-72 h-80 bg-stone-100 p-3">
          <div className="bg-white rounded-full w-12 h-12 p-2">New</div>
          <div className="flex items-center justify-center">
            <img className="w-30 h-40" src="/images/p2.png"></img>
          </div>

          <div className="flex justify-between mt-14">
            <p className="text-xl">Necklace</p>
            <p className="text-xl">
              Price<span className="text-orange-500">$200</span>
            </p>
          </div>
        </div>
        <div className="w-72 h-80 bg-stone-100 p-3">
          <div className="bg-white rounded-full w-12 h-12 p-2">New</div>
          <div className="flex items-center justify-center">
            <img className="w-28 h-40" src="/images/p3.png"></img>
          </div>

          <div className="flex justify-between mt-14">
            <p className="text-xl">Necklace</p>
            <p className="text-xl">
              Price<span className="text-orange-500">$200</span>
            </p>
          </div>
        </div>
        <div className="w-72 h-80 bg-stone-100 p-3">
          <div className="bg-white rounded-full w-12 h-12 p-2">New</div>
          <div className="flex items-center justify-center">
            <img className="w-48 h-36" src="/images/p4.png"></img>
          </div>

          <div className="flex justify-between mt-14">
            <p className="text-xl">Necklace</p>
            <p className="text-xl">
              Price<span className="text-orange-500">$200</span>
            </p>
          </div>
        </div>
        <div className="w-72 h-80 bg-stone-100 p-3">
          <div className="bg-white rounded-full w-12 h-12 p-2">New</div>
          <div className="flex items-center justify-center">
            <img className="w-44 h-36" src="/images/p5.png"></img>
          </div>

          <div className="flex justify-between mt-14">
            <p className="text-xl">Necklace</p>
            <p className="text-xl">
              Price<span className="text-orange-500">$200</span>
            </p>
          </div>
        </div>
        <div className="w-72 h-80 bg-stone-100 p-3">
          <div className="bg-white rounded-full w-12 h-12 p-2">New</div>
          <div className="flex items-center justify-center">
            <img className="w-30 h-32" src="/images/p6.png"></img>
          </div>

          <div className="flex justify-between mt-14">
            <p className="text-xl">Necklace</p>
            <p className="text-xl">
              Price<span className="text-orange-500">$200</span>
            </p>
          </div>
        </div>
        <div className="w-72 h-80 bg-stone-100 p-3">
          <div className="bg-white rounded-full w-12 h-12 p-2">New</div>
          <div className="flex items-center justify-center">
            <img className="w-20 h-40" src="/images/p7.png"></img>
          </div>

          <div className="flex justify-between mt-14">
            <p className="text-xl">Necklace</p>
            <p className="text-xl">
              Price<span className="text-orange-500">$200</span>
            </p>
          </div>
        </div>
        <div className="w-72 h-80 bg-stone-100 p-3">
          <div className="bg-white rounded-full w-12 h-12 p-2">New</div>
          <div className="flex items-center justify-center">
            <img className="w-48 h-36" src="/images/p8.png"></img>
          </div>

          <div className="flex justify-between mt-14">
            <p className="text-xl">Necklace</p>
            <p className="text-xl">
              Price<span className="text-orange-500">$200</span>
            </p>
          </div>
        </div>

      </div>
      <div className="pt-16">
        <button className="px-14 text-base hover:bg-transparent  bg-orange-400 hover:text-orange-400 font-semibold text-white py-3 border hover:border-orange-400 border-transparent rounded">View All Products</button>
      </div>
    </div>
  );
};

export default SubCards;
