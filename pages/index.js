import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { CashIcon, CakeIcon, ClipboardCheckIcon, TableIcon, EmojiHappyIcon, GlobeAltIcon, GlobeIcon } from '@heroicons/react/solid'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <>
    <div className="relative bg-white overflow-hidden dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white dark:bg-neutral-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-neutral-900 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-4 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white dark:bg-neutral-900 ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="/img/niit.png"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white dark:bg-neutral-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 dark:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-red-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">{t(`Welcome to IT in`)}</span>{' '}
                <span className="block text-red-600 xl:inline">{t(`Northern Ireland`)}</span><span className="hidden xl:block xl:inline">.</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {t(`We're findIT - your one stop shop for everything IT related in Northern Ireland: jobs, education, training, apprenticeships and more.`)}
              </p>
              <form action="/search" method="get">
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                  <select
          type="text"
          name="c"
          id="category"
          className="dark:bg-neutral-800 dark:border-neutral-700 focus:ring-indigo-500 focus:border-indigo-500 pl-4 pr-7 sm:text-sm rounded-r-none border-gray-300 rounded-m h-full w-full flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md"
        >
                <option value="fe">{t(`Further Education`)}</option>
                <option value="he">{t(`Higher Education`)}</option>
                <option value="ap">{t(`Apprenticeships`)}</option>
                <option value="we">{t(`Work Experience`)}</option>
                <option value="em">{t(`Jobs`)}</option>
            </select>
                </div>
              <div className="rounded-md shadow">
                  <input
          type="text"
          name="t"
          id="terms"
          className="dark:bg-neutral-800 dark:border-neutral-700 focus:ring-indigo-500 focus:border-indigo-500 pl-4 pr-7 sm:text-sm rounded-l-none rounded-r-none border-gray-300 rounded-m h-full w-full flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md"
          placeholder="Keywords"
        />
                </div>
                <div className="rounded-md shadow">
                  <button
                    href="#"
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent rounded-l-none text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                  >
                    {t(`Search`)}
                  </button>
                </div>
              </div>
              </form>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://www.cmphotography.co.uk/wp-content/uploads/2021/02/belfast-1-1500x950.jpg"
          alt=""
        />
      </div>
    </div>

<div className="flex flex-col justify-center items-center" id="main">

<div className="bg-red-800 w-full shadow-xl flex flex-col justify-center items-center p-4">
    <span className="text-white text-3xl">{t(`Why a career in IT?`)}</span>
    <p className="text-white">{t(`Northern Ireland has never needed more qualified IT professionals. It's time for you to get started.`)}</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-11/12 lg:w-9/12 my-16">
<div>

  <div className="grid grid-cols-12 gap-2">
    <div className="bg-red-400 rounded-md w-14 h-14">
      <CashIcon className="text-white w-14 h-14" />
    </div>
    <div className="col-span-12 lg:col-span-11 flex justify-center flex-col">
      <span className="text-2xl ml-4 font-semibold">{t(`Competitive salaries`)}</span>
      <p className="ml-4 text-lg font-light">{t(`The average tech salary in Northern Ireland is £33,000. A graduate software developer can expect a starting salary from £24,000–£32,000. That compares to an average salary of £26,232 across all jobs in NI.`)}</p>
    </div>
  </div>

  <div className="grid grid-cols-12 gap-2 mt-8">
    <div className="bg-red-400 rounded-md w-14 h-14">
      <CakeIcon className="text-white w-14 h-14" />
    </div>
    <div className="col-span-12 lg:col-span-11 flex justify-center flex-col">
      <span className="text-2xl ml-4 font-semibold">{t(`Relaxed working enviornment`)}</span>
      <p className="ml-4 text-lg font-light">{t(`With IT skills in such high demand, employers offer good conditions to help keep their team happy and motivated. Perks can include free tea, coffee, snacks and lunches, free beer Friday, yoga, social gatherings and well-being initiatives.`)}</p>
    </div>
  </div>

  <div className="grid grid-cols-12 gap-2 mt-8">
    <div className="bg-red-400 rounded-md w-14 h-14">
      <EmojiHappyIcon className="text-white w-14 h-14" />
    </div>
    <div className="col-span-12 lg:col-span-11 flex justify-center flex-col">
      <span className="text-2xl ml-4 font-semibold">{t(`Rewarding career`)}</span>
      <p className="ml-4 text-lg font-light">{t(`IT projects involve working in a team of enthusiastic and like-minded people. You’ll help each other to develop and fulfil your potential. This makes for a rewarding career.`)}</p>
    </div>
  </div>

  <div className="grid grid-cols-12 gap-2 mt-8">
    <div className="bg-red-400 rounded-md w-14 h-14">
      <GlobeIcon className="text-white w-14 h-14" />
    </div>
    <div className="col-span-12 lg:col-span-11 flex justify-center flex-col">
      <span className="text-2xl ml-4 font-semibold">{t(`Make a difference`)}</span>
      <p className="ml-4 text-lg font-light">{t(`You’ll get many different opportunities to use your IT skills for social good. Big data is being used to help fight climate change and predict the spread of diseases such as COVID-19.`)}</p>
    </div>
  </div>

