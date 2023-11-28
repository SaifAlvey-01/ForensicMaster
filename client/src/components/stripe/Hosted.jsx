
import React from "react";
import image from "../../assets/images/bgpayment.png";
import image1 from "../../assets/images/SiteLogo.png";
import image2 from "../../assets/images/icon4.png";
import image3 from "../../assets/images/lite.png";
import image4 from "../../assets/images/pro.png";
import image5 from "../../assets/images/team.png";

export const Hosted = () => (

    <div>
      <div className="" style={{ background: `url(${image})`, backgroundPosition: 'center' }}>
        <div className="flex">
          <img className="p-3" src={image1} alt="logo" />
          <h3 className="font-bold pl-20 md:pl-72 lg:pl-96 fontFamily:Roboto lg:ml-32 mt-10 mb-3 text-white text-md">P&nbsp;A&nbsp;C&nbsp;K&nbsp;A&nbsp;G&nbsp;E&nbsp;S</h3>
        </div>
        <div className="mt-6 md:ml-28 lg:ml-80">
        <h3 className="font-bold fontFamily:Roboto ml-10 md:ml-28 text-white text-4xl">Pick the price that’s right for you.</h3>
        <h3 className="font-bold fontFamily:Roboto ml-10 md:ml-44 lg:ml-44 mt-5 text-white text-lg">Join millions of other customers on this platform</h3>
        </div>
        <div className="py-20 lg:flex lg:justify-between display: inline-grid grid-cols-1 md:grid-cols-2 md:px-20 px-20 lg:px-32">
          <div className="bg-[#0C2C37] p-6 w-80 h-96 rounded-lg mb-10 md:ml-5 lg:ml-0">
            <img className="h-min pb-5 w-min" src={image3} alt="Logo" />
            <h3 className="fontFamily:Roboto text-white mb-4 text-sm"><span className="font-bold text-3xl mr-2">$7</span>/ month</h3>
            <h3 className="fontFamily:Roboto text-white text-sm mb-5 italic">Just using this for yourself? Lite is 
            the way to go for the lites platform.</h3>
            <form action="http://localhost:8000/hosted/create-checkout-session" method="POST">
            <input type="hidden"  name="amount" value={7}/> 
      <input type="hidden" name="product_name" value="Weekly Subscription"/>
            <button className="bg-[#127FBF] cursor-poiter mb-5 hover:animate-bounce w-[260px] h-10 text-white font-semibold rounded-lg">Select Lite</button>
            </form>
            <hr className="text-white w-full"/>
            <div className="">
              <div className="display: flex ml-2 mt-5">
                <img className="h-min w-min mt-1" src={image2} alt="Logo" />
                <h6 className="text-white ml-3 italic font-extralight">One person usage</h6>
              </div>
              <div className="display: flex ml-2 mt-2">
                <img className="h-min w-min mt-1" src={image2} alt="Logo" />
                <h6 className="text-white ml-3 italic font-extralight">Exports to files for easy viewing</h6>
              </div>
              <div className="display: flex ml-2 mt-2">
                <img className="h-min w-min mt-1" src={image2} alt="Logo" />
                <h6 className="text-white ml-3 italic font-extralight">500MB of data for your account</h6>
              </div>
            </div>
          </div>
          <div className="bg-[#0C2C37] p-6 w-80 h-96 rounded-lg mb-10 md:ml-5 lg:ml-0">
            <img className="h-min pb-5 w-min" src={image4} alt="Logo" />
            <h3 className="fontFamily:Roboto text-white mb-4 text-sm"><span className="font-bold text-3xl mr-2">$19</span>/ month</h3>
            <h3 className="fontFamily:Roboto text-white text-sm mb-5 italic">Just using this for yourself? Pro is the way to go for the professional platform.</h3>
            <form action="http://localhost:8000/hosted/create-checkout-session" method="POST">
            <input type="hidden"  name="amount" value={19}/> 
      <input type="hidden" name="product_name" value="Monthly Subscription"/>
            <button className="bg-[#127FBF] cursor-poiter mb-5 hover:animate-bounce w-[260px] h-10 text-white font-semibold rounded-lg">Select Pro</button>
            </form>
            <hr className="text-white w-full"/>
            <div className="">
              <div className="display: flex ml-2 mt-5">
                <img className="h-min w-min mt-1" src={image2} alt="Logo" />
                <h6 className="text-white ml-3 italic font-extralight">Two person usage</h6>
              </div>
              <div className="display: flex ml-2 mt-2">
                <img className="h-min w-min mt-1" src={image2} alt="Logo" />
                <h6 className="text-white ml-3 italic font-extralight">Exports to files for easy viewing</h6>
              </div>
              <div className="display: flex ml-2 mt-2">
                <img className="h-min w-min mt-1" src={image2} alt="Logo" />
                <h6 className="text-white ml-3 italic font-extralight">1000MB of data for your account</h6>
              </div>
            </div>
          </div>
          <div className="bg-[#0C2C37] p-6 w-80 h-96 rounded-lg mb-10 md:ml-5 lg:ml-0">
            <img className="h-min pb-5 w-min" src={image5} alt="Logo" />
            <h3 className="fontFamily:Roboto text-white mb-4 text-sm"><span className="font-bold text-3xl mr-2">$31</span>/ month</h3>
            <h3 className="fontFamily:Roboto text-white text-sm mb-5 italic">Just using for friends and family? Team is the way to go for the teams platform.</h3>
            <form action="http://localhost:8000/hosted/create-checkout-session" method="POST">
            <input type="hidden"  name="amount" value={31}/> 
      <input type="hidden" name="product_name" value="Yearly Subscription"/>
            <button className="bg-[#127FBF] cursor-poiter mb-5 hover:animate-bounce w-[260px] h-10 text-white font-semibold rounded-lg">Select Team</button>
            </form>
            <hr className="text-white w-full"/>
            <div className="">
              <div className="display: flex ml-2 mt-5">
                <img className="h-min w-min mt-1" src={image2} alt="Logo" />
                <h6 className="text-white ml-3 italic font-extralight">Multi person usage</h6>
              </div>
              <div className="display: flex ml-2 mt-2">
                <img className="h-min w-min mt-1" src={image2} alt="Logo" />
                <h6 className="text-white ml-3 italic font-extralight">Exports to files for easy viewing</h6>
              </div>
              <div className="display: flex ml-2 mt-2">
                <img className="h-min w-min mt-1" src={image2} alt="Logo" />
                <h6 className="text-white ml-3 italic font-extralight">5GB of data for your account</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
);
