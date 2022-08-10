import { AcademicCapIcon, BriefcaseIcon, ChatIcon, ClockIcon, HomeIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { stripHtml } from "string-strip-html";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Blog({ data }) {
    return (
        <a href={"/blog/" + data.id}>
        <div className={"grid grid-cols-12 gap-2 border-[2px] border-gray-100 my-5 p-5 border-l-8 rounded-md border-l-red-600 hover:shadow-lg cursor-pointer"}>
            <div className="col-span-10">
                    <p className="font-bold text-lg">{data.title}</p>
                    <p>{stripHtml(data.content).result.slice(0, 275)}...</p>
            </div>
            <div className="col-span-2">
                <div className="flex">
                    <ChatIcon className="h-5 w-5 text-gray-500" />
                    <p className="ml-1 text-gray-500">{data.displayname}</p>
                </div>
                <div className="flex">
                    <ClockIcon className="h-5 w-5 text-gray-500" />
                    <p className="ml-1 text-gray-500">{new Date(data.time).getDate()}/{new Date(data.time).getMonth()}/{new Date(data.time).getFullYear()}</p>
                </div>
                <div className="flex">
                    <HomeIcon className="h-5 w-5 text-gray-500" />
                    <p className="ml-1 text-gray-500">type</p>
                </div>
            </div>
        </div>
        </a>
    )
};
