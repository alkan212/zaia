import { useRef } from "react";


export function TextFieldWithIcon({index, onWrite, defaultValue ,removeElement}) {

	function DeleteField(){
		removeElement(index)
	}

	let inputRef = useRef();
	try{
		inputRef.current.value = defaultValue
	}catch{

	}
	
	
	return (
		<div>
			<div className="relative mt-1 flex items-center">
				<input
				ref={inputRef}
					defaultValue={defaultValue}
					onInput={(e)=>onWrite(index, e.currentTarget.value)}
					placeholder="..."
					type="text"
					name="search"
					id="search"
					className="block w-full rounded-md border-gray-700 bg-black/20 focus:bg-black/40 text-white pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
				/>
				<button onClick={DeleteField} className="absolute right-1 flex">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="hover:border-red-500 hover:text-red-500 rounded cursor-pointer relative right-0.5 border-gray-400 px-2 text-gray-400 w-8 h-8">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	)
}