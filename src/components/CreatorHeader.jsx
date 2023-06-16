import { ComponentSection } from "@/components/ComponentSection"
import { Replace } from "@/components/Replace"
import React, { cloneElement, useRef } from "react"


import { ComponentStoreIcon } from "./storeHeaderFolder/ComponentStoreIcon"
import { ComponentStoreTheme } from "./storeHeaderFolder/ComponentStoreTheme"

export function CreatorHeader({ product, setProduct }) {

    product.count = {}

    return (
        <div name={"Header"} className={"mt-[50px] border-b border-[#312F52] border-dashed pb-6"}>
            <ComponentSection name={"Head of the page"} />

            <Replace key={`replace_1`} section={"informations"} /> 

            <div className='w-full'>
                <ComponentStoreIcon product={product} setProduct={setProduct} />
                <Replace key={`replace_2`} section={"informations"} />
                <ComponentStoreTheme product={product} setProduct={setProduct} />
            </div>
        </div>
    )
}



