import ImageReact from "next/image"
import { useEffect, useRef, useState } from "react"
import { Replace } from "@/pages/Creator";
import { ToggleWithIcon } from "@/components/ToggleWithIcon"

export function Component({
  compRef, icon, section, data,
  product, setProduct,
  ...props
}) {

  const [open, setOpen] = useState(false)

  function toggleOpen() {
    if (open == true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  function switchToggle(value) {
    console.log(value)
    if (section == "Descriptions") {
      let newProduct = { ...product }
      newProduct.description[data.index].toggle = value;
      setProduct(newProduct)
    } else if (section == "Personalisations") {
      let newProduct = { ...product }
      newProduct.personalisation[data.index].toggle = value;
      setProduct(newProduct)
    } else if (section == "Informations") {
      let newProduct = { ...product }
      newProduct.informations[data.index].toggle = value;
      setProduct(newProduct)
    }
  }



  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    window.addEventListener("mouseup", (e) => setIsMouseDown(false))
  })


  let totalMov = 0;
  let doONce = false;

  function compMouseMove(e) {
    if (isMouseDown == true) {
      totalMov += (Math.abs(e.movementX) + Math.abs(e.movementY));
      if (totalMov >= 10) {
        if (doONce == false) {

        }

        doONce = true;
      }
    }
  }

  function compMouseDown() {
    if (isMouseDown == false) {

      setIsMouseDown(true)
      totalMov = 0;
    } else {
      setIsMouseDown(false)
      doONce = false;
    }
  }


  const [componentId] = useState(`${data.name}_open_input_${data.index}}`)

  return (
    <>
      <div className="" ref={compRef}>
        <input id={componentId} type="checkbox" className='peer/open sr-only' />
        <div name={data.name} className="group peer-checked/open:max-h-fit min-h-[70px] max-h-0 relative w-full rounded-[8px] bg-white dark:bg-[#151424] overflow-hidden ease-[cubic-bezier(0.165,0.84,0.44,1)]">
          {/* header */}
          <div className="pointer-events-none group-hover:w-[90px] duration-200 ease w-[80px] aspect-square absolute left-0 top-0 bg-indigo-500 rounded-full blur-[80px]"></div>

          <label htmlFor={componentId} onClick={toggleOpen} onMouseMove={compMouseMove} onMouseDown={compMouseDown} ctype="info" toggle="false" className="unselectable pl-2 pr-7 py-2 relative flex items-center justify-between w-full h-[70px] cursor-pointer relative overflow-hidden">
            <div className="h-full flex items-center">
              <div className="h-full aspect-square rounded-[7px] flex items-center justify-center bg-gradient-to-b from-[#6360EB] to-[#9896EE]">
                <ImageReact src={icon} alt={""} width={200} height={200} className={"z-[1] h-5 w-5"} />
              </div>

              <div className="pl-3.5 space-y-1 flex flex-col">
                <p className="font-medium text-sm text-[#F9F9FF]/90">{data.name.replace('_', " ")}</p>
                {data.toggle != undefined && <ToggleWithIcon callback={switchToggle} isChecked={data.toggle} />}
              </div>
            </div>

            <div className="h-full flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#676392" className={`${open && 'rotate-180'} transition duration-100 ease-in-out pointer-events-none opacity-75 h-[16px] aspect-square`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </label>

          {/* body */}
          <div className="px-8 py-8" {...props}>

          </div>

        </div>
      </div>
    </>

  )
}