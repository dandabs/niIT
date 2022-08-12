import { Router, useRouter } from "next/router";
import React, { useState, useEffect } from 'react';

import cookieCutter from 'cookie-cutter';

export default function Profile() {
  const router = useRouter();
  const { query } = router;

  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
      if (!router.isReady) return;
    async function fetchData() {

        setLoading(true);
        const res1 = await fetch('/api/getuser?user=' + cookieCutter.get("session").split("::")[0])
        const data1 = await res1.json();

        //console.log()

        setData(data1);
        setLoading(false);
      }
      fetchData();
  }, [router.isReady]);

  if (typeof data[0] == 'undefined') return <></>;

  const saveProfile = async (e, username, displayname, bio) => {
    await fetch(`/api/saveprofile?user=${username}&displayname=${displayname}&bio=${bio}`);

    window.location.reload();

  }

  return (
    <>
      <div id="nav" className="py-2 px-8 bg-gray-50 border-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border-b-2">
        <span className="inline font-bold">Home</span>
        <span className="px-4 inline text-gray-500 dark:text-gray-400 font-bold">{">"}</span>
        <span className="inline text-gray-500 dark:text-gray-400 font-bold">Account</span>
        <span className="px-4 inline text-gray-500 dark:text-gray-400 font-bold">{">"}</span>
        <span className="inline text-gray-500 dark:text-gray-400 font-bold">Profile</span>
      </div>
      <div id="container" className="flex flex-col justify-between align-middle items-center bg-neutral-200 dark:bg-neutral-900" style={{
          height: 'calc(100vh - 134px)',
          width: '100vw',
      }}>
      <div id="main" className="w-9/12">
          <div className="mt-8 w-full bg-white dark:bg-neutral-800 rounded-md p-5 shadow-xl">
              <div>
                  <span className="text-xl font-semibold">Profile settings</span>
                  <p className="text-neutral-600 dark:text-neutral-400">Update your main public profile settings using the fields below. You can view your public profile page <a href={"/@" + data[0].username} className="text-red-600">here</a>!</p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-4">
                  <div className="flex flex-col">
                      <a className="font-bold text-lg">Username</a>
                      <input readOnly={true} defaultValue={data[0].username} type="text" name="username" id="username" className="dark:bg-neutral-700 w-full rounded-2xl focus:ring-indigo-500 focus:border-indigo-500 pl-8 pr-12 sm:text-sm border-gray-400 dark:border-neutral-500 h-full px-8 py-3 border font-medium" />
                  </div>
                  <div className="flex flex-col">
                      <a className="font-bold text-lg">Display name</a>
                      <input defaultValue={data[0].displayname} type="text" name="displayname" id="displayname" className="dark:bg-neutral-700 w-full rounded-2xl focus:ring-indigo-500 focus:border-indigo-500 pl-8 pr-12 sm:text-sm border-gray-400 dark:border-neutral-500 h-full px-8 py-3 border font-medium" />
                  </div>
              </div>

              <div className="flex flex-col mt-4">
                      <a className="font-bold text-lg">Biography</a>
                      <input defaultValue={data[0].bio} type="text" name="bio" id="bio" className="dark:bg-neutral-700 w-full rounded-2xl focus:ring-indigo-500 focus:border-indigo-500 pl-8 pr-12 sm:text-sm border-gray-400 dark:border-neutral-500 h-full px-8 py-3 border font-medium" />
                </div>

                <div className="flex flex-col mt-4 justify-end items-end">
                <button
                  href="#"
                  type="submit"
                  className="w-1/12 flex items-center justify-center px-8 py-1 text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-700 md:py-2 md:text-lg md:px-10"
                  onClick={(e) => saveProfile(e, document.getElementById('username').value, document.getElementById('displayname').value, document.getElementById('bio').value)}
                >
                  Save
                </button>
                </div>

          </div>
      </div>
      </div>
    </>
  );
}
