import React from "react";

const AboutUs = () => {
  return (
    <div className="">
      <div className="flex px-24">
        <div className="relative">
          <div className="w-[35rem] h-52 ">
            <img
              src="/images/about-img.jpg"
              className="absolute left-6 z-50"
            ></img>
            <div className="bg-black w-80 h-80 absolute -top-6 left-0 "></div>
          </div>
        </div>

        <div className="p-14">
          <div className="font-bold text-4xl uppercase font-serif text-start">
            About Us
          </div>
          <div className="w-[38rem] text-sm">
            <p className="text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              dolorem eum consequuntur ipsam repellat dolor soluta aliquid
              laborum, eius odit consectetur vel quasi in quidem, eveniet ab est
              corporis tempore.
            </p>
          </div>
          <div className="py-9 flex justify-start">
        <button className="px-14 text-base hover:bg-transparent  bg-orange-400 hover:text-orange-400 font-semibold text-white py-3 border hover:border-orange-400 border-transparent rounded">Read More</button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
