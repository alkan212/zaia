import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router'
import { formatCurrency } from 'lib/utils'
import Link from 'next/link'
import { POST } from 'lib/requests'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const statuses = {
    Paid: 'text-green-700 bg-green-50 ring-green-600/20',
    Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
    Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
}

export function StoreItem({user, index, stores, setStores, client }) {

    const router = useRouter()

    function open(e) {
        e.stopPropagation();
        if (e.target.getAttribute("data-menu") == "true") { return }
        router.push(`/store/${client.name}`)
    }

    const [stats, setStats] = useState(0)

    console.log("stats: ", stats)

    useEffect(() => {
        setStats(calculateStats_24h(client.last.revenue))
    }, [])


    function onDelete(){
        POST("/api/deleteStore", {storeName:client.name, userToken:user.token})

        let buffer = [...stores];
        buffer.splice(index, 1);
        setStores(buffer);
    }


    return (
        <li onClick={open} key={client.id} className="overflow-hidden rounded-xl border border-gray-200 cursor-pointer hover:border-gray-400/80 transition">
            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                <div className='h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10 flex items-center justify-center'>
                    <p className='font-medium poppins text-[18px]'>{client.name[0]}</p>
                </div>

                <div className='flex items-center justify-center'>
                    <div className="text-sm font-medium leading-6 text-gray-900">{client.name}</div>
                    <div className={`w-1.5 h-1.5 rounded-full ml-2 ${client.online == true && "bg-green-500" || "bg-red-500"}`}></div>
                </div>
                <Menu as="div" className="relative ml-auto">
                    <Menu.Button data-menu={true} className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Open options</span>
                        <EllipsisHorizontalIcon className="h-5 w-5 pointer-events-none" aria-hidden="true" />
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-50' : '',
                                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                                        )}
                                    >
                                        Dashboard<span className="sr-only">, {client.name}</span>
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-50' : '',
                                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                                        )}
                                    >
                                        View<span className="sr-only">, {client.name}</span>
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-50' : '',
                                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                                        )}
                                    >
                                        Edit<span className="sr-only">, {client.name}</span>
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                    data-menu={true}
                                    onClick={onDelete}
                                        className={classNames(
                                            active ? 'bg-gray-50' : '',
                                            'block px-3 py-1 text-sm leading-6 text-red-500 w-full flex items-start'
                                        )}
                                    >
                                        Delete<span className="sr-only">, {client.name}</span>
                                    </button>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
            <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                <div className="flex justify-between gap-x-4 py-3">
                    <dt className="text-gray-500">Sales</dt>
                    <dd className="text-gray-700">
                        <p>{client.total.sales}</p>
                    </dd>
                </div>
                <div className="flex justify-between gap-x-4 py-3">
                    <dt className="text-gray-500">Revenue</dt>
                    <dd className="flex items-start gap-x-2">
                        <div className="font-medium text-gray-900">{formatCurrency(client.total.revenue)}{client.data.informations[0].data.currency}</div>
                    </dd>
                </div>
                <div className="flex justify-between gap-x-4 py-3">
                    <dt className="text-gray-500">Last 24h</dt>
                    <dd className="flex items-start gap-x-2">
                        <div className={`font-medium ${stats > 0 && "text-green-500"} ${stats < 0 && "text-red-500"} ${stats == 0 && "text-gray-900"}`}>{stats > 0 && "+"}{stats}%</div>
                    </dd>
                </div>
            </dl>
        </li>
    )
}








function calculateStats_24h(array) {
    console.log(array.length)
    if (array.length == 0) { return 0 }
    if (array.length < 48) { return 0 }

    let last_24h = array.slice(array.length - 24);
    let yesterday = array.slice(array.length - 48).slice(0, 24);

    let sum_24h = last_24h.reduce((a, b) => a + b, 0);
    let sum_yesterday = yesterday.reduce((a, b) => a + b, 0);

    let stats = ((sum_24h - sum_yesterday) / sum_yesterday) * 100;

    return stats.toFixed(2);
}