import { Router, useRouter } from "next/router";

export default function Search() {
  const { query } = useRouter();

  return (
    <>
      <div id="nav" className="py-2 px-8 bg-gray-50 border-gray-100 border-b-2">
        <span className="inline font-bold">Home</span>
        <span className="px-4 inline text-gray-500 font-bold">{">"}</span>
        <span className="inline text-gray-500 font-bold">Search</span>
      </div>
      <div id="header">
        <form action="/search" method="get">
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
            <div className="flex shadow-lg rounded-md">
              <div className="rounded-md">
                <select
                  type="text"
                  name="c"
                  id="category"
                  className="focus:ring-indigo-500 focus:border-indigo-500 pl-4 pr-7 sm:text-sm rounded-r-none border-gray-300 rounded-m h-full w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md"
                >
                  <option value="fe">Further Education</option>
                  <option value="he">Higher Education</option>
                  <option value="ap">Apprenticeships</option>
                  <option value="we">Work Experience</option>
                  <option value="em">Jobs</option>
                </select>
              </div>
              <div className="rounded-md">
                <input
                  type="text"
                  name="t"
                  id="terms"
                  className="w-[28rem] focus:ring-indigo-500 focus:border-indigo-500 pl-4 pr-7 sm:text-sm rounded-l-none rounded-r-none border-gray-300 rounded-m h-full w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md"
                  placeholder="Keywords"
                />
              </div>
              <div className="rounded-md">
                <select
                  type="text"
                  name="l"
                  id="location"
                  className="focus:ring-indigo-500 focus:border-indigo-500 pl-4 pr-7 sm:text-sm rounded-r-none rounded-l-none border-gray-300 rounded-m h-full w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md"
                >
                  <option value="all">Northern Ireland- wide</option>
                  <option value="ant">Antrim</option>
                  <option value="arm">Armagh</option>
                  <option value="der">Derry/Londonderry</option>
                  <option value="dow">Down</option>
                  <option value="fer">Fermanagh</option>
                  <option value="tyr">Tyrone</option>
                </select>
              </div>
              <div className="rounded-md">
                <button
                  href="#"
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent rounded-l-none text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div id="main" className="grid grid-cols-12">
          <div id="sidebar" className="col-span-3">

          </div>
          <div id="results" className="col-span-9">
              {
                  
              }
          </div>
      </div>
    </>
  );
}
