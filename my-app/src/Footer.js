import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  
} from "@fortawesome/free-brands-svg-icons";
import {faArrowRight,faLocationDot,faPhone,faEnvelope} from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="flex justify-between  px-28 py-6">
        <div className="flex ">
          <div class="mb-4 w-[60rem] relative flex">
            <input
              className=" shadow appearance-none border  w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your email"
            />
            <button className="px-5 text-base hover:bg-transparent  bg-orange-400 hover:text-orange-400 text-white py-4 border hover:border-orange-400 border-transparent font-bold">
            <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-5 ml-14">
          <div className="border w-12 h-14 px-2 py-2">
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className="border w-12 h-14 px-2 py-2">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="border w-12 h-14 px-2 py-2">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </div>
        </div>
        
      </div>
      <div className="grid grid-cols-4 px-28 gap-20">
        <div className="">
          <h1 className="font-bold text-2xl text-start mb-4">Menu</h1>
          <ul className="list-none text-start text-lg">
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="text-start">
          <h1 className="font-bold text-2xl mb-4">Instagram</h1>
          <div className="flex">
            <div className="w-24 mr-4">
              <img src="/images/p1.png" className="bg-stone-200 p-2"></img>
            </div>
            <div>
              <p className="text-lg">long established fact that a reader</p>
            </div>
          </div>

          <div className="flex mt-2 ">
            <div className=" w-24 mr-4 mb-8">
              <img src="/images/p2.png" className="bg-stone-200 p-5"></img>
            </div>
            <div>
              <p className="text-lg">long established fact that a reader</p>
            </div>
          </div>
        </div>

        <div className="">
          <h1 className="font-bold text-2xl text-start mb-4">About Us</h1>
          <div className="w-64 text-start">
            <p className="text-lg">
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal distribution of letters, as opposed
              to
            </p>
          </div>
        </div>

        <div className="text-start">
          <h1 className="font-bold text-2xl mb-4">Contact Us</h1>
  
<div className="text-lg">
  <div className="flex"> <div className="pr-5"><FontAwesomeIcon icon={faLocationDot} size="xs"/></div><div>location</div></div>
  <div className="flex"> <div className="pr-5"><FontAwesomeIcon icon={faPhone}  size="xs"/></div><div>Call+01 1234567890</div></div>
  <div className="flex"> <div className="pr-5"><FontAwesomeIcon icon={faEnvelope} size="xs" /></div><div>mail@domain.com</div></div>
 
</div>
            
        
        </div>
      </div>
    </div>
  );
};

export default Footer;
