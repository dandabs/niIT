import { Router, useRouter } from "next/router";
import React, { useState, useEffect } from 'react';

import 'react-quill/dist/quill.snow.css'

import parse from 'html-react-parser';
import { ChatIcon, ClockIcon } from "@heroicons/react/outline";

import { SiGithub } from 'react-icons/si';

import aes from "crypto-js/aes";

import cookieCutter from 'cookie-cutter';

export default function Signin() {

  const tryLogin = async (e, user, pass) => {
    const res = await fetch(`/api/verifyuser?user=${user}&pass=${aes.encrypt(pass,'insecurehashxoxo')}`);
    const data = await res.json();
    const success = data.status;

      if (!success) {
        alert('Your username or password is incorrect. Try again?')
      } else {
        cookieCutter.set('session', user + "::" + aes.encrypt(pass,'insecurehashxoxo'))
        window.location.href = '/account/profile';

    }
  }

  return (
    <>
      <div id="nav" className="py-2 px-8 bg-gray-50 border-gray-100 border-b-2">
        <span className="inline font-bold">Home</span>
        <span className="px-4 inline text-gray-500 font-bold">{">"}</span>
        <span className="inline text-gray-500 font-bold">Account</span>
        <span className="px-4 inline text-gray-500 font-bold">{">"}</span>
        <span className="inline text-gray-500 font-bold">Sign up</span>
      </div>
      <div id="container" className="flex flex-col justify-center align-middle items-center h-full" style={{
        backgroundImage: 'url("https://smartbelfast.city/wp-content/uploads/2019/06/Belfast-Skyline.jpg")',
        height: 'calc(100vh - 134px)',
        width: '100vw',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
      }}>
      <div id="main" className="w-1/3 rounded-lg bg-white p-5 shadow-2xl">
        <div className="flex justify-center">
          <span className="text-3xl font-semibold text-gray-700 mt-5">Sign in to findIT</span>
        </div>
        <div className="flex justify-center mt-12">
          <div className="bg-black rounded-2xl text-white flex justify-center items-center p-2 w-2/3">
            <SiGithub className="text-lg" />
            <span className="text-lg ml-3 pt-1">Sign in using GitHub</span>
          </div>
        </div>
        <div className="flex justify-center mt-12 flex-col items-center">
          <p className="float-left">Username</p>
          <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-200 w-2/3 rounded-2xl focus:ring-indigo-500 focus:border-indigo-500 pl-8 pr-12 sm:text-sm border-gray-400 h-full flex items-center justify-center px-8 py-3 border text-base font-medium"
            />

            <p className="float-left mt-4">Password</p>
            <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-200 w-2/3 rounded-2xl focus:ring-indigo-500 focus:border-indigo-500 pl-8 pr-12 sm:text-sm border-gray-400 h-full flex items-center justify-center px-8 py-3 border text-base font-medium"
            />

            <button className="bg-neutral-900 rounded-2xl w-2/3 mt-4 text-white py-3" onClick={(e) => tryLogin(e, document.getElementById('username').value, document.getElementById('password').value)}>
              Register
            </button>
            <p className="mt-12 mb-2">Don't have an account? Sign up <a href="/register" className="text-red-600">here</a>.</p>
        </div>
      </div>
      </div>
    </>
  );
}
