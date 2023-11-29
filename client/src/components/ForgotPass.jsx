import React from "react";
import logo1 from "./../assets/images/bglogin.png";
import logo6 from "./../assets/images/button.png";
import { useState } from "react";
import { Input } from './input';
import { FormProvider, useForm } from 'react-hook-form';
import {
  email_validation,
} from './utils/inputValidations';
import axios from "axios";
import { useDispatch } from 'react-redux'
import { setUser } from '../state/user/userSlice';

function ForgotPass() {

  const methods = useForm()
  const [success, setSuccess] = useState(false)
  const [data, setData] = useState({
    email: ""
  });

  const dispatch = useDispatch();

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    dispatch(setUser({email: data.email, plan: 0, dark: 0}));
    methods.reset()
    setSuccess(true)
    formSubmit(data);
  })

  const alert = (msg) => <div className="text-xs text-red-500">{msg}</div>;

  const formSubmit = async (data) => {
  
    setData({
      email: data.email,
    });
    try {
      let res = await axios.post("http://localhost:8000/api/user/single-user", {
        params: {
          email: data.email
        }
        
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const goSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }

  return (
    <div>
      <div className="h-[745px] w-screen md:px-48 lg:px-[430px] py-5" style = {{background: `url(${logo1})`}}>
        <div className="bg-white mt-20 h-[390px] w-[500px] pt-11 rounded-xl">
          <h3 className="font-bold fontFamily:Roboto ml-[90px] mb-14 mt-5 text-2xl">F&nbsp;O&nbsp;R&nbsp;G&nbsp;O&nbsp;T&nbsp;&nbsp;&nbsp;P&nbsp;A&nbsp;S&nbsp;S&nbsp;W&nbsp;O&nbsp;R&nbsp;D</h3>
          <FormProvider {...methods}>
      <form
        noValidate
        autoComplete="off"> 
            <div className="">
              <p className="font-extralight ml-[90px] mb-1 italic text-[#2e3031] fontFamily:Roboto text-sm">Your Email</p>
              <Input {...email_validation} className={`${
              !data.error ? "" : "border-red-500"} px-4 py-2 ml-14 h-9 active:border-pink-800 w-32 mt-[-30px] rounded-md`} 
            type="email" name="email" id="email" placeholder='Email'
                onChange={(e) => {
              setData({ ...data, email: e.target.value, error: false });
            }}
              />
              {!data.error ? "" : alert(data.error)}
            </div>
            <a
  href = "/newPass"
><button onClick={(e) => {goSubmit(e)}} className="h-10 text-extralight ml-[90px] fontFamily: Roboto text-white text-lg w-80 rounded-3xl mt-20 hover:animate-bounce" style={{background: `url(${logo6})`}} type="submit">E&nbsp;N&nbsp;T&nbsp;E&nbsp;R</button></a>
          </form>
          </FormProvider>
        </div>
      </div>
    </div>
  )
}
export default ForgotPass;
