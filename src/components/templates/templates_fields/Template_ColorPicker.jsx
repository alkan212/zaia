import { RadioGroup } from "@headlessui/react"
import { useState } from "react"
import { tailwindBgToCss, getColorValueFromBg } from "@/components/component/tailwindToCss"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  

export function Template_ColorPicker({config, obj}){

    let colors = obj.data.colors;

    const [selectedColor, setSelectedColor] = useState(colors[0])
    // boxShadow:"0px 0px 0px 2px white dark:bg-zinc-900 , 0px 0px 0px 4px #00FF00"
  
    return (
        <div className="mt-8">
            <h2 className="text-sm font-medium text-gray-900">Color</h2>

            <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                <div className="flex items-center space-x-3">
                    {colors.map((color, index) => (
                        <RadioGroup.Option
                            key={index}
                            value={color}
                            // style={{
                            //     boxShadow:`0px 0px 0px 1px white, 0px 0px 0px 3px ${getColorValueFromBg(color.bgColor) != "#FFFFFF" && getColorValueFromBg(color.bgColor) || "#777777"}`
                            // }}
                            className={({ active, checked }) =>
                                classNames(
                                    (checked && "ring-[1.7px] ring-gray-500 ring-offset-1"),
                                    'group -m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                )
                            }
                        >
                            <span
                                aria-hidden="true"

                                style={
                                    {backgroundColor:color.color}
                                }
        
                                className={classNames(
                                    'group-checked:border-red h-8 w-8 border border-black border-opacity-10 rounded-full'
                                )}
                            />
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
        </div>
    )
}