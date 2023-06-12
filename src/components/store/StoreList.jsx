import { useEffect, useState } from "react"
import { StoreItem } from "./StoreItem"
import { POST } from "lib/requests"
import { PlusIcon } from '@heroicons/react/20/solid'
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline"
import Link from "next/link"


export function StoreList({ user, setUser }) {

    const [stores, setStores] = useState(undefined)

    useEffect(() => {
        if (user == undefined) { return }

        async function fetchData() {
            let response = await POST("/api/getStores", { userToken: user.token });
            console.log(response.stores)
            if (response.success == true) {
                setStores(response.stores)
            }
        }

        fetchData()
    }, [user])

    return (
        <>
                <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 screen-x-800:grid-cols-2 screen-x-1300:grid-cols-3 xl:gap-x-8">
            {stores && stores.length > 0 && stores.map((store, index) => (
                <StoreItem stores={stores} setStores={setStores} index={index} user={user} client={store} key={store._id} />
            ))}
       
        </ul>

        {stores == undefined || stores.length == 0 && 
                <EmptyState />
            }
        </>

    )
}




function EmptyState() {
    return (
        <div className="w-full mt-8">
                 <div className="text-center">
        <BuildingStorefrontIcon 
          className="mx-auto h-12 w-12 text-gray-400"
        />
        <h3 className="mt-2 text-sm font-semibold text-gray-900">No store yet</h3>
        <p className="mt-1 text-sm text-gray-500">Get started by creating a new project.</p>
        <div className="mt-6">
          <Link
          href={"/templates"}
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            New Store
          </Link>
        </div>
      </div>
        </div>
    )
  }
  