import { AcademicCapIcon, BriefcaseIcon, ChatIcon, ClockIcon, HomeIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { stripHtml } from "string-strip-html";

import { useEffect, useState } from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Forum({ data }) {

    return (
        <div className={"grid grid-cols-12 gap-x-2 border-[2px] border-gray-100 dark:border-r-neutral-900 dark:border-b-neutral-900 mb-5 pb-5 border-l-8 rounded-md border-l-red-600 border-t-red-600"}>
            <div className="col-span-12 bg-red-600 text-white pl-2 py-2 rounded-br-sm">
                <span className="font-bold">{data.name}</span>
            </div>
            <div className="col-span-12">

                { data.forums.map((item) => <>

                <div className="grid gap-4 grid-cols-12 border-b-[1px] border-b-gray-200 py-2 ml-3" id={item.id}>
                    <div className="col-span-1 flex justify-center items-center">
                        <item.icon id={typeof item.icon} className={classNames("text-red-500", (typeof item.icon) == 'function' ? "text-2xl" : "h-8")} />
                    </div>
                    <div className="col-span-6">
                        <p className="text-xl font-semibold">{item.name}</p>
                        <p className="text-sm">{item.description}</p>
                    </div>
                    <div className="col-span-2">
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="text-sm">Posts:</p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="text-sm">{24}</p>
                    </div>
                </div>
                
                </>) }

            </div>
        </div>
    )
};
