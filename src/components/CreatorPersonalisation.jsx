import { ComponentSection } from "@/components/ComponentSection"
import { Replace } from "@/components/Replace"
import { ComponentAddButton } from "@/components/ComponentAddButton"
import React, { cloneElement, useRef } from "react"
import { Items } from "@/components/items/PersonalisationItems"



export function CreatorPersonalisation({product, setProduct}) {


  const compContainer = useRef();
  
  return (
    <div ref={compContainer} name={"Personalisations"} className={"mt-10 border-b border-[#312F52] border-dashed pb-6"}>
      <ComponentSection name={"Personalisations"} />
      <div className='w-full'>
        <Replace section={"personalisations"} />
        {
          product.personalisation.map((obj, i)=>{

            if(product.count[obj.name] == undefined){
              product.count[obj.name] = 1 
            }else{
              product.count[obj.name] += 1
            }

            return([
              cloneElement(obj.comp, {data:obj, product:product ,setProduct:setProduct, key:i}),
              <Replace section={"personalisations"} />
            ])
          })
        }
      </div>
      <ComponentAddButton product={product} setProduct={setProduct} items={Items} />
    </div>
  )

}