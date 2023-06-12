import { useEffect, useState } from "react"
import { StoreItem } from "./StoreItem"
import { POST } from "lib/requests"



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
        <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 screen-x-800:grid-cols-2 screen-x-1300:grid-cols-3 xl:gap-x-8">
            {stores && stores.map((store) => (
                <StoreItem client={store} key={store._id} />
            ))}
        </ul>
    )
}



