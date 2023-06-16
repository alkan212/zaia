import Head from 'next/head'

import React, { Fragment, cloneElement, useCallback, useEffect, useRef, useState } from 'react'

import { CreatorPersonalisation } from '@/components/CreatorPersonalisation'
import { CreatorInformation } from '@/components/CreatorInformation'
import { CreatorDescription } from '@/components/CreatorDescription'

import { useRouter } from 'next/router'
import { ArrowLeftIcon, ArrowLongRightIcon, ArrowRightIcon, CheckIcon, IdentificationIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ASSIOCIATE_COMP, ASSIOCIATE_STORE_COMPONENTS, ASSIOCIATE_STORE_TEMPLATE, ASSOCIATE_TEMPLATE } from 'lib/assiociate'
import { Dialog, Transition } from '@headlessui/react'
import { CircleSpinner } from 'react-spinners-kit'
import { POST } from 'lib/requests'
import { findGetParameter, shouldTextBeWhite } from 'lib/utils'
import { CreatorHeader } from '@/components/CreatorHeader'
import whiteLogo from "@/images/whiteLogo.svg"
import ImageReact from "next/image"

function assiociateComponent(storeData, router) {
  storeData.informations.forEach((item, index) => {
    if (item.name == "Product_Information") {
      let comp = ASSOCIATE_TEMPLATE[router.query.creator].comp(index);
      item.comp = comp.comp;
      item.template = comp.template;
      item.onCreate = comp.onCreate ?? null;
      return
    } else {


      let comp = ASSIOCIATE_COMP[item.name](index)
      item.comp = comp.comp;
      item.template = comp.template;
      item.onCreate = comp.onCreate ?? null;
    }

  })

  storeData.personalisation.forEach((item, index) => {
    let comp = ASSIOCIATE_COMP[item.name](index)
    item.comp = comp.comp;
    item.template = comp.template;
    item.onCreate = comp.onCreate ?? null;
  })

  storeData.description.forEach((item, index) => {
    let comp = ASSIOCIATE_COMP[item.name](index)
    item.comp = comp.comp;
    item.template = comp.template;
    item.onCreate = comp.onCreate ?? null;
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
  const [isEdit, setIsEdit] = useState(false)
  const [storeName, setStoreName] = useState(undefined)
  const [step, setStep] = useState(0)

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
        storeData = assiociateComponent(storeData, router)
        setProduct(storeData)
        setIsEdit(true)
        setStoreName(storeName)
      }
    }

    fetchData()
  }, [user])


  async function create(name) {
    let newProduct = { ...product };

    try {
      for (let i = 0; i < product.informations.length; i++) {
        newProduct = await product.informations[i].onCreate(product);
      }
      for (let i = 0; i < product.personalisation.length; i++) {
        newProduct = await product.personalisation[i].onCreate(product);
      }
      for (let i = 0; i < product.description.length; i++) {
        newProduct = await product.description[i].onCreate(product);
      }

    } catch (e) {
    }

    console.log(newProduct)
    let response = await POST("/api/createStore", { storeName: name, storeData: newProduct, storeType: router.query.creator, userToken: user.token })

    if (response.success == true) {
      return true
    } else {
      return response.error
    }
  }

  async function updateStore() {
    let newProduct = { ...product };


    for (let i = 0; i < product.informations.length; i++) {
      try {
        console.log(product.informations[i])
        newProduct = await product.informations[i].onCreate(product);
      } catch { }
    }

    for (let i = 0; i < product.personalisation.length; i++) {
      try {
        newProduct = await product.personalisation[i].onCreate(product);
      } catch { }
    }

    for (let i = 0; i < product.description.length; i++) {
      try {
        newProduct = await product.description[i].onCreate(product);
      } catch { }
    }

    let response = await POST("/api/updateStore", { storeName: storeName, userToken: user.token, storeData: newProduct })

    if (response.success == true) {
      return true
    }
  }

  console.log("STEP : ", step)


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



              {step == 0 &&
                <>
                  <div onClick={() => { isEdit == false ? router.push("/templates") : router.push(`/store/${storeName}`) }} className='flex items-center justify-center bg-black px-8 cursor-pointer rounded-lg py-3.5'>
                    <p className='text-white text-[14px] font-medium mr-1.5 hidden screen-x-500:block'>Cancel</p>
                    <XMarkIcon className='text-white w-5' />
                  </div>

                  <button onClick={() => setStep(1)} className='flex items-center justify-center bg-white px-7 cursor-pointer rounded-lg py-3.5 ml-3'>
                    <p className='text-black text-[14px] font-bold mr-1.5 '>Next step</p>
                    <ArrowRightIcon className='text-black w-5' />
                  </button>
                </>
              }

              {step == 1 &&
                <>
                  <div onClick={() => { setStep(0) }} className='flex items-center justify-center bg-black px-8 pl-6 cursor-pointer rounded-lg py-3.5'>
                    <ArrowLeftIcon className='text-white w-5' />
                    <p className='text-white text-[14px] font-medium ml-1.5 hidden screen-x-500:block'>Go back</p>
                  </div>

                  <CreateButton isEdit={isEdit} router={router} nameOpen={nameOpen} setNameOpen={setNameOpen} create={create} updateStore={updateStore} />
                </>
              }

            </div>

            <div className='pt-4 px-5'>
              {step == 0 && product &&
                <>
                  <CreatorInformation product={product} setProduct={setProduct} />

                  <CreatorPersonalisation product={product} setProduct={setProduct} />

                  <CreatorDescription product={product} setProduct={setProduct} />
                </>
              }

              {step == 1 && product &&
                <CreatorHeader product={product} setProduct={setProduct} />
              }
            </div>
          </div>


          <div className='phone:block w-full flex justify-center min-h-[100vh] max-h-[100vh] overflow-y-auto col-start-2'>
            {step == 1 &&
              <div style={{ backgroundColor: product?.header.theme.color }} className={`${product?.header.theme.name == "light" && "border-b border-neutral-300"}`}>
                <div className='grid grid-cols-2 screen-x-1200:grid-cols-[35%_30%_35%]'>
                  <div className='hidden screen-x-1200:block'></div>

                  <div className='w-full h-full flex items-center justify-start screen-x-1200:justify-center py-4 pl-7 screen-x-1200:pl-0'>
                    {product &&
                      <ImageReact
                        src={product.header.logo.url}
                        alt={""}
                        width={100}
                        height={100}
                        className={"z-[1]"}
                        style={{ width: `${product.header.logo.size}px` }}
                      />
                    }
                  </div>
                  <div className='w-full h-full flex items-center justify-end screen-x-1200:justify-start pr-7 screen-x-1200:pr-0'>
                    <svg class={`h-6 mr-5 last-of-type:!mr-0 ${shouldTextBeWhite(product?.header.theme.color) && "text-white" || "text-black"}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                    </svg>
                    <svg class={`h-6 mr-5 last-of-type:!mr-0 ${shouldTextBeWhite(product?.header.theme.color) && "text-white" || "text-black"}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                    </svg>
                    <svg class={`h-6 mr-5 last-of-type:!mr-0 ${shouldTextBeWhite(product?.header.theme.color) && "text-white" || "text-black"}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                    </svg>
                    <svg class={`h-6 mr-5 last-of-type:!mr-0 ${shouldTextBeWhite(product?.header.theme.color) && "text-white" || "text-black"}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                    </svg>
                    <svg class={`h-6 mr-5 last-of-type:!mr-0 ${shouldTextBeWhite(product?.header.theme.color) && "text-white" || "text-black"}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              </div>
            }

            <div className='w-full max-w-6xl px-10 pb-10 mt-4'>
              {Template && product &&
                cloneElement(Template, { product: product })
              }
            </div>
          </div>

        </main>

      </div>
    </div>
  )
}


function CreateButton({ isEdit, router, nameOpen, setNameOpen, create, updateStore }) {

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(undefined)

  async function update() {
    setLoading(true);
    let response = await updateStore();
    if (response == true) {
      setSuccess(true)
      setTimeout(() => {
        router.push(`/store/${decodeURI(router.query.name)}`)
      }, 700);
    }
  }

  return (
    <>
      {isEdit == false &&
        <div onClick={() => setNameOpen(true)} className='flex items-center justify-center bg-white px-7 cursor-pointer rounded-lg py-3.5 ml-3'>
          <p className='text-black text-[14px] font-bold mr-1.5 '>Create your product</p>
          <ArrowRightIcon className='text-black w-5' />
          <NameModal callback={create} nameOpen={nameOpen} setNameOpen={setNameOpen} router={router} />
        </div>
      }

      {isEdit == true &&
        <div onClick={update} className='flex items-center justify-center bg-white px-7 cursor-pointer rounded-lg py-3.5 ml-3'>
          {loading == true && success == undefined &&
            <CircleSpinner size={20} color={"#000000"} />
          }
          {success == true &&
            <CheckIcon className='text-black w-5' strokeWidth={2.5} />
          }
          {loading == false && success == undefined &&
            <>
              <p className='text-black text-[14px] font-bold mr-1.5 '>Update Product</p>
              <ArrowRightIcon className='text-black w-5' />
            </>
          }
        </div>
      }
    </>

  )
}


function NameModal({ callback, nameOpen, setNameOpen, router }) {

  const t = useRef(null)
  const inputRef = useRef(null)

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
      setError(undefined)
      setTimeout(() => {
        router.push("/store/" + name)
      }, 700)
    } else {
      setError(response)
      setLoading(false)
      setTimeout(() => {
        setError(undefined)
      }, 3000);
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
      <Dialog onClose={closeModal} open={nameOpen} initialFocus={inputRef}>
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
                <input ref={inputRef} onInput={(e) => setName(e.currentTarget.value)} onBlur={onBlur} onFocus={onFocus} className='w-full h-full bg-transparent outline-none pl-3 font-medium' placeholder='My dream store' />
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

