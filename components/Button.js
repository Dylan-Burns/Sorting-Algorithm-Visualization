
import React from "react"

export default function Button(props) {

    
    return (
        <div>
            {/* BUTTONS Note: all css classes except for button-sort come from tachyons */}
            <button
                className="button"
                onClick={props.handleClick}
            >
                {props.name}
            </button>
        </div>
       
    )
}