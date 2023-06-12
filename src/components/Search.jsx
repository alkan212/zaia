import { Dialog, Transition } from "@headlessui/react";
import { cloneElement, Fragment, useRef, useState } from "react"



function SearchInput({ setSearchValue }) {



	return (
		<div className="relative w-full border-b">
			<input type="text" onInput={(event) => { setSearchValue(event.currentTarget.value); }} placeholder={"search"} className={"block w-full px-3 pl-10 py-2.5 bg-white border-white border-t-0 border-x-0 border-b-0 border-slate-200 rounded-tl-md rounded-tr-md tracking-wide text-base placeholder-slate-400 focus:outline-none focus:border-gray-200 focus:border-none ring-1 ring-white ring-offset-0 focus:ring-white shadow disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500"} ></input>
			<div className="pointer-events-none top-0 left-0 flex items-center  absolute h-full w-full px-4">
				<div className="">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-500">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
					</svg>
				</div>
			</div>
		</div>
	)
}





export function Search({product, setProduct ,open, setOpen, items }) {

	const cancelButtonRef = useRef(null)

	const [searchValue, setSearchValue] = useState("");

	let searchProps = {
		searchValue: searchValue,
		setOpen: setOpen,
		product: product,
		setProduct:setProduct,
	}

	


	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-200/30 backdrop-blur-sm bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-xl">
								<div className="sm:flex sm:items-start border border-gray-200 rounded-md">
									<div className="text-center mt-0 sm:text-left w-full">
										<SearchInput setSearchValue={setSearchValue} />
										<div className="w-full max-h-[500px] overflow-y-auto scrollbar">


											{items.map((obj, i)=>(
													cloneElement(obj, {...searchProps, key:i})
												)
											)}


										</div>
									</div>
								</div>

							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}