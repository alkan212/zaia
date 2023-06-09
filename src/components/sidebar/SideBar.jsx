import { Fragment, useCallback, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    BuildingStorefrontIcon,
    CalendarIcon,
    ChartPieIcon,
    CubeIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    Square3Stack3DIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { POST } from 'lib/requests'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function SideBar({ children, user, setUser }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const [navigation, setNavigation] = useState([
        { name: 'Stores', href: '/stores', icon: BuildingStorefrontIcon, current: false },
        { name: 'Templates', href: '/templates', icon: Square3Stack3DIcon, current: false },
    ])

    const [stores, setStores] = useState([])


    let setCurrentStore = useCallback((storesBuffer) => {
        // set active header
        let currentPath = `/${window.location.href.split("/")[window.location.href.split("/").length - 1]}`

        let buffer = [...navigation]

        navigation.forEach((item, index) => {
            if (item.href == currentPath) {
                console.log("SAME : ", item.href, currentPath)
                buffer[index].current = true
            } else {
                buffer[index].current = false
            }
        }
        )

        setNavigation(buffer)

        // set active store
        let currentStore = `${window.location.href.split("/")[window.location.href.split("/").length - 1]}`
        currentStore = decodeURI(currentStore);

        let bufferStores = [...storesBuffer]

        storesBuffer.forEach((item, index) => {
            if (item.name == currentStore) {
                bufferStores[index].current = true
            } else {
                bufferStores[index].current = false
            }
        }
        )

        setStores(bufferStores)
    }, [])


    useEffect(() => {
        if (user == null || user == false || user == undefined) return;

        async function fetchData() {
            let response = await POST("/api/getStores", { userToken: user.token });
            console.log("r:",response)
            if (response.success == true) {
                let buffer = [];
                response.stores.forEach((store, index) => {
                    buffer.push({ name: store.name, current: false })
                })
                setStores(buffer);
                setCurrentStore(buffer);
            }
        }
        
        fetchData();
    }, [user])



    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                            <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    {/* Sidebar component, swap this element with another sidebar if you like */}
                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                                        <div className="flex h-16 shrink-0 items-center">
                                            <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                                alt="Your Company"
                                            />
                                        </div>
                                        <nav className="flex flex-1 flex-col">
                                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                                <li>
                                                    <ul role="list" className="-mx-2 space-y-1">
                                                        {navigation.map((item) => (
                                                            <li key={item.name}>
                                                                <a
                                                                    href={item.href}
                                                                    className={classNames(
                                                                        item.current
                                                                            ? 'bg-gray-50 text-indigo-600'
                                                                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                    )}
                                                                >
                                                                    <item.icon
                                                                        className={classNames(
                                                                            item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                                                            'h-6 w-6 shrink-0'
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
                                                                    {item.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="text-xs font-semibold leading-6 text-gray-400">Your stores</div>
                                                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                                                        {stores.map((store) => (
                                                            <li key={store.name}>
                                                                <a
                                                                    href={`/store/${store.name}`}
                                                                    className={classNames(
                                                                        store.current
                                                                            ? 'bg-gray-50 text-indigo-600'
                                                                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                    )}
                                                                >
                                                                    <span
                                                                        className={classNames(
                                                                            store.current
                                                                                ? 'text-indigo-600 border-indigo-600'
                                                                                : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                                                            'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                                                                        )}
                                                                    >
                                                                        {store.name[0].toUpperCase()}
                                                                    </span>
                                                                    <span className="truncate">{store.name}</span>
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
                        <div className="flex h-16 shrink-0 items-center">
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt="Your Company"
                            />
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-gray-50 text-indigo-600'
                                                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                    )}
                                                >
                                                    <item.icon
                                                        className={classNames(
                                                            item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                                            'h-6 w-6 shrink-0'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li>
                                    <div className="text-xs font-semibold leading-6 text-gray-400">Your stores</div>
                                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                                        {stores.map((store) => (
                                            <li key={store.name}>
                                                <a
                                                    href={`/store/${store.name}`}
                                                    className={classNames(
                                                        store.current
                                                            ? 'bg-gray-50 text-indigo-600'
                                                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                    )}
                                                >
                                                    <span
                                                        className={classNames(
                                                            store.current
                                                                ? 'text-indigo-600 border-indigo-600'
                                                                : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                                            'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                                                        )}
                                                    >
                                                        {store.name[0].toUpperCase()}
                                                    </span>
                                                    <span className="truncate">{store.name}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="-mx-6 mt-auto">
                                    <a
                                        href="/profile"
                                        className="flex items-center gap-x-2 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                                    >
                                        <div className='w-8 h-8 bg-gray-50 border rounded-full flex items-center justify-center border-gray-300'>
                                            {user?.email?.split("@")[0][0].toUpperCase()}
                                        </div>
                                        <span className="sr-only">Your profile</span>
                                        <span aria-hidden="true">{user?.email?.split("@")[0]}</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
                    <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">Dashboard</div>
                    <a
                        href="/profile"
                        className="flex items-center gap-x-2 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                    >
                        <div className='w-8 h-8 bg-gray-50 border rounded-full flex items-center justify-center border-gray-300'>
                            {user?.email?.split("@")[0][0].toUpperCase()}
                        </div>
                        <span className="sr-only">Your profile</span>
                    </a>
                </div>

                <main className="lg:pl-72">
                    <div className="">{children}</div>
                </main>
            </div>
        </>
    )
}
