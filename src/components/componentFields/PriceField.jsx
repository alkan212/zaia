import Image from 'next/image'
import { useState } from 'react';


const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


function numberInput(e) {

  let success = true;

  for (let i = 0; i < e.currentTarget.value.length; i++) {
    const letter = e.currentTarget.value[i];

    if (alphabet.includes(letter)) {
      e.currentTarget.value = e.currentTarget.value.replace(letter, "")
    }
  }


}


export function PriceField({ name, callback, selectCallback, size = "full", defaultData }) {

  let input_size = "max-w-full"

  if (size == "sm") {
    input_size = "xl:max-w-sm"
  } else if (size == "md") {
    input_size = "xl:max-w-md"
  } else if (size == "full") {
    input_size = "xl:max-w-full"
  }

  const [currency, setCurrency] = useState("€")

  function onSelect(e) {
    selectCallback(e.target.options[e.target.options.selectedIndex].ariaSelected)
    setCurrency(e.target.options[e.target.options.selectedIndex].ariaSelected)
  }

  return (
    <div className={`${input_size} w-full group`}>
      <label htmlFor="price" className="block text-sm font-medium text-gray-300 mt-4 group-first:mt-0">
        Price
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">{currency}</span>
        </div>
        <input
          defaultValue={defaultData && defaultData}
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md bg-black/20 focus:bg-black/40 border-gray-700 text-white pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="0.00"
          onChange={numberInput}
          onInput={callback && ((e) => callback(e.currentTarget.value))}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            onChange={selectCallback && onSelect}
            id="currency"
            name="currency"
            className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option aria-selected="€">EUR</option>
            <option aria-selected="$">USD</option>
          </select>
        </div>
      </div>
    </div>
  )
}
