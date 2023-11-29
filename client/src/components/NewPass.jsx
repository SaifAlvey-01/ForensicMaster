import React, { useEffect } from "react";
import logo1 from "./../assets/images/bglogin.png";
import logo6 from "./../assets/images/button.png";
import { useState } from "react";
import { Input } from './input';
import { FormProvider, useForm } from 'react-hook-form';
import {
  password_validation,
} from './utils/inputValidations';
import axios from "axios";

function NewPass() {
  const [dataa, setData] = useState({
    username: "",
    email: "",
    address: "",
    contact: "",
    old: "",
    new: "",
  });

  const emaill = window.localStorage.getItem("email");
  const getUser = async () => {
    try {
      console.log(emaill);
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
  
  const alert = (msg, type) => (
    <p className={`text-xs ml-[88px] mt-[40px] text-${type}-500`}>{msg}</p>
  );
  const setUser = async (dataaa) => {
    setData({  username: dataa.username,
      email: dataa.email,
      address: dataa.address,
      contact: dataa.contact,
      old: dataaa.old,
      newp: dataaa.newp,
    });
    console.log(dataa);
    try {
      
      let res = await axios.post("http://localhost:8000/api/user/edit-user", {
        params: {
          username: dataa.username,
          email: dataa.email,
          address: dataa.address,
          contact: dataa.contact,
          old: dataaa.old,
          newp: dataaa.newp,
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

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <div className="h-[745px] w-screen md:px-48 lg:px-[430px] py-5" style = {{background: `url(${logo1})`}}>
        <div className="bg-white mt-12 h-[450px] w-[500px] pt-11 rounded-xl">
          <h3 className="font-bold fontFamily:Roboto ml-[90px] mb-14 mt-5 text-2xl">F&nbsp;O&nbsp;R&nbsp;G&nbsp;O&nbsp;T&nbsp;&nbsp;&nbsp;P&nbsp;A&nbsp;S&nbsp;S&nbsp;W&nbsp;O&nbsp;R&nbsp;D</h3>
          <FormProvider {...methods}>
      <form
        noValidate
        autoComplete="off"> 
            <div className="">
            <p className="font-extralight mt-14 mb-1 ml-[90px] italic text-[#2e3031] fontFamily:Roboto text-sm">Old Password</p>
              <Input {...password_validation} className={`px-4 py-2 ml-14 h-9 active:border-pink-800 w-32 mt-[-30px] rounded-md`}
                onChange={(e) =>
              setData({
                ...dataa,
                success: false,
                error: {},
                old: e.target.value,
              })
            }
            value={dataa.old}
            name="old"
            placeholder="Old Password"
            autoComplete="off"
            type="password"
            id="old"
              />
              {!dataa.error ? "" : alert(dataa.error.old, "red")}
              <p className="font-extralight mt-14 mb-1 ml-[90px] italic text-[#2e3031] fontFamily:Roboto text-sm">New Password</p>
              <Input {...password_validation} className={`px-4 py-2 ml-14 h-9 active:border-pink-800 w-32 mt-[-30px] rounded-md`}
              onChange={(e) =>
              setData({
                ...dataa,
                success: false,
                error: {},
                newp: e.target.value,
              })
            }
            value={dataa.newp}
            name="newp"
            placeholder="New Password"
            autoComplete="off"
            type="password"
            id="newp"
              />
              {!dataa.error ? "" : alert(dataa.error.newp, "red")}
            </div>
            <a href="/Login"><button onClick={(e) => {goSubmit(e)}} className="h-10 text-extralight ml-[90px] fontFamily: Roboto text-white text-lg w-80 rounded-3xl mt-20 hover:animate-bounce" style={{background: `url(${logo6})`}} type="submit">E&nbsp;N&nbsp;T&nbsp;E&nbsp;R</button></a>
          </form>
          </FormProvider>
        </div>
      </div>
    </div>
  )
}

export default NewPass;
