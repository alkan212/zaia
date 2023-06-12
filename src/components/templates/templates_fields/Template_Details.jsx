

export function Template_Details({config, obj}) {

    let details = obj.data.details;
    let title = obj.data.title;

    return (
        <div className="first:border-t-0 mt-8 border-t border-gray-200 pt-8">
            <h2 className="text-sm font-medium text-gray-900">{title}</h2>

            <div className="prose prose-sm mt-4 text-gray-500">
                <ul role="list">
                    {details.map((item, i) => ( 
                        <li key={i}>{item.value}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}