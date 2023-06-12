import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react';


export function CheckBoxSimple({index=0, name, isChecked , callback}){

    const [rId] = useState(`checkBoxSimple_${Math.round(Math.random()*(10**10))}`)

    function onSizeChecked(e){
        if(isChecked == true){
            callback(index, name, false);
        }else{
            callback(index, name, true);
        }
    }

    return (
        <label htmlFor={rId} className={`${isChecked && 'border-indigo-500 ring-1 ring-offset-0 ring-indigo-500'} w-full max-w-[90px] h-[49px] mr-3 mt-2 relative flex border-gray-500 items-center cursor-pointer rounded-lg border hover:shadow bg-black/20 p-4 shadow-sm focus:outline-none`}>
            <p className={`${isChecked && "text-gray-200" || "text-gray-400"} block text-sm font-medium`}>{name}</p>
            <input defaultChecked={isChecked} onInput={onSizeChecked} type={"checkbox"} id={rId} className='sr-only'></input>
            <CheckCircleIcon className={`${isChecked && 'block' || 'hidden'} absolute h-[18px] w-[18px] right-3 top-1/2 -translate-y-1/2 text-indigo-500`} />
        </label>
    )
}