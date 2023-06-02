

export function Template_Description({config, obj}) {

    let descriptions = obj.data.descriptions;

    return (
        <div className="first:border-t-0 border-t mt-8 pt-8">
            <h2 className="text-sm font-medium text-gray-900">Description</h2>

            <div className="prose prose-sm mt-3 text-gray-500">
                {descriptions.map((obj, i ) => {
                    return (obj && <p>{obj}</p>);
                })}
            </div>
        </div>
    )
}
