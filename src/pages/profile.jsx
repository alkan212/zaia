import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { SideBar } from '@/components/sidebar/SideBar'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Profile({user, setUser}) {

    const router = useRouter()

    function disconnect(){
        setUser(undefined)
        Cookies.remove("token")
        router.push("/")
    }


    return (
        <SideBar user={user} setUser={setUser}>
            <div className='bg-white '>
                <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-10 lg:py-20 w-full">
                    <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:max-w-5xl">
                        <div>
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-500">
                                This information will be displayed publicly so be careful what you share.
                            </p>

                            <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                                <div className="pt-6 sm:flex">
                                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Email</dt>
                                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                        <div className="text-gray-900">{user?.email}</div>
                                        <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Update
                                        </button>
                                    </dd>
                                </div>
                                <div className="pt-6 sm:flex">
                                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Password</dt>
                                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                        <div className="text-gray-900"></div>
                                        <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Update
                                        </button>
                                    </dd>
                                </div>
                                <div className="pt-6 sm:flex">
                                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Status</dt>
                                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                        <div className="text-gray-900">{user?.status}</div>
                                        {/* <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Update
                                        </button> */}
                                    </dd>
                                </div>
                            </dl>

                            <button onClick={disconnect} className='mt-4 float-right text-red-600 bg-red-50 px-5 py-1.5 text-sm rounded border border-red-400'>Disconnect</button>
                        </div>

                        <div>
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Bank accounts ( Stripe )</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-500">Connect your stripe accounts.</p>

                            <ul role="list" className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                                <li className="flex justify-between gap-x-6 py-6">
                                    <div className="font-medium text-gray-900">TD Canada Trust</div>
                                    <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Update
                                    </button>
                                </li>
                                <li className="flex justify-between gap-x-6 py-6">
                                    <div className="font-medium text-gray-900">Royal Bank of Canada</div>
                                    <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Update
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Integrations</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-500">Connect applications to your account.</p>

                            <ul role="list" className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                                <li className="flex justify-between gap-x-6 py-6">
                                    <div className="font-medium text-gray-900">QuickBooks</div>
                                    <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Update
                                    </button>
                                </li>
                            </ul>

                            <div className="flex border-t border-gray-100 pt-6">
                                <button type="button" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                    <span aria-hidden="true">+</span> Add another application
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </SideBar>
    )
}




