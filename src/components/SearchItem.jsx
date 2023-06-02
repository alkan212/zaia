import ImageReact from "next/image";
import { cloneElement } from "react";



export function SearchItem({data, section ,name, product, setProduct , icon, searchValue, setOpen, max=Infinity ,isNew = false }) {

	function addComponent(product, setProduct) {
		if(isMax == false){
			setOpen(false);
			

			if(section == "informations"){
				let component = data(product.informations.length);
				let newProduct = {...product};
				newProduct.informations.push(component)
				setProduct(newProduct)

			}else if(section == "personalisation"){
				let component = data(product.personalisation.length);
				let newProduct = {...product};
				newProduct.personalisation.push(component)
				setProduct(newProduct)

			}else if(section == "description"){
				let component = data(product.description.length);
				let newProduct = {...product};
				newProduct.description.push(component)
				setProduct(newProduct)
			}
		}
	}

	let isMax = false;
	try{
		isMax = (product.count[name] >= max);
	}catch{}

	console.log(product.count)

	let newSearchValue = searchValue.replaceAll(" ", "").toLowerCase();
	let newName = name.replaceAll(" ", "").toLowerCase();

	return (newName.includes(newSearchValue) &&
		<div onClick={()=>addComponent(product, setProduct)} className={(isMax && "opacity-50 cursor-not-allowed") + " justify-between h-16 flex items-center hover:bg-gray-50 px-5 cursor-pointer last:rounded-b-md"}>
			<div className="flex items-center">
				<div className="h-8 aspect-square rounded-[7px] flex items-center justify-center bg-gradient-to-b from-[#6360EB] to-[#9896EE]">
					<ImageReact src={icon} alt={""} width={200} height={200} className={"z-[1] h-4 aspect-square"} />
				</div>
				
				<p className="text-base text-gray-900 font-medium ml-3">
					{Array.from(name.replace("_"," ")).map((obj, i) => (
						(newSearchValue.includes(obj.toLowerCase()) && <span className="text-[#6360EB]">{obj}</span> || <span className="">{obj}</span>)
					))}
				</p>
				{isNew && <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-[0.7rem] relative top-[0.9px] ml-2 font-medium text-blue-800">New</span>}
			</div>
			<div className="group relative flex items-center flex-row-reverse overflow-show">
				{isMax && <p className="text-sm text-gray-900 italic">Only One</p>}
			</div>
		</div>
	)
}