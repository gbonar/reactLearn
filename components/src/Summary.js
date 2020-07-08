import React from "react";

function createInnerElements(names) {
    let arrayElems = [];

    for(let i = 0; i < names.length; i++) {
        arrayElems.push(
            <div>
                {`"${names[i]}" składa sie z ${names[i].length} znaków`}
            </div>
        )
    }

    return arrayElems;
}

export function Summary(props) {
    return <h4 className="bg-info text-white text-center p-2">
        
        { createInnerElements(props.names) }
</h4>
}