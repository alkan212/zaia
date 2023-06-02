import Image from 'next/image'
import logoTuple from '@/images/tlogo.svg'

import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Header(){
    let stContainer = {
        width: "100%",
        minHeight:"100%",
        left:"50%",
        transform:"translateX(-50%)",
        top:'-200px',
        overflow:"hidden",
    }
    let st = {
        width: "calc(100% + 200px)",
        height:"400px",
        background:"rgba(60, 79, 255, .2)",
        filter:'blur(300px)',
        borderRadius:"100%",
    }
    return (
        <>
            <div className='w-full pt-10 px-10 md:px-20 flex justify-between items-center bg-zinc-900'>

                <div className='absolute pointer-events-none' style={stContainer}>
                    <div className='' style={st}></div>
                </div>
                

                <div className='flex items-center'>
                    <div className='h-14 w-14'>
                        <Image src={logoTuple} alt={""} width={200} height={200}/>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-white tracking-widest relative top-1 ml-4'>ZAÏA</p>
                    </div>
                </div>

                <div className='hidden lg:block'>
                    <ul className='flex items-center space-x-8'>
                        <li className='font-medium text-base text-white tracking-wide'><a href='#' className="bg-slate-800 hover:bg-slate-700 cursor-pointer px-4 rounded-full py-1.5">Home</a></li>
                        <li className='font-medium text-base text-white tracking-wide'><a href='#HowToUse' className="hover:bg-slate-700 cursor-pointer px-4 rounded-full py-1.5">How To Use</a></li>
                        <li className='font-medium text-base text-white tracking-wide'><a href='#affiliate' className="hover:bg-slate-700 cursor-pointer px-4 rounded-full py-1.5">Referral Program</a></li>
                    </ul>
                </div>

                <div className='hidden lg:block'>
                    <ul className='flex items-center space-x-6'>
                    <li className='font-medium text-base text-white tracking-wide'><Link href='/login' className="hover:bg-slate-700 cursor-pointer px-4 rounded-full py-1.5 font-semibold">Log In</Link></li>
                        <li className='font-medium text-base text-white tracking-wide'><Link href='/register' className="text-white bg-indigo-700 hover:bg-indigo-800 font-semibold px-4 py-3 rounded-full">Get Started</Link></li>
                    </ul>
                </div>

                {/* phone menu */}
                <div className='flex items-center lg:hidden'>
                    <a className='text-slate-100 mr-9 bg-indigo-700 hover:bg-indigo-800 px-4 py-3 rounded-full font-semibold' href="#">Get Started</a>
                    <div className="-mr-1">
                        <MobileNavigation />
                    </div>
                </div>
            </div>
        </>
    )
}


function MobileNavLink({ href, children }) {
    return (
        <Popover.Button as={Link} href={href} className="hover:bg-slate-50 rounded-md block w-full p-2">
        {children}
        </Popover.Button>
    )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-200"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
    return (
      <Popover>
        <Popover.Button
          className="relative z-50 flex text-slate-100 h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {({ open }) => <MobileNavIcon open={open} />}
        </Popover.Button>
        <Transition.Root>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="z-10 fixed inset-0 bg-slate-800/60" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              as="div"
              className="z-10 w-[95%] mx-auto absolute inset-x-0 mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
            >
              <MobileNavLink href="#features">Home</MobileNavLink>
              <MobileNavLink href="#HowToUse">How To Use</MobileNavLink>
              <MobileNavLink href="#Affiliate">Referral Program</MobileNavLink>
              <hr className="m-2 border-slate-300/40" />
              <MobileNavLink href="/login">Log in</MobileNavLink>
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
    )
  }