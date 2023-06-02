import Head from 'next/head'

import React, { Fragment, useEffect, useRef, useState } from 'react'
import TextLogo from "@/images/TextLogo.svg"

import { CreatorPersonalisation } from '@/components/CreatorPersonalisation'
import { CreatorInformation } from '@/components/CreatorInformation'
import { CreatorDescription } from '@/components/CreatorDescription'

import { Preview } from '@/components/Preview'

import { tailwindBgToCss, tailwindTextToCss } from '@/components/component/tailwindToCss'
import { Description } from '@/components/component/Description'
import { Details } from '@/components/component/Details'
import { ClothingSize } from '@/components/component/ClothingSize'
import { Colors } from '@/components/component/Colors'
import { ProductInformation } from '@/components/component/ProductInformation'
import { OpenSideBarbutton } from '@/components/sidebar/openSideBarButton'
import { PhoneSideBar } from '@/components/sidebar/phoneSideBar'
import { DesktopSideBar } from '@/components/sidebar/desktopSideBar'
import { CreatorSection } from '@/components/creator/CreatorSection'
import { ReviewsStars } from '@/components/component/ReviewsStars'


import { reviewsStarsData, colorsData, clothingSizeData, descriptionData, detailsData } from '@/components/defaultDatas/componentsData'
import { Template_1 } from '@/components/templates/template_1'
import Image from 'next/image'


const defaultProduct = {
  
  count:{

  },
 
  informations: [
    {
      comp: <ProductInformation />,
      name: "Product_Information",
      index: 0,
      data:{
        name:"Product Name",
        price:"25",
        currency:"$",
        color:"black",
        images:[],
      }
    },

    reviewsStarsData(1)
  ],

  personalisation: [
    clothingSizeData(0),
    colorsData(1)
  ],

  description: [
    descriptionData(0),
    detailsData(1)
  ],

}

export default function Creator() {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [product, setProduct] = useState(defaultProduct)
  const [open, setOpen] = useState(false)


  function create(){
    console.log(product)
  }


  return (
    <div className='bg-white p-0 m-0 dark'>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>

      <div className='bg-white p-0 m-0 overflow-y-hidden max-h-[100vh]'>

 
        <main className='bg-white grid grid-cols-[400px_auto] xl:grid-cols-[500px_auto] overflow-y-hidden max-h-[100vh]'>

              <div className='fixed pb-20 pt-4 px-5 w-full phone:max-w-[400px] xl:max-w-[500px] bg-[#100F1F] overflow-y-auto max-h-[100vh] scrollbar'>
                <div className=' bg-[#171729] rounded-[7px]space-y-4 phone:space-y-0 p-4 px-6 block'>
                  <div className='mb-6'>
                    <a href="#">
                      <Image src={TextLogo} className={`w-20`} />
                    </a>
                  </div>

                  <div className='flex flex-col phone:flex-row phone:items-center justify-start phone:justify-between'>
                    <div className='w-full phone:w-[68%]'>
                      <input type="text" defaultValue={"New Product"} className={`h-12 w-full focus:ring-indigo-600 focus:bg-black/50 focus:border-indigo-600 focus:ring-1 focus:-ring-offset-1 rounded-md outline-none border border-gray-700 text-white bg-black/20`} />
                    </div>
                    
                    <div className='w-auto phone:w-[28%] flex phone:block space-x-4 phone:space-x-0 phone:mt-0 mt-4'>
                      <button onClick={create} className='block phone:hidden text-white bg-black/10 border border-gray-600 hover:bg-black/30 active:bg-black/50 w-full py-2.5 rounded-md font-base text-base'>See Preview</button>
                      <button onClick={create} className='text-white bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 w-full py-2.5 rounded-md font-base text-base'>Create</button>
                    </div>
                  </div>
                </div>

                <CreatorInformation product={product} setProduct={setProduct} />

                <CreatorPersonalisation product={product} setProduct={setProduct} />

                <CreatorDescription product={product} setProduct={setProduct} />
              </div>


              <div className='hidden phone:block px-10 py-10 w-full flex justify-center min-h-[100vh] max-h-[100vh] overflow-y-auto col-start-2'>
                <div className='w-full max-w-6xl'>
                  <Template_1 product={product} />
                </div>
                

              </div>
             
        </main>
   
   

         
         
 
      </div>
    </div>
  )
}

