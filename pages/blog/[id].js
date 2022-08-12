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
        const res1 = await fetch('/api/blog?p=' + query.id)
        const data1 = await res1.json();

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
      <div id="header" className="pt-10 pb-5 w-9/12">
          <h1 className="font-extrabold text-4xl">{data.title}</h1>
          <div className="flex flex-row">
              <div className="flex mr-4">
                <ChatIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <p className="ml-1 text-gray-500 dark:text-gray-400">{data.displayname}</p>
              </div>
              <div className="flex mr-4">
                <ClockIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <p className="ml-1 text-gray-500 dark:text-gray-400">{new Date(data.time).getDate()}/{new Date(data.time).getMonth() + 1}/{new Date(data.time).getFullYear()}</p>
              </div>
          </div>
      </div>
      <div id="main" className="w-9/12">
          <div id="post" className="col-span-9">
              {
                  isLoading ? <p>Loading...</p> : parse(data.content)
              }
          </div>
      </div>
        <hr className="w-9/12 my-12" />
        <span className="text-3xl font-bold">About the author</span>
        <img src={data.pfp} className="h-36 w-36 object-cover rounded-full mt-4 mb-2" />
        <span className="font-bold text-xl">{data.displayname}</span>
        <a href={"/@" + data.username} className="text-red-600 font-semibold">Visit profile</a>
        <span>{data.bio}</span>
        <div className="flex items-center mt-4 mb-12">
            <a href={""}><SiTwitter className="text-gray-300 hover:text-gray-400 text-5xl mx-2" /></a>
            <a href={""}><SiInstagram className="text-gray-300 hover:text-gray-400 text-5xl mx-2" /></a>
            <a href={""}><SiLinkedin className="text-gray-300 hover:text-gray-400 text-5xl mx-2" /></a>
            <a href={""}><SiGlitch className="text-gray-300 hover:text-gray-400 text-5xl mx-2" /></a>
            <a href={""}><SiDiscord className="text-gray-300 hover:text-gray-400 text-5xl mx-2" /></a>
        </div>
      </div>
    </>
  );
}
