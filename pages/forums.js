import { AcademicCapIcon, BriefcaseIcon, CashIcon, ChatIcon, CodeIcon, FireIcon, GlobeIcon, ServerIcon, SunIcon } from "@heroicons/react/outline";
import { Router, useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import Blog from "../components/blog";
import Forum from "../components/forum";

import { SiHtml5, SiNodedotjs, SiJava, SiPython, SiCplusplus, SiRuby } from 'react-icons/si';

export default function Search() {
  const router = useRouter();
  const { query } = router;

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;
  async function fetchData() {

      const res1 = await fetch('/api/blog')
      const data1 = await res1.json();

      setData([data1[0], data1[1], data1[2]]);
    }
    fetchData();
}, [router.isReady]);

  var categories = [
    {
      "id": "main",
      "name": "Main Category",
      "forums": [
        {
          "id": "general",
          "name": "General Discussion",
          "description": "Maecenas efficitur tincidunt libero, eget hendrerit ante tincidunt nec. Mauris eu dapibus sapien.",
          "icon": ChatIcon
        },
        {
          "id": "cybersec",
          "name": "Cyber-security",
          "description": "Maecenas porta tristique lacinia. Sed elit ex, tristique vitae egestas vel, scelerisque ac eros.",
          "icon": FireIcon
        },
        {
          "id": "software",
          "name": "Software Engineering",
          "description": "Maecenas efficitur tincidunt libero, eget hendrerit ante tincidunt nec. Mauris eu dapibus sapien.",
          "icon": CodeIcon
        },
        {
          "id": "network",
          "name": "Networking",
          "description": "Maecenas efficitur tincidunt libero, eget hendrerit ante tincidunt nec. Mauris eu dapibus sapien.",
          "icon": GlobeIcon
        },
        {
          "id": "cybersec",
          "name": "System Administration",
          "description": "Maecenas porta tristique lacinia. Sed elit ex, tristique vitae egestas vel, scelerisque ac eros.",
          "icon": ServerIcon
        },
      ]
    },
    {
      "id": "code",
      "name": "Development",
      "forums": [
        {
          "id": "html",
          "name": "HTML, CSS, JS",
          "description": "Maecenas efficitur tincidunt libero, eget hendrerit ante tincidunt nec. Mauris eu dapibus sapien.",
          "icon": SiHtml5
        },
        {
          "id": "node",
          "name": "NodeJS",
          "description": "Maecenas porta tristique lacinia. Sed elit ex, tristique vitae egestas vel, scelerisque ac eros.",
          "icon": SiNodedotjs
        },
        {
          "id": "java",
          "name": "Java",
          "description": "Maecenas efficitur tincidunt libero, eget hendrerit ante tincidunt nec. Mauris eu dapibus sapien.",
          "icon": SiJava
        },
        {
          "id": "python",
          "name": "Python",
          "description": "Maecenas efficitur tincidunt libero, eget hendrerit ante tincidunt nec. Mauris eu dapibus sapien.",
          "icon": SiPython
        },
        {
          "id": "cplusplus",
          "name": "C++",
          "description": "Maecenas porta tristique lacinia. Sed elit ex, tristique vitae egestas vel, scelerisque ac eros.",
          "icon": SiCplusplus
        },
        {
          "id": "ruby",
          "name": "Ruby",
          "description": "Maecenas porta tristique lacinia. Sed elit ex, tristique vitae egestas vel, scelerisque ac eros.",
          "icon": SiRuby
        },
      ]
    },
    {
      "id": "employment",
      "name": "Employment",
      "forums": [
        {
          "id": "interviews",
          "name": "Interviews",
          "description": "Maecenas efficitur tincidunt libero, eget hendrerit ante tincidunt nec. Mauris eu dapibus sapien.",
          "icon": BriefcaseIcon
        },
        {
          "id": "salary",
          "name": "Salaries",
          "description": "Maecenas porta tristique lacinia. Sed elit ex, tristique vitae egestas vel, scelerisque ac eros.",
          "icon": CashIcon
        },
        {
          "id": "general",
          "name": "General",
          "description": "Maecenas efficitur tincidunt libero, eget hendrerit ante tincidunt nec. Mauris eu dapibus sapien.",
          "icon": ChatIcon
        },
      ]
    }
  ]

  return (
    <>
      <div id="nav" className="py-2 px-8 bg-gray-50 border-gray-100 border-b-2">
        <span className="inline font-bold">Home</span>
        <span className="px-4 inline text-gray-500 font-bold">{">"}</span>
        <span className="inline text-gray-500 font-bold">Forums</span>
      </div>
      <div id="container" className="flex flex-col justify-between align-middle items-center">
      <div id="header">
        <form action="/blog" method="get">
          <div className="my-5 sm:mt-8 sm:flex sm:justify-center">
            <div className="flex shadow-md rounded-md">
              <div className="rounded-md">
                <input
                  type="text"
                  name="s"
                  id="terms"
                  defaultValue={query.t}
                  className="w-[57rem] focus:ring-indigo-500 focus:border-indigo-500 pl-8 pr-12 sm:text-sm rounded-r-none border-gray-300 rounded-m h-full flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md"
                  placeholder="Keywords"
                />
              </div>
              <div className="rounded-md">
                <button
                  href="#"
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-3 border rounded-l-none text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div id="main" className="w-9/12 grid grid-cols-12 gap-8 mt-4">
          <div id="results" className="col-span-9">
              {
                  isLoading ? <p>Loading...</p> :
                  <>
                    { categories.map((item) => <Forum data={item} />) }
                  </>
              }
          </div>
          <div id="sidebar" className="col-span-3">
              <div className="rounded-md border-[2px] border-gray-100 p-5">
                  <p className="text-2xl mb-4">Recent Posts</p>

                  {/* className="mb-2">Join the Kainos Amongus Server for more information and to talk to industry professionals!</p>*/}

                  {
                    data.map((post) => (
                      <div className="mb-2">
                        <a href={"/blog/" + post.id}><p className="font-semibold">{post.title}</p></a>
                        <a href={"/@" + post.username}><p className="text-gray-500">by <span className="text-red-600">{post.displayname}</span></p></a>
                        <p className="text-gray-500">{new Date(post.time).toLocaleDateString()} at {new Date(post.time).toLocaleTimeString()}</p>
                      </div>
                    ))
                  }

              </div>

              <div className="rounded-md border-[2px] border-gray-100 p-5 mt-3">
                  <p className="text-2xl mb-4">Community</p>

                  {/* className="mb-2">Join the Kainos Amongus Server for more information and to talk to industry professionals!</p>*/}

                  <iframe className="w-full" src="https://discord.com/widget?id=1006198736248123504&theme=light" height="600" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

              </div>

          </div>
      </div>
      </div>
    </>
  );
}
