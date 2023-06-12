import { useState } from "react"


export function Template_BuyButton({config}){

    const [isFocus, setIsFocus] = useState(false);

    return(
        <button
            onFocus={(e)=>setIsFocus(true)}
            onBlur={(e)=>setIsFocus(false)}
            className={`${isFocus && `ring-${config.color}-500`} mt-14 flex w-full items-center justify-center rounded-md border border-transparent bg-${config.color}-600 py-3 px-8 text-base font-medium text-white hover:bg-${config.color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2`}
        >
            Buy Now
        </button>
    )
}