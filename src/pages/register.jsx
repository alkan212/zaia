import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import TextLogo from "@/images/TextLogo.svg"
import { POST } from 'lib/requests'
import { useEffect, useState } from 'react'
import { CircleSpinner } from 'react-spinners-kit'
import { CheckIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { Select } from '@/components/select/Select'


const status_list = [
  {
    id:1, 
    name:"Private"
  },
  {
    id:2, 
    name:"Business"
  }
]

export default function Register({user, setUser}) {

  const router = useRouter()
  useEffect(()=>{
    if(user?._id){router.push("/stores")}
  }, [user])


  const [loading, setLoading] = useState(false)
  const [success , setSuccess] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState(status_list[0])

  async function createUser() {
    if (email == "" || password == "") return console.log("Missing fields")
    setLoading(true)

    let response = await POST("/api/users", { email: email, password: password, status: status.name });
    setLoading(false)

    if(response.success == true){
      setSuccess(true)
      setTimeout(() => {
        router.push("/templates")
      }, 1000);
    }
    console.log(response)
  }

  return (
    <>
      <Head>
        <title>Sign Up - ZAIA</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Image src={TextLogo} width={100} height={200} alt={""} />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-100">
              Get started for free
            </h2>
            <p className="mt-2 text-sm text-gray-300">
              Already registered?{' '}
              <Link
                href="/login"
                className="font-medium text-indigo-400 hover:underline"
              >
                Sign in
              </Link>{' '}
              to your account.
            </p>
          </div>
        </div>
        <div
          action="#"
          className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2"
        >
          <TextField
            callback={(e) => setEmail(e)}
            className="col-span-full"
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            callback={(e) => setPassword(e)}
            className="col-span-full"
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
          <Select state={status} setState={setStatus} type='dark' title={"Status"} list={status_list} />
          <TextField
            className="col-span-full mt-6"
            label="Referral Code ?"
            id="referral_code"
            name="referral_code"
            type="text"
            autoComplete=""
          />
          <div className="col-span-full">
            <Button
              callback={createUser}
              variant="solid"
              color="indigo"
              className="w-full h-[45px]"
            >
              {loading == true && success == false &&
                <CircleSpinner color="#FFFFFF" size={20} />
              }
              {loading == false && success == false &&
                <span>
                  Sign up <span aria-hidden="true">&rarr;</span>
                </span>
              }

              {success == true &&
                <CheckIcon className='text-white w-5' strokeWidth={2} />
              }

            </Button>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}
