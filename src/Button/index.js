import React from "react";

export default ({ onClick, message = "ADD", className = "" }) => (
    <button className={`${className} custom-btn`} onClick={onClick}>
        {message}
    </button>
);
