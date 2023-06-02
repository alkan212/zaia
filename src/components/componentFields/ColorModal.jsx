import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { createPortal } from 'react-dom'


const Colors = [
   { color: "bg-black-600", inputPeer: "peer/input0", labelPeer: "peer-checked/input0:bg-gray-100 peer-checked/input0:border-gray-400" },
   { color: "bg-slate-600", inputPeer: "peer/input1", labelPeer: "peer-checked/input1:bg-gray-100 peer-checked/input1:border-gray-400" },
   { color: "bg-gray-600", inputPeer: "peer/input2", labelPeer: "peer-checked/input2:bg-gray-100 peer-checked/input2:border-gray-400" },
   { color: "bg-zinc-600", inputPeer: "peer/input3", labelPeer: "peer-checked/input3:bg-gray-100 peer-checked/input3:border-gray-400" },
   { color: "bg-neutral-600", inputPeer: "peer/input4", labelPeer: "peer-checked/input4:bg-gray-100 peer-checked/input4:border-gray-400" },
   { color: "bg-stone-600", inputPeer: "peer/input5", labelPeer: "peer-checked/input5:bg-gray-100 peer-checked/input5:border-gray-400" },
   { color: "bg-red-600", inputPeer: "peer/input6", labelPeer: "peer-checked/input6:bg-gray-100 peer-checked/input6:border-gray-400" },
   { color: "bg-orange-600", inputPeer: "peer/input7", labelPeer: "peer-checked/input7:bg-gray-100 peer-checked/input7:border-gray-400" },
   { color: "bg-amber-600", inputPeer: "peer/input8", labelPeer: "peer-checked/input8:bg-gray-100 peer-checked/input8:border-gray-400" },
   { color: "bg-yellow-600", inputPeer: "peer/input9", labelPeer: "peer-checked/input9:bg-gray-100 peer-checked/input9:border-gray-400" },
   { color: "bg-lime-600", inputPeer: "peer/input10", labelPeer: "peer-checked/input10:bg-gray-100 peer-checked/input10:border-gray-400" },
   { color: "bg-green-600", inputPeer: "peer/input11", labelPeer: "peer-checked/input11:bg-gray-100 peer-checked/input11:border-gray-400" },
   { color: "bg-emerald-600", inputPeer: "peer/input12", labelPeer: "peer-checked/input12:bg-gray-100 peer-checked/input12:border-gray-400" },
   { color: "bg-teal-600", inputPeer: "peer/input13", labelPeer: "peer-checked/input13:bg-gray-100 peer-checked/input13:border-gray-400" },
   { color: "bg-cyan-600", inputPeer: "peer/input14", labelPeer: "peer-checked/input14:bg-gray-100 peer-checked/input14:border-gray-400" },
   { color: "bg-sky-600", inputPeer: "peer/input15", labelPeer: "peer-checked/input15:bg-gray-100 peer-checked/input15:border-gray-400" },
   { color: "bg-blue-600", inputPeer: "peer/input16", labelPeer: "peer-checked/input16:bg-gray-100 peer-checked/input16:border-gray-400" },
   { color: "bg-indigo-600", inputPeer: "peer/input17", labelPeer: "peer-checked/input17:bg-gray-100 peer-checked/input17:border-gray-400" },
   { color: "bg-violet-600", inputPeer: "peer/input18", labelPeer: "peer-checked/input18:bg-gray-100 peer-checked/input18:border-gray-400" },
   { color: "bg-purple-600", inputPeer: "peer/input19", labelPeer: "peer-checked/input19:bg-gray-100 peer-checked/input19:border-gray-400" },
   { color: "bg-fuchsia-600", inputPeer: "peer/input20", labelPeer: "peer-checked/input20:bg-gray-100 peer-checked/input20:border-gray-400" },
   { color: "bg-pink-600", inputPeer: "peer/input21", labelPeer: "peer-checked/input21:bg-gray-100 peer-checked/input21:border-gray-400" },
   { color: "bg-rose-600", inputPeer: "peer/input22", labelPeer: "peer-checked/input22:bg-gray-100 peer-checked/input22:border-gray-400" },
];



function Modal({inputColor, setInputColor, parentsSetState, callback}) {
   const [open, setOpen] = useState(true)


   const cancelButtonRef = useRef(null)
   const openButtonRef = useRef(null)

   function closeAll() {
      setOpen(false);
      parentsSetState(false)
   }

   function onColorChange(e){
      setInputColor(e.currentTarget.value);
      {callback && callback(e.currentTarget.value.split("-")[1]);}
   }

   return (

      <Transition.Root show={open} as={Fragment}>
         <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={closeAll}>
            <Transition.Child
               as={Fragment}
               enter="ease-out duration-300"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease-in duration-200"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
            >
               <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
               <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                     as={Fragment}
                     enter="ease-out duration-300"
                     enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                     enterTo="opacity-100 translate-y-0 sm:scale-100"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                     leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                     <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                        <h2 class="font-medium">Choose Your Color</h2>

                        <form>
                           <fieldset id="ColorsContainer" class="flex flex-wrap items-center mt-5">
                              {
                                 Colors.map((data, i) => (
                                    <>
                                       <input onChange={onColorChange} id={`modalColor_${i}`} name={`modalColor`} className={`sr-only ${data.inputPeer}`} value={`${data.color}`} defaultChecked={data.color === inputColor} type="radio" />
                                       <label for={`modalColor_${i}`} className={`${data.labelPeer} active:scale-90 border border-gray-100 p-1 bg-white cursor-pointer hover:bg-gray-100 hover:border-gray-300 mx-1 my-1`}>
                                          <div class={`${data.color} min-w-[36px] min-h-[18px]`}></div>
                                       </label>
                                    </>

                                 ))
                              }

                           </fieldset>
                        </form>


                        <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                           <button
                              type="button"
                              className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                              onClick={() => closeAll(false)}
                           >
                              Save
                           </button>
                           <button
                              type="button"
                              className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                              onClick={() => closeAll(false)}
                              ref={cancelButtonRef}
                           >
                              Cancel
                           </button>
                        </div>
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </div>
         </Dialog>
      </Transition.Root>
   )
}


export function ColorModal({ toggle = false, color = "indigo", callback }) {

   const [open, setOpen] = React.useState(toggle);
   const [inputColor, setInputColor] = React.useState(`bg-${color}-600`);


   return (
      <>
         <button class="active:scale-90 border border-gray-700 rounded-md p-1.5 bg-black/30 cursor-pointer hover:bg-black/50 hover:border-gray-500 ml-2" onClick={setOpen} checked="false" id="">
            <div id="themeColor" value="indigo" className={`${inputColor} min-w-[36px] min-h-[18px]`}></div>
         </button>

         {open &&
            createPortal(
               <Modal parentsSetState={setOpen} inputColor={inputColor} setInputColor={setInputColor} callback={callback} />,
               document.body
            )}
      </>
   )
}