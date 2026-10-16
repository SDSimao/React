import React from 'react'

const dados=((props)=>{
    const n1=10
    const n2=20
    return (
        <section>
            <p>Nome: {props.nome}</p>
            <p>idade: {props.idade}</p>
            <p>Nacionalidade: {props.nacionalidade}</p>
            <p>{'A soma de ' + n1 + ' com ' + n2 + ' é igual a ' + props.somar(n1,n2)}</p>
        </section>
    )
})

export default dados;