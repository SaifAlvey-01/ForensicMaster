import React from "react";
import logo from "./../assets/images/button.png";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Darkmode from "darkmode-js";
import { setUser } from "../state/user/userSlice";
import { useDispatch } from "react-redux";

function Profile() {
  
  const [dataa, setData] = useState({
    username: "",
    email: "",
    address: "",
    contact: "",
  });

  const emaill = window.localStorage.getItem("email");
  const getUser = async () => {
  console.log(emaill);
    try {
      let res = await axios.post("http://localhost:8000/api/user/single-user", {
        params: {
          email: emaill
        }
        
      });
      setData({ username: res.data.User.name,
        email: res.data.User.email,
        address: res.data.User.address,
        contact: res.data.User.contact,

      });
    } catch (error) {
      console.log(error);
    }
  }

  const navigate = useNavigate()
  useEffect(() => {
  
    if (window.localStorage.getItem("email") == "x"){
      navigate('/')
    }
    else if (window.localStorage.getItem("email") != "x"){
      if (window.localStorage.getItem("plan") <= Date.now()){
        navigate("/Plans")
        }
      }
    getUser();
  })

  const Go = () => {
    navigate("/DelAcc")
  }
  
const dispatch = useDispatch();
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
if(darkmode.isActivated() == true){
  dispatch(setUser({
    email: window.localStorage.getItem("email"),
    plan: window.localStorage.getItem("plan"),
    dark: 1,
  }));
    
  console.log(window.localStorage.getItem("dark"));
}
    return (
      
        <div className="">
          <Navbar></Navbar>
        <div className="bg-white w-screen h-screen md:flex">
          <div className="mt-8">
          <h3 className="font-bold fontFamily:Roboto sm:ml-16 md:ml-36 lg:ml-64 mb-7 text-3xl">Profile</h3>
      <form
        className="md:ml-20 lg:ml-48 lg:mr-0">
                <p className=" ml-[60px] mb-1 italic mt-16 text-[#2e3031] fontFamily:Roboto text-md"><b>Username:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dataa.username}</p>
              <p className="ml-[60px] mb-1 italic mt-14 text-[#2e3031] fontFamily:Roboto text-md"><b>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>{dataa.email}</p>
              <p className=" ml-[60px] mb-1 mt-14 italic text-[#2e3031] fontFamily:Roboto text-md"><b>Address:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>{dataa.address}</p>
              <p className=" ml-[60px] mb-1 mt-14 italic text-[#2e3031] fontFamily:Roboto text-md"><b>Contact:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>{dataa.contact}</p>
              <button onClick={(e) => {Go(e)}} className="h-10 mt-14 ml-24 mb-16 fontFamily: Roboto text-white text-lg w-[300px] rounded-3xl hover:animate-pulse border-2 border-red-800" type="submit"><p className="text-red-800">Delete Account</p></button>
            </form>
          </div>
        </div>
        </div>
      )
}

export default Profile;
