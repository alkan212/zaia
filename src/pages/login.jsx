import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import TextLogo from "@/images/TextLogo.svg"

export default function Login() {
  return (
    <>
      <Head>
        <title>Sign In - ZAIA</title>
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
        <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
          <TextField
            className=""
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
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
              type="submit"
              variant="solid"
              color="indigo"
              className="w-full"
            >
              <span>
                Sign in <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
