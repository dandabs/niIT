import { Router, useRouter } from "next/router";
import React, { useState, useEffect } from 'react';

export default function Profile() {
  const router = useRouter();
  const { query } = router;

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
      if (!router.isReady) return;
    async function fetchData() {

        setLoading(true);
        const res1 = await fetch('/api/blog')
        const data1 = await res1.json();

        setData(data1);
        setLoading(false);
      }
      fetchData();
  }, [router.isReady]);

  return (
    <>
      <div id="nav" className="py-2 px-8 bg-gray-50 border-gray-100 border-b-2">
        <span className="inline font-bold">Home</span>
        <span className="px-4 inline text-gray-500 font-bold">{">"}</span>
        <span className="inline text-gray-500 font-bold">Account</span>
        <span className="px-4 inline text-gray-500 font-bold">{">"}</span>
        <span className="inline text-gray-500 font-bold">Profile</span>
      </div>
      <div id="container" className="flex flex-col justify-between align-middle items-center">
      <div id="main" className="w-9/12">

      </div>
      </div>
    </>
  );
}
