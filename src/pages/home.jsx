import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react';
import React from 'react';

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

import { Header } from '@/components/Header'
import exemple1 from "@/images/exemple1.png"
import exemple2 from "@/images/exemple2.png"
import exemple3 from "@/images/exemple3.png"
import exemple4 from "@/images/exemple4.png"




export default function Home() {

  let mainContainer = {
    height:"calc(100vh - 96px)",
    display:"flex",
    alignItems:"center",
    paddingLeft:"100px",
    justifyContent:"space-between"
  }

  let circleBlur = {
    width:"300px",
    aspectRatio:"1/1",
    background:"rgba(60, 79, 255, .3)",
    position:"absolute",
    left:'30%',
    top:"50%",
    transform:"translate(-50%, -50%)",
    filter:"blur(150px)",
    zIndex:"-1",
  }


  let imageContainer = {
    width:"100%",
    maxWidth:"1050px",
    aspectRatio:"2/1.5",
    background:"rgba(101, 127, 255, 0.13)",
    borderRadius:"50px 0px 0px 50px",
    position:"relative",
    display:"flex",
    alignItems:"center",
    justifyContent:"flex-end",
  }


  let imageDiv = {
    position:"absolute",
    maxWidth:"calc(100% - 50px)",
    maxHeight:'calc(100% - 90px)',
    borderRadius:"0px 0px 0px 0px",
    width:"100%",
    height:"100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  }

  let imageStyle = {
    borderRadius:"20px 0px 0px 20px",
  }



  let iteration = 0;

  useEffect(() => {
    let eles = document.querySelectorAll("div.imageDiv");

    function imageLoop(i){
      console.log(eles[i])
      let element = eles[i]
      try{
        // document.getElementsByClassName("cpResizeScale")[0].classList.remove("cpResizeScale")
        // document.getElementsByClassName("z-[667]")[0].classList.remove("z-[667]")

      }catch{}
      
      element.classList.add("z-[667]");
      element.classList.add("cpResizeScale");

      setTimeout(() => {
        if(i < 3){
          imageLoop(i+1);
        }else{
          let elesToSupp = document.getElementsByClassName("imageDiv");
          let ele = elesToSupp[0]
          for (let iSupp = 0; iSupp < elesToSupp.length; iSupp++) {
            const element = elesToSupp[iSupp];
            element.classList.remove("cpResizeScale")
            element.classList.remove("z-[667]")
          }
          ele.classList.add("cpResizeScale")

          setTimeout(() => {
            imageLoop(1);
            ele.classList.remove("cpResizeScale")
          }, 2500);
        }
      }, 2500);
    }
    

    setTimeout(() => {
      imageLoop(1);
    }, 1000);
    

  }, );


  let exempleImgDiv1 = React.createRef();
  let exempleImgDiv2 = React.createRef();
  let exempleImgDiv3 = React.createRef();
  let exempleImgDiv4 = React.createRef();


  return (
    <>
      <Head>
        <title>Sign In - TaxPal</title>
      </Head>
      <main className=''>
        <Header />

        <div className=' border-red-400' style={mainContainer}>
          <div className='w-full max-w-lg pr-10 relative'>
            <h1 className='text-white text-5xl  font-bold tracking-wide'><span className='text-indigo-400'>Free</span> Ecommerce<br/>Website Maker</h1>
            <p className='mt-8 text-xl font-base leading-8 tracking-wider text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque numquam nisi ipsa id non architecto animi excepturi sit hic </p>
            <a href="#" className='mt-12 px-14 rounded-full py-3 w-fit bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center space-x-3'>
              <p className='text-xl text-white tracking-wide'>start</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
              </svg>
            </a>
            <div style={circleBlur}></div>
          </div>

          <div style={imageContainer} className=''>
            <div ref={exempleImgDiv1} className='imageDiv z-[1]' style={imageDiv}>
              <Image 
                style={imageStyle}
                src={exemple1}
                width={1500}
                height={1000}
                alt={""}
                className={"object-cover"}
              />
            </div>
            <div ref={exempleImgDiv2} className='imageDiv' style={imageDiv}>
              <Image 
                style={imageStyle}
                src={exemple2}
                width={1500}
                height={1000}
                alt={""}
                className={"object-cover"}
              />
            </div>
            <div ref={exempleImgDiv3} className='imageDiv' style={imageDiv}>
              <Image 
                style={imageStyle}
                src={exemple3}
                width={1500}
                height={1000}
                alt={""}
                className={"object-cover"}
              />
            </div>
            <div ref={exempleImgDiv4} className='imageDiv' style={imageDiv}>
              <Image 
                style={imageStyle}
                src={exemple4}
                width={1500}
                height={1000}
                alt={""}
                className={"object-cover"}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
