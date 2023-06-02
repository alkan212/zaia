import { DeleteField } from '../componentFields/DeleteField'
import { Component } from '@/components/component/Component'
import { TextAreaField } from "@/components/componentFields/TextAreaField";

import Icon from '@/images/componentsIcon/DescriptionIcon.svg'
import Preview from '@/images/componentsPreview/DescriptionPreview.png'

import { useRef, useState, useEffect } from 'react'


export const DescriptionIcon = Icon;
export const DescriptionPreview = Preview;


export function Description({ data, product, setProduct }) {

    const compRef = useRef(null);


    /* on component delete */ 
    function onDelete() {
        let newProduct = {...product};
        newProduct.description.splice(data.index, 1)
        
        for (let i = 0; i < newProduct.description.length; i++) {
            newProduct.description[i].index = i
        }
        setProduct(newProduct); 
    }

    function onWrite(e) {
        let value = e.currentTarget.value.split('\n')
        data.data.descriptions = value;

        let newProduct = { ...product }
        newProduct.description[data.index] = data;
        setProduct(newProduct);
    }

    return (
        <div>
            <Component compRef={compRef} icon={Icon} section={"Descriptions"}
                data={data} product={product} setProduct={setProduct}

            >

                <div className='mt-0'>
                    <TextAreaField defaultData={data.data.descriptions} callback={onWrite} name={data.name} />
                </div>


                <DeleteField callback={onDelete} compRef={compRef} />
            </Component>
        </div>

    )
}