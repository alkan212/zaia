import { Search } from "@/components/Search";
import { useState } from "react";


export function ComponentAddButton({items, product, setProduct}){

    const [open, setOpen] = useState(false);

    return (
        <>
            <div onClick={()=>setOpen(true)} className={`group cursor-pointer bg-[#19192C] hover:bg-[#201F36] active:bg-[#28273E] flex items-center justify-center w-full h-7 rounded-md`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="white" class="w-4 h-4 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                </svg>
            </div>

            <Search product={product} setProduct={setProduct} open={open} setOpen={setOpen} items={items} />
        </>
    )
}