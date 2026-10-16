import React from 'react'
// Importando imagens para ser utilizado apartir da pasta src
import logo from './img/logo.png.jpg'
import eu from "./img/eu.png.jpg"
const Foto=((props)=>{
    return(
        <>
        <img style={{width:'50px'}} src={props.ligado?logo:eu}/>
        <button onClick={()=>props.desligado(!props.ligado)}>{props.ligado?'desligar':'ligar'}</button>
        </>
    )
})

export default Foto;