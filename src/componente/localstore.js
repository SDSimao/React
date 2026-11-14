import React, {useState} from 'react'

const Localstore=()=>{
    const [valor, SetValor]=useState()
    const adicionar=(chave, nome)=>{
        localStorage.setItem(chave, nome)
    }
    const obterDados=(chave)=>{
        alert(localStorage.getItem(chave))
    }
    const deletar=(chave)=>{
        localStorage.removeItem(chave)
    }
    return(
        <>
            <label>Digitar o valor</label><br/>
            <input type='text' value={valor} onChange={(e)=>SetValor(e.target.value)} /><br/>
            <button onClick={()=>adicionar('chave_nome', valor)}>Adicionar</button>
            <button onClick={()=>obterDados('chave_nome')}>Obter</button>
            <button onClick={()=>deletar('chave_nome')}>Remover</button><br/><br/><br/>
        </>
    )
}

export default Localstore;