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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset, setUser } from "../state/user/userSlice";
import Darkmode from "darkmode-js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DelAcc() {
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

  }

  const navigate = useNavigate()

  useEffect(() => {

    if (window.localStorage.getItem("email") == "x"){
      navigate('/')
    }
    else if (window.localStorage.getItem("email") != "x"){
      if (window.localStorage.getItem("plan") <= Date.now()){
        navigate("/Plans")
        }}
    getUser();
  })

  const [dataa, setData] = useState({
    email: "",
    pass: ""
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
      setData({
        email: res.data.User.email,
        pass: "",
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  const alert = (msg, type) => (
    <p className={`text-xs ml-[88px] mt-[40px] text-${type}-500`}>{msg}</p>
  );
  const setUsr = async (dataaa) => {
    setData({ 
      email: dataa.email,
      pass: dataaa.pass,
    });
    console.log(dataaa.pass);
    try {
      
      let res = await axios.post("http://localhost:8000/api/user/delete-user", {
        params: {
          email: dataa.email,
          pass: dataaa.pass,
        }
      
      });
      console.log(res.data);
      dispatch(reset());
      toast.success('Account Deleted Successfully!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
setTimeout(()=> {
          navigate('/SignUp');
         }, 3000);
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
    setUsr(data);
  })

  return (
    <div>
      <div className="h-[745px] w-screen md:px-48 lg:px-[430px] py-5" style = {{background: `url(${logo1})`}}>
        <div className="bg-white mt-12 h-[380px] w-[500px] pt-11 rounded-xl">
          <h3 className="font-bold fontFamily:Roboto ml-[90px] mb-14 mt-5 text-2xl">D&nbsp;E&nbsp;L&nbsp;E&nbsp;T&nbsp;E&nbsp;&nbsp;&nbsp;A&nbsp;C&nbsp;C&nbsp;O&nbsp;U&nbsp;N&nbsp;T</h3>
          <FormProvider {...methods}>
      <form
        noValidate
        autoComplete="off"> 
            <div className="">
            <p className="font-extralight mt-14 mb-1 ml-[90px] italic text-[#2e3031] fontFamily:Roboto text-sm">Password</p>
              <Input {...password_validation} className={`px-4 py-2 ml-14 h-9 active:border-pink-800 w-32 mt-[-30px] rounded-md`}
                onChange={(e) =>
              setData({
                ...dataa,
                success: false,
                error: {},
                pass: e.target.value,
              })
            }
            value={dataa.old}
            name="pass"
            placeholder="Password"
            autoComplete="off"
            type="password"
            id="pass"
              />
              {!dataa.error ? "" : alert(dataa.error.old, "red")}
            </div>
            <a href="/SignUp"><button onClick={(e) => {goSubmit(e)}} className="h-10 text-extralight ml-[90px] fontFamily: Roboto text-white text-lg w-80 rounded-3xl mt-20 hover:animate-bounce" style={{background: `url(${logo6})`}} type="submit">E&nbsp;N&nbsp;T&nbsp;E&nbsp;R</button></a>
          </form>
          </FormProvider>
        </div>
      </div>
      <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </div>
  )
}

export default DelAcc;
