import { useState, useRef } from 'react'

import { Component } from '@/components/component/Component'
import { TextField } from '@/components/componentFields/TextField'
import { PriceField } from '@/components/componentFields/PriceField'
import { ColorModal } from '@/components/componentFields/ColorModal'
import { ImageField } from '@/components/componentFields/ImageField'

import Icon from '@/images/componentsIcon/infoIcon.svg'

export const ProductInformationIcon = Icon;


export function ProductInformation({data, product, setProduct}){

    const compRef = useRef();

    function setDataInfo(key, value){
        let newProduct = {...product}
        newProduct.informations[data.index].data[key] = value;
        setProduct(newProduct);
    }
    


    function setName(value){
        setDataInfo("name", value)
    }

    function setPrice(value){
        setDataInfo("price", value)
    }

    function setCurrency(value){
        setDataInfo("currency", value)
    }

    function setColor(value){
        setDataInfo("color", value)
    }

    function setImage(index, value){
        let newProduct = {...product}
        newProduct.informations[data.index].data.images[index] = value;
        setProduct(newProduct);
    }

    return (

        <Component name={data.name} icon={Icon} compRef={compRef} section={"Informations"}
                data={data} product={product} setProduct={setProduct}>
            <div className=" space-y-4 xl:space-y-0 w-full flex justify-between align-center flex-wrap">
                <TextField placeholder={"Basic Tee"} defaultData={data.data.name} callback={setName} name="Product Name" size='sm' />
                <PriceField selectCallback={setCurrency} callback={setPrice} size='sm' defaultData={data.data.price} />
            </div>
    
            <div className="flex align-center flex-row mt-8">
                <p className="block text-sm font-medium text-gray-300 relative top-0.5">Theme Colors</p>
                <ColorModal color={data.data.color} callback={setColor}  />
            </div>


            <div className="block mt-8">
                <p className="block text-sm font-medium text-gray-300 relative top-1 mb-3">Pictures</p>
                <div className="grid gap-4 grid-cols-1 phone:grid-cols-2 screen-x-500:grid-cols-2 screen-x-600:grid-cols-3">

                <ImageField callback={(value)=>setImage(0, value)} defaultValue={data.data.images[0]} />
                <ImageField optionnal={true} callback={(value)=>setImage(1, value)} defaultValue={data.data.images[1]} />
                <ImageField optionnal={true} callback={(value)=>setImage(2, value)} defaultValue={data.data.images[2]} />

                </div>
            </div>
        </Component>
    )
}