import { Component } from '@/components/component/Component'
import { TextField } from '@/components/componentFields/TextField'
import { PriceField } from '@/components/componentFields/PriceField'
import { ColorModal } from '@/components/componentFields/ColorModal'
import { ImageField } from '@/components/componentFields/ImageField'

import Icon from '@/images/componentsIcon/ColorsIcon.svg'
import Preview from '@/images/componentsPreview/color.png'
import ColorField from '@/components/componentFields/ColorField'
import { DeleteField } from '@/components/componentFields/DeleteField'
import { useEffect, useRef, useState } from 'react'

export const ColorsIcon = Icon;
export const ColorsPreview = Preview;




export function Colors({data, product, setProduct}){

    const compRef = useRef();
    

    /* on component delete */ 
    function onDelete() {
        let newProduct = {...product};
        newProduct.personalisation.splice(data.index, 1)
        
        for (let i = 0; i < newProduct.personalisation.length; i++) {
            newProduct.personalisation[i].index = i
        }
        setProduct(newProduct); 
    }

    const addColor = () => {
        let newProduct = {...product};
        newProduct.personalisation[data.index].data.colors.push({color: '#FFFFFF'})
        setProduct(newProduct)
    }

    const onDeleteColor = (index) => {
        let newProduct = {...product};
        newProduct.personalisation[data.index].data.colors.splice(index, 1)
        setProduct(newProduct)
    }

    const changeColor = (index, value) => {
        let newProduct = {...product}
        newProduct.personalisation[data.index].data.colors[index].color = value;
        setProduct(newProduct)
    }


    return (
        <div>
            <Component 
            compRef={compRef} icon={Icon} section={"Personalisations"}
            data={data} product={product} setProduct={setProduct}
            >

                <div class="space-y-4 xl:space-y-0 w-full flex justify-between align-center flex-wrap">
                    <TextField name="Title" size='sm' placeholder="Color" />
                </div>
        
                <div class="flex flex-col align-center flex-row mt-8 space-y-2">
                    <p class="block text-sm font-medium text-gray-300 relative top-0.5">Theme Colors</p>
                    <ColorField data={data} addCallback={addColor} changeCallback={changeColor} deleteCallback={onDeleteColor} />
                </div>
                <DeleteField callback={onDelete} compRef={compRef} />

            </Component>
        </div>
    )
}