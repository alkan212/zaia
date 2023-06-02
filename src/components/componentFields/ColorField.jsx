import { useRef, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { Colors } from '../component/Colors';
import { useForceUpdate } from 'framer-motion';


function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}




function Bubble({index, color, changeCallback, deleteCallback}){

	const [rId] = useState(`Bubble_${Math.round(Math.random()*(10**10))}`)

	const onDelete = (e) =>{
		e.preventDefault();
		e.stopPropagation();
		deleteCallback(index)
	}

	const onChange = (e) =>{
		changeCallback(index, e.currentTarget.value)
	}
	
	return (
		<RadioGroup.Option
			value={color}
			className={({ active, checked }) =>
				classNames(
					'mx-1 my-1 relative p-0.5 rounded-full flex items-center cursor-pointer focus:outline-none relative'
				)
			}
		>
			<RadioGroup.Label as="span" className="sr-only">
				{color}
			</RadioGroup.Label>
			<input value={color} onInput={onChange} id={rId} type="color" className='sr-only absolute left-full -translate-x-1/2' />
			<label for={rId} aria-hidden="true" style={{"backgroundColor":color}} className={'h-8 w-8 border cursor-pointer border-black border-opacity-10 rounded-full'}>
				<svg onClick={onDelete} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="absolute -top-1.5 -right-1.5 w-[13px] h-[13px] text-zinc-400 hover:text-red-500">
					<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
				</svg>
			</label>
		</RadioGroup.Option>
	)

}



export default function ColorField({data, addCallback, changeCallback, deleteCallback}) {



	return (
		<RadioGroup>
			<div className="flex items-center flex-wrap">
				{
					data.data.colors.map((obj,i)=>{
						return(<Bubble index={i} color={obj.color} changeCallback={changeCallback} deleteCallback={deleteCallback} />)
					})
				}
				<label onClick={addCallback} aria-hidden="true" className={classNames("bg-black/30", 'mx-1 my-1 h-8 w-8 cursor-pointer flex items-center justify-center border border-gray-600 hover:border-gray-400 active:bg-black/50 rounded-full')}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-400 hover:text-indigo-200">
						<path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
					</svg>
				</label>
			</div>
		</RadioGroup>
	)
}
