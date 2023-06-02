import { Component } from '@/components/component/Component'
import { TextField } from '@/components/componentFields/TextField'
import { PriceField } from '@/components/componentFields/PriceField'
import { ColorModal } from '@/components/componentFields/ColorModal'
import { ImageField } from '@/components/componentFields/ImageField'

import Icon from '@/images/componentsIcon/reviewsStarsIcon.svg'
import Preview from '@/images/componentsPreview/PreviewsStarPreview.png'
import { DeleteField } from '../componentFields/DeleteField'
import { useEffect, useRef, useState } from 'react'


export const ReviewsStarsIcon = Icon;
export const ReviewsStarsPreview = Preview;



export function ReviewsStars({data, product, setProduct}){


    const compRef = useRef(null);
    

    function onDelete() {
        let newProduct = {...product};
        newProduct.informations.splice(data.index, 1)
        
        for (let i = 0; i < newProduct.informations.length; i++) {
            newProduct.informations[i].index = i
        }
        setProduct(newProduct); 
    }

 

    return (
        <div>
            <Component compRef={compRef} icon={Icon} section="Informations"
                  data={data} product={product} setProduct={setProduct}
            >
                <DeleteField callback={onDelete} compRef={compRef} />
            </Component>
        </div>

    )
}