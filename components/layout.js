import Head from "next/head";

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  AcademicCapIcon,
  BookmarkAltIcon,
  BriefcaseIcon,
  CalendarIcon,
  ChartBarIcon,
  ChatIcon,
  ChevronDoubleUpIcon,
  CursorClickIcon,
  EyeIcon,
  HandIcon,
  MenuIcon,
  NewspaperIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  SearchIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import React, { useState, useEffect } from 'react';
import { Router, useRouter } from "next/router";

export default function Layout({ children }) {

  const [data, setData] = useState([]);

  const searchcategories = [
    {
      name: 'Further Education',
      description: 'Search for Level 2 and 3 qualifications and courses available within Northern Ireland',
      href: '/search?c=fe',
      icon: ChevronDoubleUpIcon,
    },
    {
      name: 'Higher Education',
      description: 'Search for degree courses instructed at Northern Irish universities and colleges',
      href: '/search?c=he',
      icon: AcademicCapIcon,
    },
    {
      name: 'Apprenticeships',
      description: "Find a further education or degree apprenticeship in Northern Ireland",
      href: '/search?c=ap',
      icon: HandIcon
    },
    {
      name: 'Work Experience',
      description: "Discover work experience programmes available for 13-18 year olds",
      href: '/search?c=we',
      icon: EyeIcon,
    },
    {
      name: 'Jobs',
      description: 'Seek work and employement opportunities across Northern Ireland\'s IT sector',
      href: '/search?c=em',
      icon: BriefcaseIcon,
    },
  ]
  const recentPosts = []

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
  async function fetchData() {

      const res1 = await fetch('/api/blog')
      const data1 = await res1.json();

      setData([data1[0], data1[1], data1[2]]);
    }
    fetchData();
}, [router.isReady]);
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

    return (
      <>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>

      <Popover className="relative bg-white z-50">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">findIT</span>
              <img
                className="h-5 w-auto sm:h-6"
                src="/img/niit2.png"
                alt="findIT"
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">

          <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Home
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>

            

                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                    )}
                  >
                    <span>Find</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {searchcategories.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-red-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                        <div key="custom" className="flow-root">
                              <a
                                href="/search"
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <SearchIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">Custom search</span>
                              </a>
                            </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                    )}
                  >
                    <span>Community</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          <a
                              key="forums"
                              href="/forums"
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <ChatIcon className="flex-shrink-0 h-6 w-6 text-red-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">Forums</p>
                                <p className="mt-1 text-sm text-gray-500">Chat with others within the IT industry in Northern Ireland</p>
                              </div>
                            </a>
                            <a
                              key="blog"
                              href="/blog"
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <NewspaperIcon className="flex-shrink-0 h-6 w-6 text-red-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">Blog</p>
                                <p className="mt-1 text-sm text-gray-500">Read articles written by industry professionals in the country</p>
                              </div>
                            </a>
                        </div>
                        <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent Posts</h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {data.map((post) => (
                                <li key={post.id} className="text-base truncate">
                                  <a href={"/blog/" + post.id} className="font-medium text-gray-900 hover:text-gray-700">
                                    {post.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a href="/blog" className="font-medium text-red-600 hover:text-red-500">
                              {' '}
                              View all posts <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/img/niit2.png"
                    alt="findIT"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {searchcategories.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-red-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                    key="forums"
                    href="/forums"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Forums
                  </a>
                  <a
                    key="blog"
                    href="/blog"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Blog
                  </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing user?{' '}
                  <a href="#" className="text-red-600 hover:text-red-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>

<main>{children}</main>
        
      </>
    )
  }