</div>
<div className="flex justify-center items-center hidden lg:block">
  <img src="https://www.pngkey.com/png/full/287-2871511_happiness-is-an-inside-job-person-on-computer.png" style={{
    filter: 'drop-shadow(0 5px 5px rgba(0,0,0,.5))'
  }} />
</div>
</div>

<div className="bg-red-800 w-full shadow-xl flex flex-col justify-center items-center p-4">
    <span className="text-white text-3xl">How do I get started?</span>
    <p className="text-white">Regardless of what age you are, it's much eaiser to get your foot in the door than you probably expect.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-11/12 lg:w-9/12 my-16">
<div>
  

  <div className="grid grid-cols-12 gap-2">
    <div className="w-14 h-14">
    <img className="h-16" src="https://imgs.search.brave.com/CNw7JaY5FUOP8nQw2k3e4mJdG-0sg9Uu2r8SGVcGDQM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvcmFz/cGJlcnJ5LXBpLWxv/Z28tcG5nLXRyYW5z/cGFyZW50LnBuZw" />
    </div>
    <div className="col-span-12 lg:col-span-11 flex justify-center flex-col">
      <span className="text-2xl ml-4 font-semibold">Raspberry Pi Foundation</span>
      <p className="ml-4 text-lg font-light">The Raspberry Pi Foundation provides access to online coding resources and challenges that are free for everyone anywhere.</p>
      <a href="https://www.raspberrypi.org/learn/" className="text-red-600 ml-4">Learn more</a>
    </div>
  </div>

  <div className="grid grid-cols-12 gap-2 mt-24">
    <div className="w-14 h-14">
    <img className="h-16" src="https://imgs.search.brave.com/b-r84HxjyP8eNKuNtJhP0x80eu7iNF7gd7auyIRwCzA/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9zZWN1/cmUubWVldHVwc3Rh/dGljLmNvbS9waG90/b3MvZXZlbnQvNi9k/LzIvZC82MDBfNDU2/NTY3OTQ5LmpwZWc" />
    </div>
    <div className="col-span-12 lg:col-span-11 flex justify-center flex-col">
      <span className="text-2xl ml-4 font-semibold">Farset Labs</span>
      <p className="ml-4 text-lg font-light">Farset Labs is a community funded and volunteer operated charity, opened in 2012 as a place for creativity and technological tinkering.</p>
      <a href="https://www.farsetlabs.org.uk/" className="text-red-600 ml-4">Learn more</a>
    </div>
  </div>

  <div className="grid grid-cols-12 gap-2 mt-24">
    <div className="w-14 h-14">
    <img className="h-16" src="https://imgs.search.brave.com/-8XJUN8QZ1qMBS6oF30Z6hKm5izqZGBdU0pSIBYRimE/rs:fit:591:750:1/g:ce/aHR0cHM6Ly93d3cu/cWEuY29tL21lZGlh/LzE0MDMyL2Jjcy1s/b2dvLnBuZz93aWR0/aD01OTEmaGVpZ2h0/PTc1MA" />
    </div>
    <div className="col-span-12 lg:col-span-11 flex justify-center flex-col">
      <span className="text-2xl ml-4 font-semibold">British Computer Society</span>
      <p className="ml-4 text-lg font-light">BCS, The Chartered Institute for IT, promotes wider social and economic progress through the advancement of information technology science and practice.</p>
      <a href="https://www.bcs.org/" className="text-red-600 ml-4">Learn more</a>
    </div>
  </div>

  <div className="grid grid-cols-12 gap-2 mt-24">
    <div className="w-14 h-10">
    <img className="h-12 w-16" src="https://imgs.search.brave.com/uKGtZUL0LKBblSlPytEW7E-esAacN1UUujDd9eW0_Zw/rs:fit:155:120:1/g:ce/aHR0cHM6Ly9icmlu/Z2l0b25uaS5jby51/ay93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wNy9icmluZy1p/dC1vbi5wbmc" />
    </div>
    <div className="col-span-12 lg:col-span-11 flex justify-center flex-col">
      <span className="text-2xl ml-4 font-semibold">Bring IT On NI</span>
      <p className="ml-4 text-lg font-light">Bring IT On was formed to address the skills shortage and employability issues within the IT sector in Northern Ireland. Their mission is to ensure that Northern Irish IT companies have an ongoing diverse pipeline of skilled talent fit for industry needs.</p>
      <a href="https://www.bcs.org/" className="text-red-600 ml-4">Learn more</a>
    </div>
  </div>

