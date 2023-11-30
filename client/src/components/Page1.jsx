import React, {useEffect} from "react";
import image1 from "./../assets/images/bg1.png";
import image2 from "./../assets/images/bg2.png";
import image3 from "./../assets/images/bg3.jpeg";
import logo1 from "./../assets/images/SiteLogo.png";
import logo2 from "./../assets/images/Flag.png";
import logo3 from "./../assets/images/bg4.png";
import logo4 from "./../assets/images/bg5.png";
import logo5 from "./../assets/images/line.png";
import logo6 from "./../assets/images/icon1.png";
import logo7 from "./../assets/images/icon2.png";
import logo8 from "./../assets/images/icon3.png";
import logo9 from "./../assets/images/img1.png";
import logo10 from "./../assets/images/txt1.png";
import logo11 from "./../assets/images/bg6.png";
import logo12 from "./../assets/images/bg7.png";
import logo13 from "./../assets/images/icon4.png";
import logo14 from "./../assets/images/img2.png";
import logo15 from "./../assets/images/img3.png";
import logo16 from "./../assets/images/img4.png";
import logo17 from "./../assets/images/img5.png";
import logo18 from "./../assets/images/icon5.png";
import logo19 from "./../assets/images/icon6.png";
import logo20 from "./../assets/images/icon7.png";
import logo21 from "./../assets/images/txt2.png";
import logo22 from "./../assets/images/img6.png";
import logo23 from "./../assets/images/bg8.png";
import { ArrowDownOutlined } from '@ant-design/icons';
import Darkmode from "darkmode-js";
import { useDispatch } from "react-redux";
import { setUser } from "../state/user/userSlice";

