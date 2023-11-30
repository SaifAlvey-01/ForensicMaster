import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import image from "../assets/images/bgpayment.png";
import { PhoneFilled, MailFilled, EnvironmentFilled } from '@ant-design/icons';
import logo from "./../assets/images/button.png";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { Input } from './input';
import { FormProvider, useForm } from 'react-hook-form';
import {
  email_validation,
  desc_validation,
  name_validation,
  num_validation
} from './utils/inputValidations';
import { useNavigate } from 'react-router-dom';


function ContactUs() {

  const navigate = useNavigate()
  useEffect(() => {
  
    if (window.localStorage.getItem("email") == "x"){
      navigate('/')
    }
    else if (window.localStorage.getItem("email") != "x"){
      if (window.localStorage.getItem("plan") <= 0){
        navigate("/Plans")
        }}
  })

  const methods = useForm()
  const [success, setSuccess] = useState(false)

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    methods.reset()
    setSuccess(true)
  })

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    onSubmit();
    emailjs.sendForm('service_pecke2l', 'template_ysuqmmp', form.current, 'pC2veGfo4K66ngFBd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
    <Navbar />
    <div className="bg-white w-screen h-screen md:flex">
      <div className="m-2 w-screen pr-20 md:pr-0 md:w-72 lg:w-96 h-screen rounded-lg" style={{ background: `url(${image})`, backgroundPosition: 'center' }}>
        <div className="">
          <h3 className="fontFamily:Roboto pt-10 ml-4 mb-1 text-white text-2xl lg:text-3xl">Contact Information</h3>
          <h3 className="fontFamily:Roboto mt-2 ml-4 mb-5 text-white text-md">Give Feedbacks & Suggestions</h3>
          <div className="">
              <h3 className="flex fontFamily:Roboto ml-4 mt-12 mr-96 md:ml-4 text-white text-md"><span className="mr-10 mt-[-4px]"><PhoneFilled /></span>+92&nbsp;321&nbsp;5196497</h3>
              <h3 className="flex fontFamily:Roboto ml-4 mt-12 mr-[387px] md:ml-4 text-white text-md"><span className="mr-10 mt-[-4px]"><MailFilled /></span>help@forensicmaster.com</h3>
              <h3 className="flex fontFamily:Roboto ml-4 mt-12 mr-[15px] md:ml-4 text-white text-md"><span className="mr-10 mt-[-4px]"><EnvironmentFilled /></span>Comsats University Islamabad Campus, Park Road Islamabad, Pakistan</h3>
          </div>
        </div>
      </div>
      <div className="mt-12">
      <h3 className="font-bold fontFamily:Roboto ml-14 mb-7 text-3xl">Feedback & Suggestion</h3>
      <FormProvider {...methods}>
      <form
        ref={form} onSubmit={sendEmail}
        noValidate
        autoComplete="off" className="mr-14 lg:mr-0">
          <div className="flex">
            <p className="font-extralight ml-[60px] mb-1 italic text-[#2e3031] fontFamily:Roboto text-sm">First Name</p>
            <p className="font-extralight ml-60 lg:ml-[383px] mb-1 italic text-[#2e3031] fontFamily:Roboto text-sm">Last Name</p>
          </div>
          <div className="flex">
            <Input {...name_validation} className=" px-4 py-2 ml-7 h-9 active:border-pink-800 w-[250px] lg:w-96 mt-[-30px] rounded-md" type="text" name="user_name" id="fname" placeholder="First Name"/>
            <Input {...name_validation} className=" px-4 py-2 ml-16 h-9 active:border-pink-800 w-[250px] lg:w-96 mt-[-30px] rounded-md" type="text" name="lname" id="lname" placeholder="Last Name"/>
          </div>
          <div className="flex">
            <p className="font-extralight ml-[60px] mb-1 italic mt-14 text-[#2e3031] fontFamily:Roboto text-sm">Email</p>
            <p className="font-extralight ml-[270px] lg:ml-[415px] mt-14 mb-1 italic text-[#2e3031] fontFamily:Roboto text-sm">Phone</p>
          </div>
          <div className="flex">
            <Input {...email_validation} className=" px-4 py-2 ml-7 h-9 active:border-pink-800 w-[250px] lg:w-96 mt-[-30px] rounded-md" type="email" name="user_email" id="email" placeholder="Email"/>
            <Input {...num_validation} className=" px-4 py-2 ml-16 h-9 active:border-pink-800 w-[250px] lg:w-96 mt-[-30px] rounded-md" type="tel" name="user_phone" id="phone" placeholder="Phone"/>
          </div>
          <p className="font-extralight ml-[60px] mb-1 italic mt-14 text-[#2e3031] fontFamily:Roboto text-sm">Subject</p>
          <Input {...name_validation} className=" px-4 py-2 ml-7 h-9 active:border-pink-800 w-[250px] lg:w-96 mt-[-30px] rounded-md" type="text" name="user_subject" id="subject" placeholder="Subject"/>
          <p className="font-extralight ml-[60px] mb-1 italic mt-14 text-[#2e3031] fontFamily:Roboto text-sm">Message</p>
          <Input {...desc_validation} className=" px-4 py-2 ml-7 h-9 active:border-pink-800 w-[615px] lg:w-[838px] mt-[-30px] rounded-md" type="text" name="message" id="msg" placeholder="Write descriptive message here"/>
          <a href="/Plans"><button value="Send" className=" mt-48 h-10 text-extralight ml-36 mb-5 lg:ml-[480px] fontFamily: Roboto text-white text-lg w-96 rounded-3xl font-semibold hover:animate-bounce" style={{background: `url(${logo})`}} type="submit">S&nbsp;E&nbsp;N&nbsp;D</button></a>
        </form>
        </FormProvider>
      </div>
    </div>
    </div>
  )
}

export default ContactUs;
