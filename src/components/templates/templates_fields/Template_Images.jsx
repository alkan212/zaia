

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  
  
export function Template_Images({images}){

    return (
        <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
            <div className="grid grid-cols-2 grid-rows-1 lg:grid-rows-2 gap-6">
            {images.map((image, index) => (
                <img
                key={index}
                src={image}
                alt={"ouioui"}
                className={classNames(
                    'first-of-type:col-span-2  hidden first-of-type:block  lg:block rounded-lg w-full object-cover',
                )}
                />
            ))}
            </div>
        </div>
    )
}