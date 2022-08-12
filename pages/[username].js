import { Router, useRouter } from "next/router";
import React, { useState, useEffect } from 'react';

import 'react-quill/dist/quill.snow.css'

import parse from 'html-react-parser';
import { ChatIcon, ClockIcon } from "@heroicons/react/outline";

import { SiTwitter, SiInstagram, SiLinkedin, SiGlitch, SiDiscord } from 'react-icons/si';

export default function BlogPost() {
  const router = useRouter();
  const { query } = router;

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
      if (!router.isReady) return;
    async function fetchData() {

        setLoading(true);
        const res1 = await fetch('/api/getuser?user=' + query.username)
        var data1 = await res1.json();
        data1 = data1[0];

        data1.pfp = 'data:image/jpeg;base64,' + Buffer.from(data1.photo).toString('base64');

        setData(data1);
        setLoading(false);

      }
      fetchData();
  }, [router.isReady]);

  return (
    <>
      <div id="nav" className="py-2 px-8 bg-gray-50 border-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border-b-2">
        <span className="inline font-bold">Home</span>
        <span className="px-4 inline text-gray-500 dark:text-gray-400 font-bold">{">"}</span>
        <span className="inline text-gray-500 dark:text-gray-400 font-bold">Blog</span>
        <span className="px-4 inline text-gray-500 dark:text-gray-400 font-bold">{">"}</span>
        <span className="inline text-gray-500 dark:text-gray-400 font-bold">{data.title}</span>
      </div>
      <div id="container" className="flex flex-col justify-between align-middle items-center">
      <div id="header" className="pt-10 pb-5 w-11/12 lg:w-9/12">
          <img src={data.pfp} className="h-36 w-36 object-cover rounded-full mt-4 mb-2" />
          <h1 className="font-extrabold text-4xl">{data.displayname}</h1>
          <span className="font-light text-2xl">{data.username}</span>
      </div>
      <div id="main" className="w-11/12 lg:w-9/12">
        <p>
        {data.bio}
        </p>

        <div className="flex items-center mt-4 mb-24">
            <a href={""}><SiTwitter className="text-gray-300 hover:text-gray-400 text-5xl mx-2" /></a>
            <a href={""}><SiInstagram className="text-gray-300 hover:text-gray-400 text-5xl mx-2" /></a>
            <a href={""}><SiLinkedin className="text-gray-300 hover:text-gray-400 text-5xl mx-2" /></a>
            <a href={""}><SiGlitch className="text-gray-300 hover:text-gray-400 text-5xl mx-2" /></a>
            <a href={""}><SiDiscord className="text-gray-300 hover:text-gray-400 text-5xl mx-2" /></a>
        </div>

        <span className="text-xl font-semibold">{data.displayname} has attended the following events:</span>
        <div className="flex flex-row mt-2 items-center">
          <img className="w-12" src="https://imgs.search.brave.com/RdG2XafjX4FTM0V7lddEdnGWq3xaWunSwo8YKjUyR9w/rs:fit:500:500:1/g:ce/aHR0cHM6Ly93d3cu/YW1iaW9uaWNzLmNv/LnVrL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzA1L2thaW5v/cy1sb2dvLmpwZw" />
          <span className="ml-3 italic">Kainos Work Experience 2021 (confirmed)</span>
        </div>
        <div className="flex flex-row mt-2 items-center">
          <img className="w-12" src="https://imgs.search.brave.com/RdG2XafjX4FTM0V7lddEdnGWq3xaWunSwo8YKjUyR9w/rs:fit:500:500:1/g:ce/aHR0cHM6Ly93d3cu/YW1iaW9uaWNzLmNv/LnVrL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzA1L2thaW5v/cy1sb2dvLmpwZw" />
          <span className="ml-3 italic">Kainos CodeCamp 2021 (confirmed)</span>
        </div>
        <div className="flex flex-row mt-2 items-center">
          <img className="w-12" src="https://imgs.search.brave.com/NKlGpXtVciOzNZu3nIAC0ZgasAGhY_NTR1CVDRpfvVY/rs:fit:259:254:1/g:ce/aHR0cHM6Ly93d3cu/Zmlyc3RjYW1wdXMu/b3JnL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE5LzEwL2N5YmVy/Zmlyc3QtbG9nby5q/cGc" />
          <span className="ml-3 italic">Cyberfirst Futures 2021 (confirmed)</span>
        </div>
        <div className="flex flex-row mt-2 items-center">
          <img className="w-12" src="https://imgs.search.brave.com/RdG2XafjX4FTM0V7lddEdnGWq3xaWunSwo8YKjUyR9w/rs:fit:500:500:1/g:ce/aHR0cHM6Ly93d3cu/YW1iaW9uaWNzLmNv/LnVrL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzA1L2thaW5v/cy1sb2dvLmpwZw" />
          <span className="ml-3 italic">Kainos CodeCamp 2022 (confirmed)</span>
        </div>
        <div className="flex flex-row mt-2 items-center">
          <img className="w-12" src="https://imgs.search.brave.com/NKlGpXtVciOzNZu3nIAC0ZgasAGhY_NTR1CVDRpfvVY/rs:fit:259:254:1/g:ce/aHR0cHM6Ly93d3cu/Zmlyc3RjYW1wdXMu/b3JnL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE5LzEwL2N5YmVy/Zmlyc3QtbG9nby5q/cGc" />
          <span className="ml-3 italic">Cyberfirst Advanced 2022 (confirmed)</span>
        </div>

      </div>
        
        
      </div>
    </>
  );
}
