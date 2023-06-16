import { RadioGroup } from "@headlessui/react"
import { useEffect, useState } from "react"



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export function Template_SizePicker({config, obj}) {

    let sizes = obj.data.sizes;

    
    const selectedSizeList = [];
    sizes.forEach((size, index) => {
        if(size.value == true){
            selectedSizeList.push(index)
        }
    });

    console.log("sizes", selectedSizeList)

    const [selectedSize, setSelectedSize] = useState(sizes[selectedSizeList[0]])

    return (
        <div className="mt-8">
            <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-gray-900">Size</h2>
            </div>


            <RadioGroup defaultValue={selectedSize.size} onChange={setSelectedSize} className="mt-0">
                <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                <div className="flex flex-row flex-wrap">
                    {sizes.map((size) => (
                        <RadioGroup.Option
                            key={size.size}
                            value={size.size}
                            className={({ active, checked }) =>
                                classNames(
                                    size.value ? 'cursor-pointer focus:outline-none' : 'hidden',
                                    active ? `ring-2 ring-offset-2 ring-${config.color}-500` : '',
                                    checked
                                        ? `bg-${config.color}-600 border-transparent text-white hover:bg-${config.color}-700`
                                        : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                                    'mr-2 mt-2 border rounded-md py-3 px-3 w-full min-w-[80px] max-w-[80px] flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                                )
                            }
                            disabled={!size.value}
                        >
                            <RadioGroup.Label as="span">{size.size}</RadioGroup.Label>
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
        </div>
    )
}