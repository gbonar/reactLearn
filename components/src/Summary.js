import React from "react";

export function Summary(props) {
    return <React.Fragment>
            <td>{props.index + 1} </td>
            <td>{props.name} </td>
            <td>{props.name.length} </td>

            <td>
                <button className="btn btn-primary btn-sm" onClick={props.reverseCallback}>
                    Zmień kolejność
                </button>
                <button className="btn btn-info btn-sm m-1" onClick={() => props.promoteCallback(props.name)}>
                    Na początek
                </button>
            </td>

        </React.Fragment>
}