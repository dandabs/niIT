import { AcademicCapIcon, BriefcaseIcon, ClockIcon, HomeIcon } from "@heroicons/react/outline";
import Image from "next/image";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Course({ title, level, code, campus, time, school, url, apprenticeship, type, image }) {
    return (
        <div className={classNames("grid grid-cols-12 gap-2 border-[2px] border-gray-100 my-5 p-5 border-l-8 rounded-md", apprenticeship ? "border-l-yellow-600" : "border-l-red-600")}>
            <div className=" align-middle col-span-2 px-5" style={{alignSelf: "center"}}>
                    <img src={image} />
            </div>
            <div className="col-span-6">
                    <p className="font-bold text-lg">{title}</p>
                    <p><a href={url} className="text-red-600">{school}</a> in {campus}</p>
                    <p>{code}</p>
            </div>
            <div className="col-span-4">
                <div className="flex">
                    <AcademicCapIcon className="h-5 w-5 text-gray-500" />
                    <p className="ml-1 text-gray-500">Level {level}</p>
                </div>
                <div className="flex">
                    <ClockIcon className="h-5 w-5 text-gray-500" />
                    <p className="ml-1 text-gray-500">{time}</p>
                </div>
                <div className="flex">
                    <HomeIcon className="h-5 w-5 text-gray-500" />
                    <p className="ml-1 text-gray-500">{type}</p>
                </div>
                {
                    apprenticeship ? 
                
                <div className="flex">
                    <BriefcaseIcon className="h-5 w-5 text-gray-500" />
                    <p className="ml-1 text-gray-500">Apprenticeship</p>
                </div>

                : null }
            </div>
        </div>
    )
};