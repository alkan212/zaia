import { Items } from "@/components/items/InformationItems"
import { Component } from "@/components/component/Component"
import { ImageField } from "@/components/componentFields/ImageField"
import whiteLogo from "@/images/whiteLogo.svg"
import React, { cloneElement, useEffect, useRef, useState } from "react"
import { ArrowLongLeftIcon, ArrowLongRightIcon, SwatchIcon } from "@heroicons/react/24/outline"
import { Transition } from "@headlessui/react"
import Icon from '@/images/componentsIcon/themeIcon.svg'
import { rgbToHex, shouldTextBeWhite } from "lib/utils"

export function ComponentStoreTheme({ product, setProduct }) {


    const [color, setColor] = useState(product.header.theme.customColor)

    const [selected, setSelected] = useState(product.header.theme.name)
    const compRef = useRef(null);
    let data = {
        name: "Theme"
    };

    console.log(product?.header.theme)

    function onThemeChange(value){
        let newProduct = { ...product }
        newProduct.header.theme.name = value.theme;
        newProduct.header.theme.color = value.color;
        setProduct(newProduct)
        setSelected(value.theme)
    }

    function onCustomColorChange(value){
        let newProduct = { ...product }
        newProduct.header.theme.color = value;
        newProduct.header.theme.customColor = value;
        setProduct(newProduct)
    }


    return (
        <Component compRef={compRef} icon={Icon} section={"Descriptions"}
            data={data} product={product} setProduct={setProduct}

        >
            <div className='mt-0 grid gap-y-5'>
                <ColorBall color={"bg-[#000]"} value={"#18181b"} theme={"dark"} text={"Dark"} textClass={"text-white"} selected={selected} callback={onThemeChange} />
                <ColorBall color={"bg-[#F2F2F2]"} value={"#FFFFFF"} theme={"light"} text={"Light"} textClass={"text-black"} selected={selected} callback={onThemeChange} />
                <ColorBall color={`bg-${product.informations[0].data.color}-600`} theme={"Secondary"} text={"Secondary"} textClass={"text-white"} selected={selected} callback={onThemeChange} />
                <CustomColorBall theme={"Custom"} text={"Custom"} selected={selected} colorCallback={onCustomColorChange} callback={onThemeChange} color={color} setColor={setColor} />
            </div>
        </Component>
    )
}


function ColorBall({color, theme, text, textClass, callback, selected, value}){

    const buttonRef = useRef(null);


    function onChange(){
        if(callback) callback({
            theme:theme,
            color:value ?? rgbToHex(window.getComputedStyle(buttonRef.current).backgroundColor)
        });
    }
    
    console.log("z",shouldTextBeWhite("#FFFFFF"))

    return(
        <button ref={buttonRef} onClick={onChange} className={`px-6 py-3 rounded ${color} ring-0 ring-white hover:ring-1 hover:ring-offset-4 ring-offset-0 ring-offset-[#171628] ${selected == theme && "!ring-1 !ring-white/70 !ring-offset-4"}`}>
            <p className={`text-sm font-medium ${textClass}`}>{text}</p>
        </button>
    )
}

function CustomColorBall({theme, text, textClass, callback, colorCallback, selected, color, setColor}){

    const inputRef = useRef(null);

    function onChange(){
        if(callback) callback({
            theme:theme,
            color:color,
        });
        inputRef.current.click();
    }

    function onColorChange(e){
        setColor(e.currentTarget.value)
        colorCallback(e.currentTarget.value)
    }


    return(
        <button 
        onClick={onChange} 
        style={{backgroundColor:color}}
        className={`px-6 py-3 rounded ring-0 ring-white hover:ring-1 hover:ring-offset-4 ring-offset-0 ring-offset-[#171628] ${selected == theme && "!ring-1 !ring-white/70 !ring-offset-4"}`}>
            <p className={`text-sm font-medium ${textClass} ${shouldTextBeWhite(color) && "!text-white" || "text-black"}`}>{text}</p>
            <input ref={inputRef} onChange={onColorChange} type="color" className="sr-only" />
        </button>
    )
}