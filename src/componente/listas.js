import React from 'react'

const Lista=(()=>{
    const lista= ['Home','Menu', 'Servicos', 'Conctatos']
    const obter=lista.map(
       (l,i)=>   <li key={i}>{i} - {l}</li>
    )
    return (
        <>
            <ul>{obter}</ul>
        </>
    )
})

export default Lista;