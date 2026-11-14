import React from 'react'


const Nota=(props)=>{
    return(
        <>
            <legend>Informe a nota {props.num}</legend>
            <input type='text' name={props.nome} value={props.nota} onChange={(e)=>props.setnota(e)}></input>
        </>
    )
}

export default Nota;