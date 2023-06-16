

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  
  
export function Template_Images({images}){

    let length = 0;
    images.forEach(element => {
        if(element){length++}
    });

    return (
        <div className="mt-8 screen-x-900:col-span-7 screen-x-900:col-start-1 screen-x-900:row-span-3 screen-x-900:row-start-1 screen-x-900:mt-0">
            <div className={`grid grid-cols-2 grid-rows-1 screen-x-900:grid-rows-2 gap-6 ${length == 1 && "!grid-rows-1"}`}>
            {images.map((image, index) => (
                <img
                key={index}
                src={image && image}
                className={classNames(
                    image ? 'opacity-100' : 'opacity-0 pointer-events-none',
                    'first-of-type:col-span-2  hidden first-of-type:block  screen-x-900:block rounded-lg w-full object-cover',
                )}
                />
            ))}
            </div>
        </div>
    )
}