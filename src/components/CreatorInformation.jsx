import { ComponentSection } from "@/components/ComponentSection"
import { Replace } from "@/components/Replace"
import { ComponentAddButton } from "@/components/ComponentAddButton"
import React, { cloneElement } from "react"

import { Items } from "@/components/items/InformationItems"

export function CreatorInformation({product, setProduct}) {

  product.count = {}
  
  return (
    <div name={"Informations"} className={"mt-[50px] border-b border-[#312F52] border-dashed pb-6"}>
      <ComponentSection name={"Informations"} />
      <div className='w-full'>
        <Replace section={"informations"} />
        {
          product.informations.map((obj, i)=>{

            if(product.count[obj.name] == undefined){
              product.count[obj.name] = 1 
            }else{
              product.count[obj.name] += 1
            }

            return([
              cloneElement(obj.comp, {data:obj, product:product ,setProduct:setProduct, key:i}),
              <Replace key={`replace_${i}`} section={"informations"} />
            ])
          })
        }
      </div>
      <ComponentAddButton product={product} setProduct={setProduct} items={Items} />
    </div>
  )
}

