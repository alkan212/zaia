import { CheckBoxSimple } from '@/components/CheckBoxSimple'



export function ClothingSizeField({data, callback}){

    return (

        <fieldset className="mt-8">
            <p className='block text-sm font-medium text-gray-300'>Disponible Size</p>
            <div className='flex items-center mt-1 flex-wrap'>
                {
                    data.data.sizes.map((obj, i)=>{
                        return(<CheckBoxSimple index={i} name={obj.size} isChecked={obj.value} callback={callback} />)
                    })
                }
            </div>
        </fieldset>
    )
}