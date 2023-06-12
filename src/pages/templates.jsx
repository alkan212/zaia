import Head from 'next/head'
import { SideBar } from '@/components/sidebar/SideBar'
import Image from 'next/image'
import { useRouter } from 'next/router'



const ITEMS = [
    {
        name: "Clothe",
        description: "A template for clothing stores",
        image: "/t1.png",
        href: "clothe",
        patern:"patern1"
    },
    {
        name: "Clothe",
        description: "A template for clothing stores",
        image: "/t1.png",
        href: "clothe",
        patern:"patern2"
    },
    {
        name: "Clothe",
        description: "A template for clothing stores",
        image: "/t1.png",
        href: "clothe",
        patern:"patern3"
    },
]


export default function dashboard({user, setUser}) {

    const router = useRouter()

    return (
        <>
            <Head>
                <title>TaxPal - Accounting made simple for small businesses</title>
                <meta
                    name="description"
                    content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
                />
            </Head>

            <SideBar user={user} setUser={setUser}>
                <div className='bg-[#f0f0f3] min-w-full min-h-screen pt-[80px] pb-[80px]'>
                    <div className='max-w-[1300px] mx-auto w-full px-10'>
                        <h2 className='font-semibold text-xl poppins text-center screen-x-800:text-start'>Choose your template</h2>

                        <div className='mt-10 flex flex-wrap gap-x-8 gap-y-8 justify-center screen-x-800:justify-start'>
                            {ITEMS.map((item, index) => (
                                <Item router={router} key={index} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </SideBar>

        </>
    )
}

function Item({ router, item }) {

    function open() {
        router.push(`/creator/${item.href}`)
    }

    return (
        <div onClick={open} className='w-full max-w-[350px] min-w-[300px] bg-white   transition cursor-pointer hover:shadow-xl rounded-[1px]'>
            <div className={`${item.patern} pt-6 px-6 pb-6`}>
                <Image src={item.image} width={350} height={350} alt={""} className='shadow-xl border-4 border-white rounded-lg' />
            </div>

            <div className='block mt-10 pb-5 px-5'>
                <div className='block items-center justify-between'>
                    <p className='font-bold text-[18px] text-gray-900 '>{item.name}</p>
                    <p className='text-[15px] text-gray-500 font-medium '>{item.description}</p>
                </div>
                {/* <button className='bg-black text-white w-full h-[45px] mt-4 flex items-center justify-center rounded-[5px]'>Try it</button> */}
            </div>
        </div>
    )
}

