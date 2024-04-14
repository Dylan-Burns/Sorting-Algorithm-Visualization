// Button.js

import React from "react";

export default function Button(props) {
    return (
        <div>
            <button 
                className="button" 
                onClick={props.handleClick}
                disabled={props.disabled} // Add disabled prop here
            >
                {props.name}
            </button>
        </div>   
    );
}