function Page() {
useEffect(() => {
    if(window.localStorage.getItem("dark") == 0){
      darkmode.toggle();
    }})

  const options = {
    bottom: '32px',
    right: '32px',
    left: 'unset',
    time: '0.7s',
    mixColor: '#fff',
    backgroundColor: '#fff',
    buttonColorDark: '#100f2c',
    buttonColorLight: '#fff',
    saveInCookies: true,
    label: '🌓',
    autoMatchOsTheme: true
  }
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
   const dispatch = useDispatch();
  
  if(darkmode.isActivated() == true){
    dispatch(setUser({
      email: window.localStorage.getItem("email"),
      plan: window.localStorage.getItem("plan"),
      dark: 1,
    }));
    darkmode.toggle();
    console.log(window.localStorage.getItem("dark"));
  }

  
  return (
    <>
      <div id="home" className="w-min">
        <div className="w-screen h-[680px]" style={{ backgroundImage:`url(${image1})` }}>
          <div className="w-screen h-[680px] bg-center" style={{ backgroundImage:`url(${image3})` }}>
            <div className="w-screen h-[680px] bg-bottom" style={{ backgroundImage:`url(${image2})` }}>
              <ul className="text-white position: stick-to-top display: inline-flex space-x-5 mx-8 pt-4 lg:float-right md:float-right md:mx-14 lg:mx-28">
              <a href="#services"><li className="fontFamily:Roboto cursor-pointer p-2 text-md hover:animate-bounce  fontFamily:Roboto">Services</li></a>
              <a href="#about"><li className="cursor-pointer p-2 text-md hover:animate-bounce fontFamily:Roboto">About</li></a>
              <a href="#contact"><li className="cursor-pointer p-2 text-md fontFamily:Roboto hover:animate-bounce ">Contact</li></a>
              <a href="/Login"><li className="cursor-pointer p-2 text-md fontFamily:Roboto hover:animate-bounce ">
              Login
              </li></a>
                <li className="py-2 text-md display: flex fontFamily:Roboto"><img className="h-fit pt-0.5 pr-1" src={logo2} alt="English" /> | EN</li>
              </ul>
              <div className="pt-48 lg:pt-72">
                <img className="ml-[190px] md:ml-[370px] lg:ml-[620px]" src={logo1} alt="Logo" />
                <h1 className="font-extrabold fontFamily:Roboto text-white ml-[120px] md:ml-[220px] lg:ml-[470px] pb-5 pt-10 text-3xl md:text-5xl">FORENSIC MASTER</h1>
                <h3 className="font-normal fontFamily:Roboto text-white ml-[95px] md:ml-[275px] lg:ml-[520px] text-lg">A Multimedia DeepFake Detection Tool</h3>
                <a className="ease-in" href="#services"><div className="border-2 border-white rounded-3xl w-9 ml-[240px] md:ml-[420px] lg:ml-[670px] mt-6 h-16 cursor-pointer">
                  <ArrowDownOutlined className="text-white mt-5 p-2 text-md animate-bounce"/>
                </div></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="services" className="w-screen">
        <div className="ml-10 md:ml-20 lg:ml-80 mt-32 mb-5">
          <h3 className="font-bold fontFamily:Roboto text-3xl">OUR</h3>
          <h1 className="font-extrabold fontFamily:Roboto text-5xl">SERVICES</h1>
        </div>
        <div className="flex">
          <div className=" h-80 display: flex w-[480px] md:w-[780px] lg:w-[1380px]" style={{ backgroundImage:`url(${logo4})` }}>
            <img className="h-fit w-0 lg:w-fit mt-[-100px]" src={logo3} alt="Logo" />
            <img className="h-64 w-3 mt-7 ml-5 lg:ml-[-30px] mr-5" src={logo5} alt="Logo" />
            <h6 className="font-thin italic text-[#b8c1ca] fontFamily:Roboto text-lg mt-8 md:mt-16 w-96 md:w-[600px] lg:w-[650px]">Welcome to Forensic Master! As technology advances, the creation and distribution of manipulated media, such as deep fake videos, poses a growing threat to the credibility and integrity of digital content. Our website offers advanced tools and techniques for detecting and analyzing deep fakes, helping to prevent the spread of false information and protect the authenticity of multimedia content.</h6>
          </div>
          <div className="mt-[500px] display: inline-grid grid-cols-1 md:grid-cols-2 lg:ml-[-1050px] ml-[-450px] lg:flex mb-20">
            <div className="p-20 md:ml-[-300px] lg:ml-[10px] lg:p-5">
              <img className="h-fit w-fit mt-[-100px]" src={logo6} alt="Logo" />
              <h6 className="font-bold pt-5">View Recent Generated Data</h6>
              <h6 className="text-[#b8c1ca] italic w-72 lg:w-72">Experience the power of real-time insights and analytics with updates about your recent activity. With competitive edge of data-driven strategies.</h6>
            </div>
            <div className="p-20 md:ml-[-200px] lg:ml-[-20px] lg:p-5">
              <img className="h-fit w-fit mt-[-100px]" src={logo7} alt="Logo" />
              <h6 className="font-bold pt-5">Upload Multimedia for Anaylysis</h6>
              <h6 className="text-[#b8c1ca] italic w-72 lg:w-72">We understand the co-operation and trust more than anyone, address your need to analyze multimedia for digital forensic purposes, we offer the  perfect tool to help you accomplish your goals.</h6>
            </div>
            <div className="p-20 md:ml-[-300px] lg:ml-[-10px] lg:p-5">
              <img className="h-fit w-fit mt-[-100px]" src={logo8} alt="Logo" />
              <h6 className="font-bold pt-5">Generate  A Report</h6>
              <h6 className="text-[#b8c1ca] italic w-72 lg:w-72">Select the specific data sets you want to analyze, choose the types of reports and visualizations you need, and generate these outputs quickly and easily.</h6>
            </div>
          </div>
        </div>
      </div>
      <div id="about">
        <div className=" md:flex mt-40">
          <div>
            <img className="ml-10 lg:ml-32 h-28 w-400 lg:w-[600px]" src={logo10} alt="Logo" />
            <h1 className="ml-10 lg:ml-32 mt-5 w-400 lg:w-[600px] font-bold fontFamily:Roboto text-3xl">PERFORM MULTIMEDIA ANALYSIS WITH OUR CUTTING EDGE TECHNOLOGY AND LATEST DATASETS.</h1>
          </div>
          <img className="h-[500px] mt-5 lg:mt-[-50px] w-[600px] px-10" src={logo9} alt="Logo" />
        </div>
        <div className="w-screen display: inline-grid grid-cols-1 md:grid-cols-2 lg:flex h-[1000px] md:h-[550px] lg:h-80 mt-[-50px]" style={{ backgroundImage:`url(${logo11})` }}>
          <div className=" pt-20 ml-14">
            <img className="" src={logo12} alt="Logo" />
            <h1 className="font-bold mt-[-150px] ml-5 text-white fontFamily:Roboto text-md">Picture Analysis</h1>
            <div className="display: flex ml-5 mt-1">
              <img className="h-min w-min" src={logo13} alt="Logo" />
              <h6 className="text-white ml-3 mt-[-3px] italic font-extralight">Picture Enhancement Services</h6>
            </div>
            <div className="display: flex ml-5 mt-1">
              <img className="h-min w-min" src={logo13} alt="Logo" />
              <h6 className="text-white ml-3 mt-[-3px] italic font-extralight">Picture Originality Analysis</h6>
            </div>
            <div className="display: flex ml-5 mt-1">
              <img className="h-min w-min" src={logo13} alt="Logo" />
              <h6 className="text-white ml-3 mt-[-3px] italic font-extralight">Improve  Quality and Pixels</h6>
            </div>
            <div className="display: flex ml-5 mt-1">
              <img className="h-min w-min" src={logo13} alt="Logo" />
              <h6 className="text-white ml-3 mt-[-3px] italic font-extralight">Our authenticity confirmation</h6>
            </div>
          </div>
          <div className=" pt-20 ml-14">
            <img className="" src={logo12} alt="Logo" />
            <h1 className="font-bold mt-[-150px] ml-5 text-white fontFamily:Roboto text-md">Video Analysis</h1>
            <div className="display: flex ml-5 mt-1">
              <img className="h-min w-min" src={logo13} alt="Logo" />
              <h6 className="text-white ml-3 mt-[-3px] italic font-extralight">Video Enhancement Services</h6>
            </div>
            <div className="display: flex ml-5 mt-1">
              <img className="h-min w-min" src={logo13} alt="Logo" />
              <h6 className="text-white ml-3 mt-[-3px] italic font-extralight">Video Originality Analysis</h6>
            </div>
            <div className="display: flex ml-5 mt-1">
              <img className="h-min w-min" src={logo13} alt="Logo" />
              <h6 className="text-white ml-3 mt-[-3px] italic font-extralight">Improve Quality and Pixels</h6>
            </div>
            <div className="display: flex ml-5 mt-1">
              <img className="h-min w-min" src={logo13} alt="Logo" />
              <h6 className="text-white ml-3 mt-[-3px] italic font-extralight">Our Authenticity Confirmation</h6>
            </div>
          </div>
          <div className=" pt-20 ml-14">
            <img className="" src={logo12} alt="Logo" />
            <h1 className="font-bold mt-[-150px] ml-5 text-white fontFamily:Roboto text-md">Audio Analysis</h1>
            <div className="display: flex ml-5 mt-1">
              <img className="h-min w-min" src={logo13} alt="Logo" />
              <h6 className="text-white ml-3 mt-[-3px] italic font-extralight">Audio Enhancement Services</h6>
            </div>
            <div className="display: flex ml-5 mt-1">
              <img className="h-min w-min" src={logo13} alt="Logo" />
              <h6 className="text-white ml-3 mt-[-3px] italic font-extralight">Audio Originality Analysis</h6>
            </div>
            <div className="display: flex ml-5 mt-1">
              <img className="h-min w-min" src={logo13} alt="Logo" />
              <h6 className="text-white ml-3 mt-[-3px] italic font-extralight">Improve Quality and Pixels</h6>
            </div>
            <div className="display: flex ml-5 mt-1">
              <img className="h-min w-min" src={logo13} alt="Logo" />
              <h6 className="text-white ml-3 mt-[-3px] italic font-extralight">Our Authenticity Confrimation</h6>
            </div>
          </div>
          <div className=" pt-20 ml-14">
            <img className="" src={logo12} alt="Logo" />
            <h1 className="font-bold mt-[-150px] ml-5 text-white fontFamily:Roboto text-md">Object Identification</h1>
            <div className="display: flex ml-5 mt-1">
              <img className="h-min w-min" src={logo13} alt="Logo" />
              <h6 className="text-white ml-3 mt-[-3px] italic font-extralight">Detect an Object in Video</h6>
            </div>
            <div className="display: flex ml-5 mt-1">
              <img className="h-min w-min" src={logo13} alt="Logo" />
              <h6 className="text-white ml-3 mt-[-3px] italic font-extralight">Frequency of Object in Video</h6>
            </div>
            <div className="display: flex ml-5 mt-1">
              <img className="h-min w-min" src={logo13} alt="Logo" />
              <h6 className="text-white ml-3 mt-[-3px] italic font-extralight">Clips with Duration Containing Object</h6>
            </div>
            <div className="display: flex ml-5 mt-1">
              <img className="h-min w-min" src={logo13} alt="Logo" />
              <h6 className="text-white ml-3 mt-[-3px] italic font-extralight">Our Authenticity Confirmation</h6>
            </div>
          </div>
        </div>
        <div className="mt-40">
          <div className="w-screen display: inline-grid grid-cols-1 md:grid-cols-2 lg:flex h-[1000px] md:h-[550px] lg:h-80 mt-[-50px] mb-28">
            <div className="ml-10 lg:ml-72 mt-32">
              <h3 className="font-bold fontFamily:Roboto text-3xl">OUR</h3>
              <h1 className="font-extrabold fontFamily:Roboto text-5xl">MISSION</h1>
            </div>
            <img className="w-3 ml-5 invisible lg:visible lg:ml-48" src={logo5} alt="Logo" />
            <h6 className="font-lightitalic ml-10 w-96 md:w-[600px] mt-[-560px] md:mt-[0] lg:mt-20 lg:w-[600px] text-[#b8c1ca] fontFamily:Roboto italic text-lg ">The creation and distribution of manipulated media, such as deep fake videos, poses a growing threat to the credibility and integrity of digital content. Our website offers advanced tools and techniques for detecting and analyzing deep fakes, helping to prevent the spread of false information and protect the authenticity of multimedia content.</h6>
          </div>
          <div className="w-screen mt-[-3000px] md:mt-[0] display: inline-grid grid-cols-1 md:grid-cols-2 lg:flex h-[1000px] md:h-[550px] lg:h-80 lg:mt-[-50px] mb-28">
          <img className="ml-24 md:ml-14 lg:ml-8 h-80 w-80 p-3" src={logo14} alt="Logo" />
          <img className="ml-24 md:ml-14 lg:ml-0 h-80 w-80 p-3" src={logo15} alt="Logo" />
          <img className="ml-24 md:ml-14 lg:ml-0 h-80 w-80 p-3" src={logo16} alt="Logo" />
          <img className="ml-24 md:ml-14 lg:ml-0 h-80 w-80 p-3" src={logo17} alt="Logo" />
          </div>
        </div>
        <div className="mt-20">
          <div className="ml-44 mt-48 md:mt-0 md:ml-[300px] lg:ml-[550px] mb-20">
              <h3 className="font-bold fontFamily:Roboto text-3xl">OUR</h3>
              <h1 className="font-extrabold fontFamily:Roboto text-5xl">PARTNERS</h1>
          </div>
          <div className="display: inline-grid grid-cols-1 md:grid-cols-2 lg:flex mb-20">
          <img className="ml-32 mt-10 md:mt-0 md:ml-20 lg:ml-40 h-16" src={logo18} alt="Logo" />
          <img className="ml-32 md:ml-0 mt-10 md:mt-0 lg:ml-20 h-16" src={logo19} alt="Logo" />
          <img className="ml-10 md:ml-48 md:mt-10 mt-10 lg:ml-20 lg:mt-[0px] h-16" src={logo20} alt="Logo" />
          </div>
        </div>
      </div>
      <div className=" lg:flex">
        <div>
          <div className="ml-20 mt-20">
            <h3 className="font-bold fontFamily:Roboto text-3xl">OUR POLICY</h3>
            <img className="" src={logo21} alt="Logo" />
          </div>
          <div className="ml-20 mt-10">
            <h3 className="font-bold fontFamily:Roboto text-3xl">By Team</h3>
            <h6 className="font-bold fontFamily:Roboto text-lg">-------- Forensic Master</h6>
          </div>
          <div className="ml-20 mt-10">
            <h6 className="font-extralight italic text-[#b8c1ca] fontFamily:Roboto text-lg w-96 md:w-[600px]">We are committed to protecting the integrity and authenticity of digital media. Our services and tools are designed to help our clients detect and analyze manipulated media, such as deep fake videos, in order to prevent the spread of false information and protect the credibility of multimedia content.
  </h6>
          </div>
        </div>
        <div>
        <img className="" src={logo22} alt="Logo" />
        </div>
      </div>
      <div id="contact" className="bg-[#ebf3fa] pt-28 flex">
        <div className="ml-28">
          <h3 className="font-bold fontFamily:Roboto text-3xl">LET&apos;S</h3>
          <h1 className="font-extrabold fontFamily:Roboto text-5xl">CONTACT</h1>
          <div className="flex">
            <img className="mt-10 w-2 h-40" src={logo5} alt="Logo" />
            <h1 className="font-extralight w-[300px] text-[#b8c1ca] mt-16 ml-5 lg:w-[600px] fontFamily:Roboto italic text-lg">We adhere to the highest ethical and professional standards in all aspects of our work, and we strive to maintain transparency and integrity in our business practices.</h1>
          </div>
          <h3 className="font-extralight mb-10 mt-10 text-[#b8c1ca] italic fontFamily:Roboto text-sm">&copy; 2023 Forensic Master | All Rights Reserved.</h3>
        </div>
        <div>
          <img className="invisible md:visible" src={logo23} alt="Logo" />
        </div>
      </div>
    </>
  );
}

export default Page
