import { Router, useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import Blog from "../components/blog";

export default function Search() {
  const router = useRouter();
  const { query } = router;

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
      if (!router.isReady) return;
    async function fetchData() {

        var toSearch = 's' in query;
        var reqParams = toSearch ? "?s=" + query.s : "";

        setLoading(true);
        const res1 = await fetch('/api/blog' + reqParams)
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
        <span className="inline text-gray-500 font-bold">Blog</span>
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
      <div id="main" className="w-9/12 grid grid-cols-12 gap-8">
          <div id="sidebar" className="col-span-3">
              <div className="rounded-md border-[2px] border-gray-100 p-5">
                  <p className="text-2xl mb-4">Filter</p>

                  <p className="font-bold">Sectors</p>

                  <div className="grid grid-cols-12 gap-2">
                    <div><input type="checkbox" id="horns" name="horns" /></div>
                    <div className="col-span-9"><span>Software development</span></div>
                    <div className="text-gray-400">12</div>
                  </div>

                  <div className="grid grid-cols-12 gap-2">
                    <div><input type="checkbox" id="horns" name="horns" /></div>
                    <div className="col-span-9"><span>Cyber-security</span></div>
                    <div className="text-gray-400">5</div>
                  </div>

                  <div className="grid grid-cols-12 gap-2">
                    <div><input type="checkbox" id="horns" name="horns" /></div>
                    <div className="col-span-9"><span>Database admin</span></div>
                    <div className="text-gray-400">2</div>
                  </div>

                  <div className="grid grid-cols-12 gap-2">
                    <div><input type="checkbox" id="horns" name="horns" /></div>
                    <div className="col-span-9"><span>Artificial intelligence</span></div>
                    <div className="text-gray-400">2</div>
                  </div>

                  <div className="grid grid-cols-12 gap-2">
                    <div><input type="checkbox" id="horns" name="horns" /></div>
                    <div className="col-span-9"><span>Machine learning</span></div>
                    <div className="text-gray-400">4</div>
                  </div>

                  <div className="grid grid-cols-12 gap-2">
                    <div><input type="checkbox" id="horns" name="horns" /></div>
                    <div className="col-span-9"><span>Networking</span></div>
                    <div className="text-gray-400">14</div>
                  </div>

                   <p className="font-bold mt-3">Resources</p>

                  <div className="grid grid-cols-12 gap-2">
                    <div><input type="checkbox" id="horns" name="horns" /></div>
                    <div className="col-span-9"><span>Employement</span></div>
                    <div className="text-gray-400">0</div>
                  </div>

                  <div className="grid grid-cols-12 gap-2">
                    <div><input type="checkbox" id="horns" name="horns" /></div>
                    <div className="col-span-9"><span>Interviews</span></div>
                    <div className="text-gray-400">19</div>
                  </div>

                  <div className="grid grid-cols-12 gap-2">
                    <div><input type="checkbox" id="horns" name="horns" /></div>
                    <div className="col-span-9"><span>Portfolios and CVs</span></div>
                    <div className="text-gray-400">19</div>
                  </div>

                  <p className="font-bold mt-3">Get involved</p>

                  <div className="grid grid-cols-12 gap-2">
                    <div><input type="checkbox" id="horns" name="horns" /></div>
                    <div className="col-span-9"><span>Tutorials</span></div>
                    <div className="text-gray-400">2</div>
                  </div>

                  <div className="grid grid-cols-12 gap-2">
                    <div><input type="checkbox" id="horns" name="horns" /></div>
                    <div className="col-span-9"><span>Courses</span></div>
                    <div className="text-gray-400">9</div>
                  </div>

                  <div className="grid grid-cols-12 gap-2">
                    <div><input type="checkbox" id="horns" name="horns" /></div>
                    <div className="col-span-9"><span>For parents</span></div>
                    <div className="text-gray-400">6</div>
                  </div>

              </div>
          </div>
          <div id="results" className="col-span-9">
              {
                  isLoading ? <p>Loading...</p> :
                  <>
                    <p>{data.length} results</p>
                    { data.map((item) => <Blog data={item} />) }
                  </>
              }
          </div>
      </div>
      </div>
    </>
  );
}
