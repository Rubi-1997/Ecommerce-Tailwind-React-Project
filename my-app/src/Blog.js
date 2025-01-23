import React from "react";

const Blog = () => {
  return (
    <div className="p-24">
      <div className="font-bold text-4xl uppercase font-serif ">
        Latest From Blog
      </div>
      <div className=" grid grid-cols-2 gap-5 mt-8">
        <div className="">
          <div className="">
            <img src="/images/b1.jpg" className="w-full "></img>
          </div>
          <div className="bg-stone-100 p-8">
            <h1 className="mt-1 text-2xl font-bold text-start">
              Molestiae ad reiciendis dignissimos
            </h1>
            <div className="relative">
              <p className="text-start">
                alteration in some form, by injected humour, or randomised words
                which don't look even slightly believable.
              </p>

              <div className="bg-black w-20 h-20  border-4 border-indigo-50 flex justify-center items-center absolute bottom-20">
                <p className="text-white text-2xl font-bold">14 July</p>
              </div>
            </div>
            <div className="flex justify-start mt-5">
              <button className="bg-transparent text-base  px-12 py-3 hover:bg-black text-black font-semibold hover:text-white  border border-black hover:border-transparent rounded">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div className="">
            <img src="/images/b2.jpg" className="w-full"></img>
          </div>
          <div className="bg-stone-100 p-8">
            <h1 className="mt-1 text-2xl font-bold text-start">
            Dolores vel maiores voluptatem enim
            </h1>
            <div className="relative">
              <p className="text-start">
                alteration in some form, by injected humour, or randomised words
                which don't look even slightly believable.
              </p>

              <div className="bg-black w-20 h-20  border-4 border-indigo-50 flex justify-center items-center absolute bottom-20">
                <p className="text-white text-2xl font-bold">15 July</p>
              </div>
            </div>
            <div className="flex justify-start mt-5">
              <button className="bg-transparent text-base  px-12 py-3 hover:bg-black text-black font-semibold hover:text-white  border border-black hover:border-transparent rounded">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
