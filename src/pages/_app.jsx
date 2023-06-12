import 'focus-visible'
import '@/styles/tailwind.css'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { GET } from 'lib/requests'

export default function App({ Component, pageProps }) {

  const [user, setUser] = useState(undefined)
  useEffect(() => {
    async function fetchData() {
      let response = await GET("/api/users", { token: Cookies.get("token") })

      if (response["success"] == true) {
        setUser(response["user"])
      } else {
        setUser(false)
      }
    }
    fetchData()
  }, [])

  return <Component {...pageProps} user={user} setUser={setUser} />
}
