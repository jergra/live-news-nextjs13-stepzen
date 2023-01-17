'use client'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {AiFillGithub} from 'react-icons/ai'

import {Bars3Icon} from '@heroicons/react/24/solid'
import Link from 'next/link'
import DarkModeButton from './DarkModeButton'
import NavLinks from './NavLinks'
import SearchBox from './SearchBox'


function Header() {

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <header>
    <div className='grid grid-cols-3 p-10 items-center'>

      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            <Bars3Icon className='h-8 w-8 cursor-pointer' />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 z-10">
            <div>
              <Menu.Item>
                {({ active }: any) => (
                  <a
                    href="https://github.com/jergra/live-news-nextjs13-stepzen"
                    target='_blank'
                    rel='noreferrer'
                    className={classNames(
                      active ? 'text-orange-400' : 'text-orange-400',
                      'block'
                    )}
                  >
                    <AiFillGithub size={40} />
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
  
        <Link href='/' prefetch={false}>
            <h1 className='font-serif text-4xl text-center'>
              <div className='flex'>
              <div className='border border-0 border-orange-400 border-b-[5px]'>
                LIVE
              </div><div className="ml-3">News</div>
              </div>
              
            </h1>
        </Link>

        <div className="flex items-center justify-end space-x-2">
            <DarkModeButton />
            <button className='hidden md:inline bg-slate-900 text-white 
                px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800'>
                Subscribe Now
            </button>
        </div>
    </div>

    <NavLinks />

    <SearchBox />
    
    </header>
  )
}

export default Header