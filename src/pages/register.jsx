import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import TextLogo from "@/images/TextLogo.svg"

export default function Register() {
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
        <form
          action="#"
          className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2"
        >
          <TextField
            className="col-span-full"
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            className="col-span-full"
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
          <TextField
            className="col-span-full"
            label="Referral Code ?"
            id="referral_code"
            name="referral_code"
            type="text"
            autoComplete=""
          />
          <div className="col-span-full">
            <Button
              type="submit"
              variant="solid"
              color="indigo"
              className="w-full"
            >
              <span>
                Sign up <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
