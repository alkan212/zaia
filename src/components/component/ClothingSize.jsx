import { Component } from '@/components/component/Component'
import { TextField } from '@/components/componentFields/TextField'
import { PriceField } from '@/components/componentFields/PriceField'
import { ColorModal } from '@/components/componentFields/ColorModal'
import { ImageField } from '@/components/componentFields/ImageField'

import Icon from '@/images/componentsIcon/ClothingSizeIcon.svg'
import Preview from '@/images/componentsPreview/ClothingSize.png'
import ColorField from '@/components/componentFields/ColorField'
import { DeleteField } from '@/components/componentFields/DeleteField'
import { useEffect, useRef, useState } from 'react'
import { ClothingSizeField } from '@/components/componentFields/ClothingSizeField'

export const ClothingSizeIcon = Icon;
export const ClothingSizePreview = Preview;


export function ClothingSize({data, product, setProduct}){

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

    function onSizeChange(index, size, value){
        console.log(index, size, value)
        let newProduct = {...product};
        newProduct.personalisation[data.index].data.sizes[index] = {size:size, value:value};
        setProduct(newProduct)
    }


    return (
        <div>
            <Component compRef={compRef} icon={Icon} section={"Personalisations"}
                data={data} product={product} setProduct={setProduct}
            >

                <div className="space-y-4 xl:space-y-0 w-full flex justify-between align-center flex-wrap">
                    <TextField name="Title" size='sm' placeholder="Title" />
                </div>

                <ClothingSizeField data={data} callback={onSizeChange} />
          
                <DeleteField callback={onDelete} compRef={compRef} />

            </Component>
        </div>
    )
}