import Head from 'next/head'

import React, { Fragment, cloneElement, useEffect, useRef, useState } from 'react'

import { CreatorPersonalisation } from '@/components/CreatorPersonalisation'
import { CreatorInformation } from '@/components/CreatorInformation'
import { CreatorDescription } from '@/components/CreatorDescription'

import { useRouter } from 'next/router'
import { ArrowLongRightIcon, ArrowRightIcon, CheckIcon, IdentificationIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ASSIOCIATE_STORE_COMPONENTS, ASSIOCIATE_STORE_TEMPLATE, ASSOCIATE_TEMPLATE } from 'lib/assiociate'
import { Dialog, Transition } from '@headlessui/react'
import { CircleSpinner } from 'react-spinners-kit'
import { POST } from 'lib/requests'
import { findGetParameter } from 'lib/utils'



function assiociateComponent(storeData) {
  storeData.description.forEach((item, index) => {
    item.comp = ASSIOCIATE_STORE_COMPONENTS[item.name]
    item.template = ASSIOCIATE_STORE_TEMPLATE[item.name]
  })
  console.log(storeData)
  return storeData
}



export default function creator({ user, setUser }) {

  const [Template, setTemplate] = useState(undefined)
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [product, setProduct] = useState(undefined)
  const [open, setOpen] = useState(false)
  const [nameOpen, setNameOpen] = useState(false)

  // set the template to use
  useEffect(() => {
    if (ASSOCIATE_TEMPLATE[router.query.creator] == undefined) { return }

    let template = ASSOCIATE_TEMPLATE[router.query.creator].template;
    setTemplate(template)

    if (findGetParameter("name") == null) {
      let product = ASSOCIATE_TEMPLATE[router.query.creator].product;
      setProduct(product)
    }
  }, [router])


  useEffect(() => {
    let storeName = decodeURI(findGetParameter("name"));
    if (storeName == null) return;
    if (user == undefined || user == false) return;

    async function fetchData() {
      let response = await POST("/api/getStore", { storeName: storeName, userToken: user.token })

      if (response.success == true) {
        let storeData = response.store.data;
        storeData = assiociateComponent(storeData)
        console.log(storeData)

        setProduct(storeData)
      }
    }

    fetchData()
  }, [user])


  async function create(name) {
    let response = await POST("/api/createStore", { storeName: name, storeData: product, storeType: router.query.creator, userToken: user.token })

    if (response.success == true) {
      return true
    }
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

          <div className='fixed pb-20  w-full phone:max-w-[400px] xl:max-w-[500px] bg-[#100F1F] overflow-y-auto max-h-[100vh] min-h-[100vh] scrollbar'>

            <div className=' bg-[#6360EB] rounded-b-[7px] justify-between items-center phone:space-y-0 px-6 py-8 flex'>
              <div onClick={() => router.push("/templates")} className='flex items-center justify-center bg-black px-8 cursor-pointer rounded-lg py-3.5'>
                <p className='text-white text-[14px] font-medium mr-1.5 hidden screen-x-500:block'>Cancel</p>
                <XMarkIcon className='text-white w-5' />
              </div>

              <div onClick={() => setNameOpen(true)} className='flex items-center justify-center bg-white px-7 cursor-pointer rounded-lg py-3.5 ml-3'>
                <p className='text-black text-[14px] font-bold mr-1.5 '>Create your product</p>
                <ArrowRightIcon className='text-black w-5' />

                <NameModal callback={create} nameOpen={nameOpen} setNameOpen={setNameOpen} router={router} />

              </div>
            </div>

            <div className='pt-4 px-5'>
              {product &&
                <>
                  {/* <CreatorInformation product={product} setProduct={setProduct} />

                  <CreatorPersonalisation product={product} setProduct={setProduct} /> */}

                  <CreatorDescription product={product} setProduct={setProduct} />
                </>
              }
            </div>
          </div>


          <div className='hidden phone:block px-10 py-10 w-full flex justify-center min-h-[100vh] max-h-[100vh] overflow-y-auto col-start-2'>
            <div className='w-full max-w-6xl'>
              {/* {Template && product &&
                cloneElement(Template, { product: product })
              } */}
            </div>


          </div>

        </main>

      </div>
    </div>
  )
}


function NameModal({ callback, nameOpen, setNameOpen, router }) {

  const t = useRef(null)

  const [inputFocus, setInputFocus] = useState(true)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(undefined)
  const [name, setName] = useState("")
  const [error, setError] = useState(undefined)

  function onFocus(e) {
    setInputFocus(true)
  }

  function onBlur(e) {
    setInputFocus(false)
  }

  async function onClick() {
    if (name == "") { return }
    setLoading(true)
    let response = await callback(name);
    if (response == true) {
      setSuccess(true)

      setTimeout(() => {
        router.push("/store/" + name)
      }, 700)
    }
  }

  function closeModal() {
    t.current.click()
  }

  return (
    <Transition
      show={nameOpen}
      enter="transition duration-200 ease-out"
      enterFrom="transform opacity-0"
      enterTo="transform opacity-100"
      leave="transition-all duration-500 ease-out"
      leaveFrom="transform opacity-100"
      leaveTo="transform opacity-0"
      as={Fragment}
      appear={true}
      className={"z-50 absolute top-0 left-0 w-full h-full"}
    >
      <Dialog onClose={closeModal} open={nameOpen} >
        <div className="fixed inset-0 flex items-center justify-center p-4 py-5 bg-black/30">
          <Dialog.Panel className="w-full max-w-[500px] rounded bg-white p-7">
            <div className='flex items-center justify-between'>
              <Dialog.Title className={"text-[17px] font-medium "}>Give your store a name</Dialog.Title>
              <button ref={t} onClick={() => setNameOpen(false)} className='outline-none'>
                <XMarkIcon className='w-5 cursor-pointer' />
              </button>
            </div>

            <div className='mt-12'>
              <p className='text-[#333868] text-[15px]'>store name</p>

              <div className={`w-full h-[50px] mt-2 rounded bg-[#F6F6F6] border-[1.5px] border-[#515151] flex items-center transition-all ${inputFocus && "!bg-[#F8F8FF] border-[#554BEB]"}`}>
                <div className='h-full aspect-square flex items-center justify-center'>
                  <IdentificationIcon className='w-6' />
                </div>
                <div className='h-[25px] w-[1px] bg-black/50'></div>
                <input onInput={(e) => setName(e.currentTarget.value)} onBlur={onBlur} onFocus={onFocus} className='w-full h-full bg-transparent outline-none pl-3 font-medium' placeholder='My dream store' />
              </div>
              <p className='h-0 relative top-1 text-sm text-red-500'>{error && error}</p>

              <div className='flex items-center justify-end w-full mt-7'>
                <button onClick={onClick} className={`group text-white flex items-center justify-center px-6 h-[42px] text-[16px] border-[1.5px] border-black bg-black rounded transition ${loading == false && "hover:bg-white hover:text-black"}`}>
                  {loading == false && success == undefined &&
                    <>
                      <span className=''>Let's go</span>
                      <ArrowLongRightIcon className='w-5 ml-3' />
                    </>
                  }

                  {loading == true && success == undefined &&
                    <CircleSpinner size={20} color="#FFFFFF" />
                  }

                  {success == true &&
                    <CheckIcon className='w-5 text-white' strokeWidth={2} />
                  }

                </button>
              </div>

            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  )
}


function ButtonWithLoading() {
  return (
    <button>
      {children}
    </button>
  )
}