</div>
<div>


<div className="grid grid-cols-12 gap-2">
    <div className="w-16 h-16">
    <img className="h-16 w-16" src="https://imgs.search.brave.com/oQXB-dBanFBokjn1XO3c1ftx5avQGQBQnm3hKh2u6Dk/rs:fit:1200:1200:1/g:ce/aHR0cDovLzEuYnAu/YmxvZ3Nwb3QuY29t/Ly1qLW15bGUxU19k/ay9VdUtZYm10T1hR/SS9BQUFBQUFBQUJv/OC9qY05CNDhyZUZH/RS9zMTYwMC9Db2Rl/Q2x1Yi1Mb2dvLmpw/Zw" />
    </div>
    <div className="col-span-12 lg:col-span-11 flex justify-center flex-col">
      <span className="text-2xl ml-4 font-semibold">Code Club</span>
      <p className="ml-4 text-lg font-light">The Code Club initiative aims to provide mostly free opportunities for children aged 9 to 13 to develop coding skills through free after-school clubs.</p>
      <a href="https://codeclub.org/en/" className="text-red-600 ml-4">Learn more</a>
    </div>
  </div>

  <div className="grid grid-cols-12 gap-2 mt-16">
    <div className="w-14 h-14">
    <img className="h-16" src="https://imgs.search.brave.com/kfBOtrm781tW0HG7IRmYP6Uar8qxdnNxthr9zsgI5mA/rs:fit:400:400:1/g:ce/aHR0cHM6Ly9wYnMu/dHdpbWcuY29tL3By/b2ZpbGVfaW1hZ2Vz/LzM0NDUxMzI2MTU3/MzA0MjEzOS80MzMw/MGY4ZDRiZWMyYjkz/MDM0MmE0N2RjNzI0/ZmYyMF80MDB4NDAw/LmpwZWc" />
    </div>
    <div className="col-span-12 lg:col-span-11 flex justify-center flex-col">
      <span className="text-2xl ml-4 font-semibold">CoderDojo</span>
      <p className="ml-4 text-lg font-light">CoderDojo is a global movement of free, volunteer-led, community-based computer programming clubs for young people. Children can visit a Dojo where they can learn to code and explore technology in an creative and social environment.</p>
      <a href="https://coderdojo.com/" className="text-red-600 ml-4">Learn more</a>
    </div>
  </div>

  <div className="grid grid-cols-12 gap-2 mt-8">
    <div className="w-14 h-14">
    <img className="h-16" src="https://d3ku2up3znex6l.cloudfront.net/public/sitereview_listing/4e/1c/01/11a33_c80b.jpg?c=8cee" />
    </div>
    <div className="col-span-12 lg:col-span-11 flex justify-center flex-col">
      <span className="text-2xl ml-4 font-semibold">Sync NI</span>
      <p className="ml-4 text-lg font-light">Sync NI, based in Belfast is the leading media outlet for Northern Ireland’s Technology and Business Industries. Our website and magazine keeps readers informed on the latest technology and business news, jobs and events.</p>
      <a href="https://syncni.com/" className="text-red-600 ml-4">Learn more</a>
    </div>
  </div>


</div>


</div>

</div>
</>
  )
}