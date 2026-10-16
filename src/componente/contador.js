import React from "react";

const Contar=((props)=>{
    return(
        <>
            <h1>Resultado: {props.num}</h1>
            <button onClick={()=>props.setnum(props.num +10)}>Somar</button>
        </>
    )
})

export default Contar; 