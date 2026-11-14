import React from 'react'

const Hook=(props)=>{
    return(
        <>
            <p>Percentagem: {props.contador}</p>
            <button onClick={()=> props.setcontador(props.contador +1)}>Aumentar</button>       
        </>
    )
}

export default Hook