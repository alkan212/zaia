

export function TextAreaField({name, callback, defaultData}){


    return (
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-300">
            {name}
          </label>
          <div className="mt-1">
            <textarea
              onInput={callback}
              rows={4}
              name="comment"
              id="comment"
              className="block w-full bg-black/20 text-white rounded-md border-gray-700 shadow-sm focus:bg-black/40 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              defaultValue={defaultData.join("\n")}
            >
        
              </textarea>
          </div>
        </div>
      )
}