import React, { useState } from "react";
import logo1 from "./../assets/images/bgsignup.png";
import logo6 from "./../assets/images/button.png";
import { signupReq } from "./ProfileFetch";
import { Input } from './input';
import { FormProvider, useForm } from 'react-hook-form';
import {
  name_validation,
  email_validation,
  password_validation,
} from './utils/inputValidations';

function SignUp() {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
    error: false,
    loading: false,
    success: false,
  });


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
    formSubmit(data);
  })

  const alert = (msg, type) => (
    <p className={`text-xs ml-[88px] mt-[40px] text-${type}-500`}>{msg}</p>
  );

  const formSubmit = async (data) => {
    console.log(data);
    setData({ name: data.name,
    email: data.email,
    password: data.password,
    cPassword: data.cPassword,
    error: false,
    loading: true,
    success: false,
  });
    if (data.cPassword !== data.password) {
      return setData({
        ...data,
        error: {
          cPassword: "Password doesn't match",
          password: "Password doesn't match",
        },
      });
    }
    try {
      let responseData = await signupReq({
        name: data.name,
        email: data.email,
        password: data.password,
        cPassword: data.cPassword,
      });
      if (responseData.error) {
        setData({
          ...data,
          loading: false,
          error: responseData.error,
          password: "",
          cPassword: "",
        });
      } else if (responseData.success) {
        setData({
          success: responseData.success,
          name: "",
          email: "",
          password: "",
          cPassword: "",
          loading: false,
          error: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <div>
      <div className="h-[745px] w-screen md:px-48 lg:px-[430px] py-5" style = {{background: `url(${logo1})`}}>
        <div className="bg-white h-[700px] w-[500px] pt-16 rounded-xl">
          <h3 className="font-bold fontFamily:Roboto ml-24 mt-5 mb-3 text-5xl">S&nbsp;&nbsp;I&nbsp;&nbsp;G&nbsp;&nbsp;N&nbsp;&nbsp;U&nbsp;&nbsp;P</h3>
          <h3 className="font-extralight text-[#b8c1ca] italic ml-[180px] mb-10 fontFamily:Roboto text-md">Already a User?&nbsp;<span className="underline hover:text-pink-700"><a href="/Login">Login</a></span></h3>
          <FormProvider {...methods}>
      <form
        noValidate
        onSubmit={goSubmit}
        autoComplete="off">   
        {data.success ? alert(data.success, "green") : ""}
            <div className="">
              <p className="font-extralight ml-[90px] mt-[-15px] mb-1 italic text-[#2e3031] fontFamily:Roboto text-sm">Username</p>
              <Input {...name_validation} className={`${data.error.name ? "ml-[55px] border-red-500" : ""} fontFamily: Roboto px-4 py-2 ml-14 h-9 active:border-pink-800 w-32 mt-[-30px] rounded-md`}
              type="text" name="name" id="name" placeholder="Name" autoComplete="off"
              onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                name: e.target.value,
              })
            }
            value={data.name}
            />
            
              <p className="font-extralight mt-14 ml-[90px] mb-1 italic text-[#2e3031] fontFamily:Roboto text-sm">Email</p>
              <Input {...email_validation} className={`${
              data.error.email ? "border-red-500 mb-[40px]" : ""
            } fontFamily: Roboto px-4 py-2 ml-14 h-9 active:border-pink-800 w-32 mt-[-30px] rounded-md`} type="email" name="email" id="email" placeholder="Email" autoComplete="off"
              onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                email: e.target.value,
              })
            }
            value={data.email}
            />
            {!data.error ? "" : alert(data.error.email, "red")}
              <p className="font-extralight mt-14 mb-1 ml-[90px] italic text-[#2e3031] fontFamily:Roboto text-sm">Password</p>
              <Input {...password_validation} className={` fontFamily: Roboto px-4 py-2 ml-14 h-9 active:border-pink-800 w-32 mt-[-30px] rounded-md ${
              data.error.password ? "border-red-500 mb-[40px]" : ""
            }`}
                onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                password: e.target.value,
              })
            }
            value={data.password}
            name="password"
            placeholder="Password"
            autoComplete="off"
            type="password"
            id="password"
              />
              {!data.error ? "" : alert(data.error.password, "red")}
              <p className="font-extralight mt-14 mb-1 ml-[90px] italic text-[#2e3031] fontFamily:Roboto text-sm">Confirm Password</p>
              <Input {...password_validation} className={`fontFamily: Roboto px-4 py-2 ml-14 h-9 active:border-pink-800 w-32 mt-[-30px] rounded-md ${
              data.error.cPassword ? "border-red-500 mb-[40px]" : ""
            }`}
              onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                cPassword: e.target.value,
              })
            }
            value={data.cPassword}
            name="cPassword"
            placeholder="Retype Password"
            autoComplete="off"
            type="password"
            id="cPassword"
              />
              {!data.error ? "" : alert(data.error.cPassword, "red")}
            </div>
            <button className="h-10 text-extralight ml-[90px] fontFamily: Roboto text-white text-lg w-80 rounded-3xl mt-20 hover:animate-bounce" style={{background: `url(${logo6})`}} type="submit">S&nbsp;I&nbsp;G&nbsp;N&nbsp;U&nbsp;P</button>
          </form>
          </FormProvider>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
