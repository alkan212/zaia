import { DeleteField } from '../componentFields/DeleteField'
import { Component } from '@/components/component/Component'
import { TextFieldWithIcon } from '@/components/componentFields/TextFieldWithIcon'

import Icon from '@/images/componentsIcon/DetailsIcon.svg'
import Preview from '@/images/componentsPreview/DetailsPreview.png'

import { useRef, useState, useEffect } from 'react'
import { TextField } from '@/components/componentFields/TextField'


export const DetailsIcon = Icon;
export const DetailsPreview = Preview;



export function Details({ data, product, setProduct }) {

    const compRef = useRef(null);



    /* on component delete */
    function onDelete() {
        let newProduct = { ...product };
        newProduct.description.splice(data.index, 1)

        for (let i = 0; i < newProduct.description.length; i++) {
            newProduct.description[i].index = i
        }
        setProduct(newProduct);
    }

    const onWrite = (field_index, value) => {
        let newProduct = { ...product };
        newProduct.description[data.index].data.details[field_index].value = value;
        setProduct(newProduct)
    }

    const addElement = () => {
        let newProduct = { ...product };
        newProduct.description[data.index].data.details.push({ index: newProduct.description[data.index].data.details.length, value: `` })
        console.log(newProduct)
        setProduct(newProduct)
    }

    const removeElement = (field_index) => {
        let newProduct = { ...product };
        newProduct.description[data.index].data.details.splice(field_index, 1);
        for (let i = 0; i < newProduct.description[data.index].data.details.length; i++) {
            newProduct.description[data.index].data.details[i].index = i;
        }
        console.log(field_index, newProduct.description[data.index].data.details)
        setProduct(newProduct);
    }



    return (
        <div>
            <Component compRef={compRef} icon={Icon} section={"Descriptions"}
                data={data} product={product} setProduct={setProduct}
            >

                <TextField name={"Title"} placeholder={"Title"} size={"sm"} />

                <div className='mt-8'>
                    <label className="block text-sm font-medium text-gray-300">
                        Descriptions
                    </label>

                    <div className='space-y-3 mt-1'>
                        {product.description[data.index].data.details.map((obj, i) => (
                            <TextFieldWithIcon key={i} index={obj.index} defaultValue={obj.value} onWrite={onWrite} removeElement={removeElement} />
                        ))
                        } 
                    </div>

                    <button onClick={addElement} className={"group active:bg-black/70 active:border-indigo-400 w-full max-w-[6rem] py-2 border hover:border-gray-400 bg-black/40 border-gray-700 shadow-sm mt-3 text-sm flex items-center justify-center space-x-1 rounded"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" stroke='0.5px' fill="currentColor" class="w-4 h-4 active:text-indigo-400 text-gray-300 font-light">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                    </button>
                </div>


                <DeleteField callback={onDelete} compRef={compRef} />
            </Component>
        </div>

    )
}