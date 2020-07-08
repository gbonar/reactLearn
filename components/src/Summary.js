import React from "react";

export function Summary(props) {
    return <h4 className="bg-info text-white text-center p-2">

        {props.names.map(name =>
            <div>
                {`"${name}" składa się z ${name.length} znaków`}
            </div>
        )
        }
    </h4>
}