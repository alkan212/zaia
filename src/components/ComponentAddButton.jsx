import { Search } from "@/components/Search";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";


export function ComponentAddButton({items, product, setProduct}){

    const [open, setOpen] = useState(false);

    return (
        <>
            <div onClick={()=>setOpen(true)} className={`group cursor-pointer bg-[#19192C] hover:bg-[#201F36] active:bg-[#28273E] flex items-center justify-center w-full h-7 rounded-md`}>
                <PlusIcon className={`text-white/80 group-hover:text-white w-3`} strokeWidth={2} />
            </div>

            <Search product={product} setProduct={setProduct} open={open} setOpen={setOpen} items={items} />
        </>
    )
}