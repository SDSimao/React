import React from 'react'

const Resultado=(props)=>{
    const verificar=()=>{
        if(props.somarNota<=9){
            return 'Reprovado'
        }else if(props.somarNota==10){
            return 'Recurso'
        }else if(props.somarNota>=11){
            return 'Aprovado'
        }
    }
    return(
        <>
        <p>Resultado da soma: {props.somarNota}</p>
        <p>{verificar()}</p>
        </>
    )
}
export default Resultado;