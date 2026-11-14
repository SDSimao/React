import React, {useState} from "react";
// import Montion from 'motion/react'

const Formulario=(()=>{
    const [form, setform]=useState({"nome":"Simao", "curso":"React","ano":2026})
    const handleform=((e)=>{
        if(e.target.getAttribute('name')=='fnome'){
            setform({"nome":e.target.value, "curso":"React","ano":2026})
        }else if(e.target.getAttribute('name')=='fcurso'){
            setform({"nome":"Simao", "curso":e.target.value,"ano":2026})
        }else if(e.target.getAttribute('name')=='fano'){
            setform({"nome":"Simao", "curso":"React","ano":e.target.value})
        }

    })
    return(
        <>
        <formulario>
            <label htmlFor="">Nome</label>
            <input type="text" name="fnome" value={form.nome}  onChange={(e)=>handleform(e)}/>
            <label htmlFor="">Nome</label>
            <input type="text" name="fcurso" value={form.curso}  onChange={(e)=>handleform(e)}/>
            <label htmlFor="">Nome</label>
            <input type="text" name="fano" value={form.ano}  onChange={(e)=>handleform(e)}/>
        </formulario>
        <resultado>
            <p>Apresentando o nome: {form.nome} </p>
            <p>Apresentando o curso: {form.curso}</p>
            <p>Apresentando o ano: {form.ano} </p>
        </resultado>
        </>
        
    )
})

export default Formulario;