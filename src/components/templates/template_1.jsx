import { cloneElement, useState } from 'react'


import { Template_Images } from '@/components/templates/templates_fields/Template_Images'
import { Template_BuyButton } from '@/components/templates/templates_fields/Template_BuyButton'
import { formatCurrency } from 'lib/utils'


export function Template_1({product}) {
  
  let config = product.informations[0].data

  
  return (
    <div className={`bg-white`}>
      <div className="pt-6 pb-16 sm:pb-24">

        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 screen-x-900:max-w-7xl screen-x-900:px-8">
          <div className="screen-x-900:grid screen-x-900:auto-rows-min screen-x-900:grid-cols-12 screen-x-900:gap-x-8">
            <div className="screen-x-900:col-span-5 screen-x-900:col-start-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">{config.name}</h1>
                <p className="text-xl font-medium text-gray-900 ">{formatCurrency(config.price, false)}{config.currency}</p>
              </div>
         

              {product.informations.map((obj, i) => {
                if(i == 0){return null}
                if(obj.toggle == true){
                  return(
                    cloneElement(obj.template, {config:config ,obj:obj, key:i})
                  )
                }
                })}

            </div>

            {/* Image gallery */}
            <Template_Images images={config.images} />

            <div className="mt-2 screen-x-900:col-span-5">
              <div>
                {product.personalisation.map((obj, i) => {
                  if(obj.toggle == true){
                    return(
                      cloneElement(obj.template, {config:config ,obj:obj, key:i})
                    )
                  }
                })}
                
                {/* Buy Button */}
                <Template_BuyButton config={config} />
              </div>
              
              {/* Product details */}
              <div>
              {product.description.map((obj, i) => {
                  if(obj.toggle == true){
                    return(
                      cloneElement(obj.template, {config:config ,obj:obj, key:i})
                    )
                  }
                })}
              </div>
            

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
