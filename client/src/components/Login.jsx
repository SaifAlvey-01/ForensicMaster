import React, { useEffect } from "react";
import logo1 from "./../assets/images/bglogin.png";
import logo6 from "./../assets/images/button.png";
import { useState } from "react";
import { loginReq } from "./ProfileFetch";
import { Input } from './input';
import { FormProvider, useForm } from 'react-hook-form';
import {
  email_validation,
  password_validation,
} from './utils/inputValidations';
import { useDispatch } from "react-redux";
import { setUser } from "../state/user/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  useEffect(() => {
    getPlan();
  })

  const navigate = useNavigate()
  const methods = useForm()
  const [success, setSuccess] = useState(false)
  const [data, setData] = useState({
    email: "",
    password: "",
    error: false,
    loading: true,
  });
  const [plan, setPlan] = useState(0);

  const dispatch = useDispatch();
  const getPlan = async () => {
    const emaill = window.localStorage.getItem("email");
    try {
      let res = await axios.post("http://localhost:8000/api/user/getPlan", {
        params: {
          email: emaill
        }
        
      });
      setPlan(res.data.Plan.plan);
      console.log(res.data.Plan.plan);
    } catch (error) {
      console.log(error);
    }
  }
  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    methods.reset()
    setSuccess(true)
    formSubmit(data);
  })


  const alert = (msg) => <div className="text-xs mb-[-50px] ml-[88px] mt-[40px] text-red-500">{msg}</div>;

  const formSubmit = async (data) => {
    setData({
    email: data.email,
    password: data.password,
    error: false,
    loading: true,
  });
    try {
      let responseData = await loginReq({
        email: data.email,
        password: data.password,
      });
      if (responseData.error) {
        setData({
          ...data,
          loading: false,
          error: responseData.error,
          password: "",
        });
      } else if (responseData.token) {
        infom(data.email);
        setData({ email: "", password: "", loading: false, error: false });
        localStorage.setItem("jwt", JSON.stringify(responseData));
        navigate("/Plans");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const infom = (email) => {
    console.log(plan);
    dispatch(setUser({
      email: email,
      plan: plan,
      dark: 0,
    }));
  }

  const goSubmit = (e) => {
    e.preventDefault();
    onSubmit();

  }
  return (
    <div>
      <div className="h-[745px] w-screen md:px-48 lg:px-[430px] py-5" style = {{background: `url(${logo1})`}}>
        <div className="bg-white h-[520px] w-[500px] pt-11 mt-8 rounded-xl">
          <h3 className="font-bold fontFamily:Roboto ml-32 mt-5 mb-3 text-5xl">L&nbsp;O&nbsp;&nbsp;G&nbsp;&nbsp;I&nbsp;&nbsp;N</h3>
          <h3 className="font-extralight text-[#b8c1ca] italic ml-[180px] mb-10 fontFamily:Roboto text-md">New User?&nbsp;<span className="underline hover:text-pink-700"><a href="/SignUp">SignUp</a></span></h3>
          <FormProvider {...methods}>
      <form
        noValidate
        autoComplete="off">  
            <div className="">
              <p className="font-extralight ml-[90px] mb-1 italic text-[#2e3031] fontFamily:Roboto text-sm">Your Email</p>
              <Input {...email_validation} className={`fontFamily: Roboto ${
              !data.error ? "" : "border-red-500"} px-4 py-2 ml-14 h-9 active:border-pink-800 w-32 mt-[-30px] rounded-md`} 
            type="email" name="email" id="email" placeholder='Email'
                onChange={(e) => {
              setData({ ...data, email: e.target.value, error: false });
            }}
              />
              {!data.error ? "" : alert(data.error)}
              <p className="font-extralight mt-14 mb-1 ml-[90px] italic text-[#2e3031] fontFamily:Roboto text-sm">Password</p>
              <Input {...password_validation} className={`fontFamily: Roboto ${
              !data.error ? "" : "border-red-500"} px-4 py-2 ml-14 h-9 active:border-pink-800 w-32 mt-[-30px] rounded-md`} 
            type="password" name="password" id="password" placeholder='Password'
                onChange={(e) => {
              setData({ ...data, email: e.target.value, error: false });
            }}
            />
            {!data.error ? "" : alert(data.error)}
            <h3 className="font-extralight text-[#b8c1ca] italic ml-[315px] mt-12 fontFamily:Roboto text-sm"><span className="underline hover:text-pink-700"><a href="/ForgotPass">Forgot Password?</a></span></h3>
            </div>
            <button onClick={(e) => goSubmit(e)} className="h-10 text-extralight ml-[90px] fontFamily: Roboto text-white text-lg w-80 rounded-3xl mt-10 hover:animate-bounce" style={{background: `url(${logo6})`}} type="submit">L&nbsp;O&nbsp;G&nbsp;I&nbsp;N</button>
          </form>
          </FormProvider>
        </div>
      </div>
    </div>
  )
}

export default Login;
