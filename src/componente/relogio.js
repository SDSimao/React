import React from "react";

const hora=(()=>{
    return (
        <p className="relogio">
            {new Date().toLocaleTimeString()} <br/>
            {new Date().toLocaleDateString()}
        </p>
    )
})
export default hora;