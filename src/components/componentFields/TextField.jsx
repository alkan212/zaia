import Image from 'next/image'




export function TextField({name, callback ,size="full" ,...props}) {

  let input_size = "max-w-full"

  if(size == "sm"){
    input_size = "xl:max-w-sm"
  }else if(size == "md"){
    input_size = "xl:max-w-md"
  }else if(size == "full"){
    input_size = "xl:max-w-full"
  }

  return (
    <div className={`${input_size} w-full`}>
      <label htmlFor="email" className="block text-sm font-medium text-gray-300">
        {name}
      </label>
      <div className={`mt-1`}>
        <input
          onInput={callback && ((e)=>callback(e.currentTarget.value))}
          required
          defaultValue=""
          type="email"
          name="email"
          id="email"
          className="block w-full text-white rounded-md bg-black/20 focus:bg-black/40 border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          {...props}
        />
      </div>
    </div>
  )
}
