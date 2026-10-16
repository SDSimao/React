import React from 'react'

const Hora=(()=>{
    const comprimentar=()=>{
        const hora= new Date().getHours()
        // return hora
        if(hora >0 && hora < 13){
            return 'Bom dia'
        }else if(hora >12 && hora < 18){
            return 'Boa tarde'
        }else{
            return 'Boa noite'
        }
    }

    
    return (
        <componete>
           <p>{comprimentar()}</p>
        </componete>
    )
})

export default Hora;  