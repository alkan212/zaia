import { SideBar } from "@/components/sidebar/SideBar";
import { StoreList } from "@/components/store/StoreList";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";



export default function stores({user, setUser}) {

    const router = useRouter()

    return (
        <SideBar user={user} setUser={setUser}>
            <div className="bg-white min-h-screen px-8">
                <div className="max-w-7xl mx-auto pt-16 pb-16">
                    <div className="flex items-center justify-between mb-10 border-b pb-6 border-gray-200">
                        <h1 className="text-3xl font-bold text-gray-900 tracking-wide">Stores</h1>
                        <button
                            onClick={() => { router.push("/templates") }}
                            className="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <PlusIcon className="mr-1.5 h-4 w-4 text-white" aria-hidden="true" strokeWidth={2} />
                            New Store
                        </button>
                    </div>
                    <StoreList user={user} setUser={setUser} />
                </div>
            </div>
        </SideBar>
    )
}