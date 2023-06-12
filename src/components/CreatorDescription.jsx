import { ComponentSection } from "@/components/ComponentSection"
import { Replace } from "@/components/Replace"
import { ComponentAddButton } from "@/components/ComponentAddButton"
import React, { cloneElement, useRef, useState } from "react"
import { Description } from "@/components/component/Description"
import { Items } from "@/components/items/DescriptionItems"
import { Details } from "@/components/component/Details"


export function CreatorDescription({product, setProduct}) {
 

  const compContainer = useRef();


  return (
    <div ref={compContainer} name={"Descriptions"} className={"mt-10 !last:border-b border-[#312F52] border-dashed pb-6"}>
      <ComponentSection name={"Descriptions"} />
      <div className='w-full'>
        <Replace section={"description"} />

        {
          product.description.map((obj, i)=>{

            if(product.count[obj.name] == undefined){
              product.count[obj.name] = 1 
            }else{
              product.count[obj.name] += 1
            }

            return([
              cloneElement(obj.comp, {data:obj, product:product ,setProduct:setProduct, key:i}),
              <Replace key={`replace_${i}`} section={"description"} />
            ])
          })
        }

      </div>
      <ComponentAddButton product={product} setProduct={setProduct} items={Items} />
    </div>
  )

}