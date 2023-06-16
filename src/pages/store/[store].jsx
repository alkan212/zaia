


import { Fragment, useEffect, useLayoutEffect, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    ArrowDownCircleIcon,
    ArrowPathIcon,
    ArrowUpCircleIcon,
    Bars3Icon,
    EllipsisHorizontalIcon,
    PlusSmallIcon,
    ShoppingBagIcon,
    ShoppingCartIcon,
} from '@heroicons/react/20/solid'
import { BellIcon, PaperAirplaneIcon, PencilIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { SideBar } from '@/components/sidebar/SideBar'
import { useRouter } from 'next/router'
import { POST } from 'lib/requests'
import { formatCurrency, formatDateFromTimestamp, formatTimeFromTimestampHours } from 'lib/utils'
import Link from 'next/link'


const secondaryNavigation = [
    { name: '24 hours', current: true, days: 1 },
    { name: '7 days', current: false, days: 7 },
    { name: '1 month', current: false, days: 30 },
    { name: '3 month', current: false, days: 90 },
    { name: 'All-time', current: false, days: undefined },
]

const statuses = {
    Delivered: 'text-green-700 bg-green-50 ring-green-600/20',
    Awaiting: 'text-gray-600 bg-gray-50 ring-gray-500/10',
    Refunded: 'text-red-700 bg-red-50 ring-red-600/10',
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function getStats(days, array) {
    if (days == undefined) return

    let hours = days * 24;

    if (array.length == 0) { return 0 }

    let last_24h = array.slice(array.length - hours);
    let yesterday = array.slice(array.length - hours * 2).slice(0, hours);

    let sum_24h = last_24h.reduce((a, b) => a + b, 0);
    let sum_yesterday = yesterday.reduce((a, b) => a + b, 0);

    let stats = ((sum_24h - sum_yesterday) / sum_yesterday) * 100;

    if (array.length < hours * 2) {
        return { value: sum_24h, percent: undefined }
    } else {
        return { value: sum_24h, percent: stats };
    }
}

export default function Store({ user, setUser }) {
    const router = useRouter()


    const [oui, setOui] = useState(0)
    const [storeName, setStoreName] = useState(undefined);
    const [store, setStore] = useState(undefined);

    const [days, setDays] = useState(1);
    const [sales, setSales] = useState({ value: 0, percent: 0 })
    const [revenue, setRevenue] = useState({ value: 0, percent: 0 })
    const [visitors, setVisitors] = useState({ value: 0, percent: 0 })
    const [convertionRate, setConvertionRate] = useState({ value: 0, percent: 0 })

    let convertionValue = ((sales.value / visitors.value) * 100).toFixed(2) + "%"
    let stats = [
        { name: 'Sales', value: sales.value, percent: sales.percent },
        { name: 'Revenue', value: formatCurrency(revenue.value) + store?.data.informations[0].data.currency, percent: revenue.percent },
        { name: 'Visitors', value: visitors.value, percent: visitors.percent },
        { name: 'Convertion rate', value: convertionValue, percent: convertionRate.percent },
    ]

    const [daysList, setDaysList] = useState([
        {
            date: 'Today',
            dateTime: '2023-03-22',
            transactions: [
                {
                    amount: 1,
                    price: 7600,
                    status: 'Delivered',
                    date: 1686513855434,
                    saleNumber: 3,
                    icon: ShoppingBagIcon,
                },
                {
                    amount: 1,
                    price: 7600,
                    status: 'Awaiting',
                    date: 1686513890578,
                    saleNumber: 2,
                    icon: ShoppingBagIcon,
                },
                {
                    amount: 1,
                    price: 7600,
                    status: 'Refunded',
                    date: 1686513925073,
                    saleNumber: 1,
                    icon: ShoppingBagIcon,
                },
            ],
        },
        {
            date: 'Yesterday',
            dateTime: '2023-03-21',
            transactions: [
                {
                    amount: 2,
                    price: 15400,
                    status: 'Delivered',
                    date: 1686513925073,
                    saleNumber: 0,
                    icon: ShoppingBagIcon,
                },
            ],
        },
    ])

    useEffect(() => {
        if (user == undefined) return;

        async function fetchData() {
            let storeName = decodeURI(window.location.href.split('/')[4])
            setStoreName(storeName);

            let response = await POST("/api/getStore", { storeName: storeName, userToken: user.token })
            if (response.success == true) {
                setStore(response.store)
            }
        }

        fetchData()
    }, [user])


    useEffect(() => {
        if (store == undefined) return;

        if (days !== undefined) {
            let sales = getStats(days, store.last.sales)
            let revenue = getStats(days, store.last.revenue)
            let visitors = getStats(days, store.last.visitors)
            let convertionRate = getStats(days, store.last.convertionRate)

            setSales(sales)
            setRevenue(revenue)
            setVisitors(visitors)
            setConvertionRate(convertionRate)
        } else {
            setSales({ value: store.total.sales, percent: undefined })
            setRevenue({ value: store.total.revenue, percent: undefined })
            setVisitors({ value: store.total.visitors, percent: undefined })
            setConvertionRate({ value: (store.total.sales / store.total.visitors) * 100, percent: undefined })
        }
    }, [store, days])


    function switchElement(e) {
        e.currentTarget.setAttribute("aria-checked", true);
        Array.from(e.currentTarget.parentElement.children).forEach(element => {
            if (element != e.currentTarget) {
                element.setAttribute("aria-checked", false);
            }
        });
    }

    return (
        <>
            <SideBar user={user} setUser={setUser}>
                <div className='bg-white min-h-screen overflow-y-auto'>
                    <div className=''>
                        <div className='pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start justify-between'>
                            <div>
                                <h1 className='text-3xl font-semibold tracking-wide jost'>{router.query.store}</h1>
                                <a target="_blank" href={`/shop/${storeName}`} className='text-sm underline underline-offset-4 font-semibold text-gray-500 hover:text-gray-900 oxygen relative'>
                                    <span className='bg-green-400 w-[8px] h-[8px] rounded-full absolute top-1/2 -translate-y-1/2'></span>
                                    <span className='ml-5 text-[14px]'>{`https://zaia.com/shop/${storeName}`}</span>
                                </a>
                            </div>
                            <Link
                                href={`/creator/${store?.type}?name=${storeName}`}
                                className="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                <PencilIcon className="mr-1.5 h-4 w-4" aria-hidden="true" />
                                Edit Store
                            </Link>
                        </div>
                    </div>
                    <main className=''>
                        <div className="relative isolate overflow-hidden pt-10">
                            {/* Secondary navigation */}
                            <header className="pb-4 pt-6 sm:pb-6">
                                <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
                                    <h1 className="text-base font-semibold leading-7 text-gray-900">Cashflow</h1>
                                    <div className="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7">
                                        {secondaryNavigation.map((item) => (
                                            <button onClick={(e) => { switchElement(e); setDays(item.days) }} aria-checked={item.current} key={item.name} className={'aria-checked:text-indigo-600 text-gray-700  rounded'}>
                                                {item.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </header>

                            {/* Stats */}
                            <div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
                                <dl className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
                                    {stats && stats.map((stat, statIdx) => (
                                        <div
                                            key={stat.name}
                                            className={classNames(
                                                statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '',
                                                'flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8'
                                            )}
                                        >
                                            <dt className="text-sm font-medium leading-6 text-gray-500">{stat.name}</dt>
                                            <dd
                                                className={classNames(
                                                    stat.percent < 0 ? 'text-red-500' : 'text-green-500',
                                                    stat.percent == 0 ? '!text-gray-900 !font-semibold' : '',
                                                    stat.percent == undefined ? '!opacity-0 !pointer-events-none' : '',
                                                    'text-xs font-medium'
                                                )}
                                            >
                                                {stat.percent >= 0 && "+"}{stat.percent + "%"}
                                            </dd>
                                            <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                                                {stat.value}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>

                            <div
                                className="absolute left-0 top-full -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
                                aria-hidden="true"
                            >
                                <div
                                    className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#f480ff] to-[#8989fc]"
                                    style={{
                                        clipPath:
                                            'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)',
                                    }}
                                />
                            </div>
                        </div>

                        <div className="space-y-16 py-16 xl:space-y-20">
                            {/* Recent activity table */}
                            <div>
                                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center">
                                    <h2 className="text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">
                                        Last activity
                                    </h2>

                                    <button className='px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center ml-6'>
                                        <ShoppingCartIcon className='w-4 ' />
                                        <p className=' ml-2.5 text-sm font-medium'>See all orders</p>
                                    </button>
                                </div>
                                <div className="mt-6 overflow-hidden border-t border-gray-100">
                                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                        <div className="mx-auto lg:mx-0 lg:max-w-none">
                                            <table className="w-full text-left">
                                                <thead className="sr-only">
                                                    <tr>
                                                        <th>Amount</th>
                                                        <th className="hidden sm:table-cell">Client</th>
                                                        <th>More details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {daysList.map((day, dayIndex) => (
                                                        <Fragment key={day.dateTime}>
                                                            <tr className="text-sm leading-6 text-gray-900">
                                                                <th scope="colgroup" colSpan={3} className="relative isolate py-2 font-semibold">
                                                                    <time dateTime={day.dateTime}>{day.date}</time>
                                                                    <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                                                                    <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                                                                </th>
                                                            </tr>
                                                            {day.transactions.map((transaction, index) => (
                                                                <AcitivityItem key={transaction.id} index={index} dayIndex={dayIndex} store={store} router={router} transaction={transaction} daysList={daysList} setDaysList={setDaysList} />
                                                            ))}
                                                        </Fragment>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </SideBar>

        </>
    )
}


function AcitivityItem({ store, transaction, router, index, dayIndex, daysList, setDaysList }) {

    const [open, setOpen] = useState(false)

    return (
        <tr key={transaction.id}>
            <td className="relative py-5 pr-6">
                <div className="flex gap-x-6">
                    <transaction.icon
                        className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                        aria-hidden="true"
                    />
                    <div className="flex-auto">
                        <div className="flex items-start gap-x-3">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                                {formatCurrency(transaction.price)}{store?.data.informations[0].data.currency}
                            </div>
                            <div
                                className={classNames(
                                    statuses[transaction.status],
                                    'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset transition-all duration-200'
                                )}
                            >
                                {transaction.status}
                            </div>
                        </div>
                        {transaction.amount ? (
                            <div className="mt-1 text-xs leading-5 text-gray-500">{transaction.amount} product</div>
                        ) : null}
                    </div>
                </div>
                <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
            </td>
            <td className="hidden py-5 pr-6 sm:table-cell">
                <div className="text-sm leading-6 text-gray-900">{formatDateFromTimestamp(transaction.date)}</div>
                <div className="mt-1 text-xs leading-5 text-gray-500">{formatTimeFromTimestampHours(transaction.date)}</div>
            </td>
            <td className="py-5 text-right">
                <div className="flex justify-end">
                    <button
                        onClick={() => setOpen(true)}
                        className="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                        View<span className="hidden sm:inline"> order</span>
                        <span className="sr-only">
                            , invoice #{transaction.invoiceNumber}, {transaction.client}
                        </span>
                    </button>
                    <OrderModal open={open} setOpen={setOpen} router={router} order={transaction} store={store} dayIndex={dayIndex} index={index} daysList={daysList} setDaysList={setDaysList} />
                </div>
                <div className="mt-1 text-xs leading-5 text-gray-500">
                    Sale number <span className="text-gray-900">#{transaction.saleNumber}</span>
                </div>
            </td>
        </tr>
    )
}



const statusDict = { "Awaiting delivery": "bg-yellow-100 text-yellow-800", "Delivered": "bg-green-100 text-green-800", "Refunded": "bg-red-100 text-red-800" }

function OrderModal({ open, setOpen, router, order, store, dayIndex, index, daysList, setDaysList }) {


    const [inputFocus, setInputFocus] = useState(true)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(undefined)
    const [name, setName] = useState("")
    const [error, setError] = useState(undefined)
    const [status, setStatus] = useState("Awaiting delivery")

    function chansgeStatus(status) {
        let buffer = [...daysList];
        buffer[dayIndex].transactions[index].status = status;
        setDaysList(buffer);
    }


    function closeModal() {
        setOpen(false);
    }

    function onDelivered() {
        setStatus("Delivered")
        chansgeStatus("Delivered")
        setOpen(false);
    }

    function onRefunded() {
        setStatus("Refunded")
        chansgeStatus("Refunded")
        setOpen(false);
    }

    return (
        <Transition
            show={open}
            enter="transition duration-200 ease-out"
            enterFrom="transform opacity-0"
            enterTo="transform opacity-100"
            leave="transition-all duration-500 ease-out"
            leaveFrom="transform opacity-100"
            leaveTo="transform opacity-0"
            as={Fragment}
            appear={true}
            className={"z-50 fixed overflow-y-auto top-0 left-0 w-full h-full"}
        >
            <Dialog onClose={closeModal} open={open} >
                <div className="absolute inset-0 flex items-center justify-center p-4 py-5 bg-black/30">
                    <Dialog.Panel className="w-full max-w-[500px] rounded bg-white p-7">
                        <div className='flex items-center justify-between'>
                            <div>
                                <Dialog.Title className={"text-[17px] font-medium "}>Order #{order.saleNumber}</Dialog.Title>
                                <p className={`${statusDict[status]} px-1.5 transition-all duration-200`}>{status}</p>
                            </div>
                            <button onClick={() => setOpen(false)} className='outline-none'>
                                <XMarkIcon className='w-5 cursor-pointer' />
                            </button>
                        </div>

                        <div className='mt-12'>

                            {/* pricing */}
                            <div>
                                <p className='text-[#333868] text-[15px]'>Pricing</p>
                                <div className='bg-[#F5F5F9] py-6 px-5 rounded grid gap-y-3 mt-2.5'>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-sm text-[#36363E] font-medium'>Price</p>
                                        <p className='text-sm text-[#36363E] font-medium'>{order.price}{store?.data.informations[0].data.currency}</p>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-sm text-[#36363E] font-medium'>Amount</p>
                                        <p className='text-sm text-[#36363E] font-medium'>{order.amount}</p>
                                    </div>
                                    <div className='w-full h-[1px] bg-[#797B8F]'></div>
                                    <div className='flex items-center justify-end'>
                                        <p className=' text-black font-semibold'>{order.price * order.amount}{store?.data.informations[0].data.currency}</p>
                                    </div>
                                </div>
                            </div>

                            {/* email */}
                            <div className='mt-8'>
                                <p className='text-[#333868] text-[15px]'>Email</p>
                                <div className='bg-[#F5F5F9] py-3 px-5 rounded grid gap-y-3 mt-2.5'>
                                    <p className=''>alkanakdeniz21@gmail.com</p>
                                </div>
                            </div>


                            {/* address */}
                            <div className='mt-8'>
                                <p className='text-[#333868] text-[15px]'>Address</p>
                                <div className='bg-[#F5F5F9] py-3 px-5 rounded grid gap-y-3 mt-2.5'>
                                    <p className=''>Brusselstraat 730, Dilbeek 1700</p>
                                </div>

                                <div className='grid grid-cols-2 gap-x-[15px] mt-4'>
                                    <div className=''>
                                        <p className='text-sm text-[#74789F]'>City</p>
                                        <div className='bg-[#F5F5F9] py-2.5 px-3 w-full rounded mt-0.5 overflow-x-auto text-sm'>
                                            Dilbeek
                                        </div>
                                    </div>
                                    <div className=''>
                                        <p className='text-sm text-[#74789F]'>Postal code</p>
                                        <div className='bg-[#F5F5F9] py-2.5 px-3 w-full rounded mt-0.5 overflow-x-auto text-sm'>
                                            1700
                                        </div>
                                    </div>
                                </div>


                                <div className='mt-4'>
                                    <p className='text-sm text-[#74789F]'>State / Province</p>
                                    <div className='bg-[#F5F5F9] py-2.5 px-3 w-full rounded mt-0.5 overflow-auto text-sm'>
                                        <span className=''>Vlaams Brabant</span>
                                    </div>
                                </div>
                            </div>



                            <div className='flex items-center justify-between w-full mt-12 flex-col screen-x-500:flex-row'>
                                <button onClick={onRefunded} className={`group w-full screen-x-500:w-auto mb-4 screen-x-500:mb-0 text-red-500 flex items-center justify-center px-6 h-[42px] text-[16px] border-[1.5px] border-red-500 bg-white rounded transition ${loading == false && "hover:bg-red-500 hover:text-white"}`}>
                                    <span>Refund</span>
                                </button>

                                <button onClick={onDelivered} className={`group w-full screen-x-500:w-auto text-white flex items-center justify-center px-6 h-[42px] text-[16px] border-[1.5px] border-black bg-black rounded transition ${loading == false && "hover:bg-white hover:text-black"}`}>
                                    <span>Mark as delivered</span>
                                    <PaperAirplaneIcon className='w-4 ml-2.5' />
                                </button>
                            </div>

                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </Transition>
    )
}
