import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { FreeTemplate } from '@/components/FreeTemplate'
import { Testimonials } from '@/components/Testimonials'
import { HowToUse } from '@/components/HowToUse'

export default function Home() {
  return (
    <>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header className={"bg-zinc-900"} />
      <main className='bg-zinc-900'>
        <Hero />
        <SecondaryFeatures />
        <HowToUse />
        {/* <Testimonials /> */}
        <FreeTemplate />
      </main>
      <Footer />
    </>
  )
}
