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
import { CheckIcon } from '@heroicons/react/24/outline'
import { CircleSpinner } from 'react-spinners-kit'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

export default function Login({user, setUser}) {
  console.log(user)
  const router = useRouter()
  useEffect(()=>{
    if(user?._id){router.push("/stores")}
  }, [user])


  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    if (email == "" || password == "") return console.log("Missing fields")
    setLoading(true)

    let response = await POST("/api/login", { email: email, password: password });
    console.log(response)
    setLoading(false)

    if (response.success == true) {
      setSuccess(true)
      setUser(response.user)
      setTimeout(() => {
        router.push("/stores")
      }, 1000);
    }
  }

  return (
    <>
      <Head>
        <title>Log in</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Image src={TextLogo} width={100} height={200} alt={""} />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-100">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-300">
              Don’t have an account?{' '}
              <Link
                href="/register"
                className="font-medium text-indigo-400 hover:underline"
              >
                Sign up
              </Link>{' '}
              for a free trial.
            </p>
          </div>
        </div>
        <div action="#" className="mt-10 grid grid-cols-1 gap-y-8">
          <TextField
            callback={(value) => setEmail(value)}
            className=""
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            callback={(value) => setPassword(value)}
            className=""
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
          <div>
            <Button
              callback={login}
              variant="solid"
              color="indigo"
              className="w-full  h-[45px]"
            >
              {loading == true && success == false &&
                <CircleSpinner color="#FFFFFF" size={20} />
              }
              {loading == false && success == false &&
                <span>
                  Log in <span aria-hidden="true">&rarr;</span>
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
