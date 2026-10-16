// importando a bibloteca react
import React from 'react'


const header=(()=>{
    return(
        <cabecalho>
            <header className='cabecalho'>
                <div className='titulo-cabecalho'>
                    <h1>Começo em React</h1>
                </div>
                <div className='navegacao'>
                    <nav>
                        <ul>
                            <li><a href=''>Inicio</a></li>
                            <li><a href=''>Servico</a></li>
                            <li><a href=''>Menu</a></li>
                            <li><a href=''>Contacto</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='botao-cadastrar'>
                    <button style={{}}>Cadastrar-se</button>
                </div>
            </header>
        </cabecalho>
    )
})
export default header;
