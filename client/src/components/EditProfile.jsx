import React from "react";
import logo from "./../assets/images/button.png";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Input } from './input';
import { FormProvider, useForm } from 'react-hook-form';
import {
  email_validation,
  password_validation,
  name_validation,
} from './utils/inputValidations';
import axios from "axios";
import { useNavigate } from "react-router-dom";


function EditProfile() {
  
  const [dataa, setData] = useState({
    username: "",
    email: "",
    address: "",
    contact: "",
    old: "",
    new: "",
  });

  

  const emaill = window.localStorage.getItem("email");
  console.log(emaill);
  const getUser = async () => {
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
        old: "",
        newp: "",
      });
    } catch (error) {
      console.log(error);
    }
  }
  

  const setUser = async (dataa) => {
    setData({ username: dataa.name,
      email: dataa.email,
      address: dataa.address,
      contact: dataa.contact,
      old: dataa.old,
      newp: dataa.newp,
    });
    try {
      
      let res = await axios.post("http://localhost:8000/api/user/edit-user", {
        params: {
          username: dataa.username,
          email: dataa.email,
          address: dataa.address,
          contact: dataa.contact,
          old: dataa.old,
          newp: dataa.newp,
        }
      
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }


  const methods = useForm()
  const [success, setSuccess] = useState(false)

  const goSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    methods.reset()
    setSuccess(true)
    setUser(data);
  })

  const navigate = useNavigate()
  useEffect(() => {
  
    if (window.localStorage.getItem("email") != "x"){
      navigate('/')
    }
    getUser();
  })

    return (
      
        <div className="">
          <Navbar></Navbar>
        <div className="bg-white w-screen h-screen md:flex">
          <div className="mt-8">
          <h3 className="font-bold fontFamily:Roboto sm:ml-16 md:ml-36 lg:ml-64 mb-7 text-3xl">Edit Profile</h3>
           <FormProvider {...methods}>
      <form
        noValidate
        autoComplete="off" className="md:ml-20 lg:ml-48 lg:mr-0">
              <div className="flex">
                <p className="font-extralight ml-[60px] mb-1 italic mt-6 text-[#2e3031] fontFamily:Roboto text-sm">Username</p>

              </div>
              <div className="flex">
                <Input {...name_validation} className=" px-4 py-2 ml-7 h-9 active:border-pink-800 w-[833px] mt-[-30px] rounded-md" type="text" name="username" placeholder= {dataa.username} id="username" />
              </div>
              <p className="font-extralight ml-[60px] mb-1 italic mt-14 text-[#2e3031] fontFamily:Roboto text-sm">Email</p>
              <Input {...email_validation} className=" px-4 py-2 ml-7 h-9 active:border-pink-800 w-[833px] mt-[-30px] rounded-md" type="email" name="email" placeholder= {dataa.email} id="email"/>
              <p className="font-extralight ml-[60px] mb-1 mt-14 italic text-[#2e3031] fontFamily:Roboto text-sm">Address</p>
              <Input {...name_validation} className=" px-4 py-2 ml-7 h-9 active:border-pink-800 w-[833px] mt-[-30px] rounded-md" type="text" name="address" id="address" placeholder= {dataa.address}/>
              <p className="font-extralight ml-[60px] mb-1 mt-14 italic text-[#2e3031] fontFamily:Roboto text-sm">Contact</p>
              <Input {...name_validation} className=" px-4 py-2 ml-7 h-9 active:border-pink-800 w-[833px] mt-[-30px] rounded-md" type="tel" name="contact" id="contact" placeholder= {dataa.contact}/>
              <div className="flex">
                <p className="font-extralight mt-14 ml-[60px] mb-1 italic text-[#2e3031] fontFamily:Roboto text-sm">Old Password</p>
                <p className="font-extralight mt-14 ml-[270px] lg:ml-[365px] mb-1 italic text-[#2e3031] fontFamily:Roboto text-sm">New Password</p>
              </div>
              <div className="flex">
                <Input {...password_validation} 
                onChange={(e) => setData({
                ...dataa,
                old: e.target.value,
              })}
              className=" px-4 py-2 ml-7 h-9 active:border-pink-800 w-32 mt-[-30px] rounded-md" type="password" name="old" id="old" placeholder="Old Password"/>
                <Input {...password_validation} className=" px-4 py-2 ml-16 h-9 active:border-pink-800 w-32 mt-[-30px] rounded-md" type="password" 
                onChange={(e) => setData({
                ...dataa,
                newp: e.target.value,
              })}
                name="newp" id="newp" placeholder="New Password"/>
              </div>
              <button onClick={(e) => goSubmit(e)} className="h-10 mt-28 text-extralight mb-16 ml-36 lg:ml-[490px] fontFamily: Roboto text-white text-lg w-[365px] rounded-3xl font-semibold hover:animate-bounce" style={{background: `url(${logo})`}} type="submit">S&nbsp;A&nbsp;V&nbsp;E</button>
            </form>
            </FormProvider>
          </div>
        </div>
        </div>
      )
}

export default EditProfile;
