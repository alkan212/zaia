import { Items } from "@/components/items/InformationItems"
import { Component } from "@/components/component/Component"
import { ImageField } from "@/components/componentFields/ImageField"
import whiteLogo from "@/images/whiteLogo.svg"
import React, { cloneElement, useRef, useState } from "react"
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline"
import { Transition } from "@headlessui/react"


export function ComponentStoreIcon({ product, setProduct }) {

    const compRef = useRef(null);
    const Icon = whiteLogo;
    let data = product.header.logo;
    const array = [
        {name:"Very Small", value:20},
        {name:"Small", value:30},
        {name:"Medium", value:40},
        {name:"Large", value:60},
        {name:"Very Large", value:90},
        {name:"Extra Large", value:130},
    ]

    function onSizeChange(value) {
        let newProduct = { ...product }
        newProduct.header.logo.size = value;
        setProduct(newProduct)
    }

    function onImageChange(value) {
        let newProduct = { ...product }
        newProduct.header.logo.url = value;
        setProduct(newProduct)
    }

    return (
        <Component compRef={compRef} icon={Icon} section={"Descriptions"}
            data={data} product={product} setProduct={setProduct}

        >
            <div className='mt-0 grid grid-cols-[40%_60%]'>
                <ImageField accept=".png, .jpg, .jpeg, .svg" recommandedRatio={"1:1"} defaultValue={"/whiteLogo.svg"} callback={onImageChange} />

                <div className="ml-auto">
                    <p className="text-white/90 mb-2 ">Size</p>
                    <TextCarousel array={array} defaultIndex={1} callback={onSizeChange} />
                </div>
            </div>
        </Component>
    )
}

function TextCarousel({ array, defaultIndex, containerClass, callback }) {

    const [selected, setSelected] = useState(defaultIndex ?? 0)

    function back() {
        if (selected == 0) return
        if (callback) callback(array[selected - 1].value);
        setSelected(selected - 1)
    }

    function next() {
        if (selected == array.length - 1) return
        if (callback) callback(array[selected + 1].value)
        setSelected(selected + 1)
    }

    return (
        <div className={`${containerClass} grid h-fit w-fit rounded grid-cols-[40px_100px_40px] px-2 py-2 bg-black/20 border border-white/20 select-none`}>
            <div onClick={back} className="group/arrow flex items-center justify-center cursor-pointer">
                <ArrowLongLeftIcon className="text-white/70 group-hover/arrow:text-white w-5 m-auto " />
            </div>

            <div className="flex items-center justify-center h-full">
                {array.map((obj, i) => {
                    return (i == selected &&
                        <Transition
                            show={true}
                            enter="transition-all duration-200"
                            enterFrom="opacity-0 translate-y-[6px]"
                            enterTo="opacity-100 translate-y-[0px]"
                            leave="transition-all duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            appear={true}
                        >
                            <p key={i} className="text-white relative bottom-[1px] opacity-100">{obj.name}</p>
                        </Transition>
                    )
                })
                }
            </div>

            <div onClick={next} className="group/arrow flex items-center justify-center cursor-pointer">
                <ArrowLongRightIcon className="text-white/70 group-hover/arrow:text-white w-5 m-auto " />
            </div>
        </div>
    )
}
