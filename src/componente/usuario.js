import React, {useState} from 'react'

const Usuario=()=>{
    const [nome, setnome]=useState()
    const [email, setemail]=useState()
    const [idade, setidade]=useState()
    const [nacionalidade, setnacionalidade]=useState()
    const [estado, setestado]=useState()

    const cadastrarUsuario=((e)=>{
        e.preventDefault();

        const usuario ={
            nome: nome,
            email: email,
            idade: idade,
            nacionalidade: nacionalidade,
            estado: estado
        }
        localStorage.setItem(    
            'usuario',
            JSON.stringify(usuario)    
        )
        console.log(usuario)
        const obterDados=Array(usuario)

        console.log(obterDados)
    })


    return (
        <>
        <form onSubmit={cadastrarUsuario}>
        <div className='div1'>
            <label>Nome</label>
            <input type='text' value={nome} placeholder='Digite o seu nome' onChange={(e)=>setnome(e.target.value)} />
        </div>
                <div className='div1'>
            <label>email</label>
            <input type='email' value={email} placeholder='Digite o seu nome' onChange={(e)=>setemail(e.target.value)} />
        </div>
                <div className='div1'>
            <label>idade</label>
            <input type='number' value={idade} placeholder='Digite o seu nome' onChange={(e)=>setidade(e.target.value)} />
        </div>
                <div className='div1'>
            <label>nacionalidade</label>
            <input type='text' value={nacionalidade} placeholder='Digite o seu nome' onChange={(e)=>setnacionalidade(e.target.value)} />
        </div>
                <div className='div1'>
            <label>estado</label>
            <input type='text' value={estado} placeholder='Digite o seu nome' onChange={(e)=>setestado(e.target.value)} />
        </div>
        <div className='btn_cadastrar'>

            <button type='submit'>Cadastrar</button>

        </div>
        </form>
        </>
    )
}

export default Usuario;