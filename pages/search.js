import { Router, useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import Course from "../components/course";

export default function Search() {
  const router = useRouter();
  const { query } = router;

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
      if (!router.isReady) return;
    async function fetchData() {

        var params1 = [];
        if ('c' in query) {
            if (query.c == 'fe') params1.push('further');
            if (query.c == 'he') params1.push('higher');
        }

        //console.log('/api/education?' + params1.join('&'));

        setLoading(true);
        const res1 = await fetch('/api/education?' + params1.join('&'))
        const data1 = await res1.json();
        //console.log(data1);
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
        <span className="inline text-gray-500 dark:text-gray-400 font-bold">Search</span>
      </div>
      <div id="container" className="flex flex-col justify-between align-middle items-center">
      <div id="header">
        <form action="/search" method="get">
          <div className="my-5 sm:mt-8 sm:flex sm:justify-center">
            <div className="flex shadow-md rounded-md">
              <div className="rounded-md">
                <select
                  type="text"
                  name="c"
                  id="category"
                  className="dark:bg-neutral-800 dark:border-neutral-700 focus:ring-indigo-500 focus:border-indigo-500 pl-8 pr-12 sm:text-sm rounded-r-none border-gray-300 rounded-m h-full w-full flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md"
                >
                  <option value="fe" selected={query.c === "fe"}>Further Education</option>
                  <option value="he" selected={query.c === "he"}>Higher Education</option>
                  <option value="ap" selected={query.c === "ap"}>Apprenticeships</option>
                  <option value="we" selected={query.c === "we"}>Work Experience</option>
                  <option value="em" selected={query.c === "em"}>Jobs</option>
                </select>
              </div>
              <div className="rounded-md">
                <input
                  type="text"
                  name="t"
                  id="terms"
                  defaultValue={query.t}
                  className="w-[28rem] dark:bg-neutral-800 dark:border-neutral-700 focus:ring-indigo-500 focus:border-indigo-500 pl-8 pr-12 sm:text-sm rounded-l-none rounded-r-none border-gray-300 rounded-m h-full w-full flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md"
                  placeholder="Keywords"
                />
              </div>
              <div className="rounded-md">
                <select
                  type="text"
                  name="l"
                  id="location"
                  className="dark:bg-neutral-800 dark:border-neutral-700 focus:ring-indigo-500 focus:border-indigo-500 pl-8 pr-12 sm:text-sm rounded-r-none rounded-l-none border-gray-300 rounded-m h-full w-full flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md"
                >
                  <option value="all" selected={query.l === "all"}>Northern Ireland- wide</option>
                  <option value="ant" selected={query.l === "ant"}>Antrim</option>
                  <option value="arm" selected={query.l === "arm"}>Armagh</option>
                  <option value="der" selected={query.l === "der"}>Derry/Londonderry</option>
                  <option value="dow" selected={query.l === "dow"}>Down</option>
                  <option value="fer" selected={query.l === "fer"}>Fermanagh</option>
                  <option value="tyr" selected={query.l === "tyr"}>Tyrone</option>
                </select>
              </div>
              <div className="rounded-md">
                <button
                  href="#"
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-3 rounded-l-none text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
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
              <div className="rounded-md border-[2px] border-gray-100 dark:border-neutral-600 p-5">
                  <p className="text-2xl mb-4">Filter</p>

                  <p className="font-bold">Qualification levels</p>

                  <div className="grid grid-cols-12 gap-2">
                    <div><input type="checkbox" id="horns" name="horns" /></div>
                    <div className="col-span-9"><span>Level 2</span></div>
                    <div className="text-gray-400">12</div>
                  </div>

                  <div className="grid grid-cols-12 gap-2">
                    <div><input type="checkbox" id="horns" name="horns" /></div>
                    <div className="col-span-9"><span>Level 3</span></div>
                    <div className="text-gray-400">5</div>
                  </div>

                  <div className="grid grid-cols-12 gap-2">
                    <div><input type="checkbox" id="horns" name="horns" /></div>
                    <div className="col-span-9"><span>Level 4</span></div>
                    <div className="text-gray-400">2</div>
                  </div>

                  <div className="grid grid-cols-12 gap-2">
                    <div><input type="checkbox" id="horns" name="horns" /></div>
                    <div className="col-span-9"><span>Level 5</span></div>
                    <div className="text-gray-400">2</div>
                  </div>

                   <p className="font-bold mt-3">Course length</p>

                  <div className="grid grid-cols-12 gap-2">
                    <div><input type="checkbox" id="horns" name="horns" /></div>
                    <div className="col-span-9"><span>Part-time</span></div>
                    <div className="text-gray-400">0</div>
                  </div>

                  <div className="grid grid-cols-12 gap-2">
                    <div><input type="checkbox" id="horns" name="horns" /></div>
                    <div className="col-span-9"><span>Full-time</span></div>
                    <div className="text-gray-400">19</div>
                  </div>

                  <p className="font-bold mt-3">Opportunities</p>

                  <div className="grid grid-cols-12 gap-2">
                    <div><input type="checkbox" id="horns" name="horns" /></div>
                    <div className="col-span-9"><span>Apprenticeship</span></div>
                    <div className="text-gray-400">2</div>
                  </div>

              </div>
          </div>
          <div id="results" className="col-span-9">
              {
                  isLoading ? <p>Loading...</p> :
                  <>
                    <p>{data.length} results</p>
                    { data.map((item) => <Course title={item.title} level={item.level} code={item.code} campus={item.campus} time={item.time} school={item.school} url={item.url} apprenticeship={item.apprenticeship} type={item.type} image={item.image} />) }
                  </>
              }
          </div>
      </div>
      </div>
    </>
  );
}
