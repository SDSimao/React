// Importando bibloteca React
import React, {useState, useEffect} from "react";
import './App.css'
// Importando imagens para ser utilizado apartir da pasta src
// import logo from './componente/img/logo.png.jpg'
// import eu from "./componente/img/eu.png.jpg"
import Header from './componente/header'
import Banner from './componente/banner'
import Relogio from './componente/relogio'
import Contador from './componente/contador'
import MudarFoto from './componente/foto'
import Hora from './componente/hora'
import Menu from './componente/listas'
import Formulario from "./componente/formulario";
import Nota from './componente/Nota'
import Resultado from './componente/Resultado'
import Child from './componente/child'
import Hook from "./componente/hook"
import Localstore from "./componente/localstore";
import Usuario from "./componente/usuario";
const App=(()=>{
useEffect(()=>{
  document.title='Percentagem: ' +contador
})
  const [num,  setnum]=useState(0)
  const [ligado, desligado]=useState(false)
  const [log, setlogado]=useState(false)
  const [contador, setcontador]=useState(0)

  const [notas, setnota]=useState({'nota1':'0','nota2':'0','nota3':'0','nota4':'0'})
  const handlesenota=(e)=>{
    if(e.target.getAttribute('name')=='nota1'){
      setnota({'nota1':e.target.value,'nota2':notas.nota2,'nota3':notas.nota3,'nota4':notas.nota4})
    }else if(e.target.getAttribute('name')=='nota2'){
      setnota({'nota1':notas.nota1,'nota2':e.target.value,'nota3':notas.nota3,'nota4':notas.nota4})
    }else if(e.target.getAttribute('name')=='nota3'){
      setnota({'nota1':notas.nota1,'nota2':notas.nota2,'nota3':e.target.value,'nota4':notas.nota4})
    }else if(e.target.getAttribute('name')=='nota4'){
      setnota({'nota1':notas.nota1,'nota2':notas.nota2,'nota3':notas.nota3,'nota4':e.target.value})
    } 
  }
  const msglogin=()=>{
    return 'Usuario logado'
  }
  const msglogoff=()=>{
    return 'Favor login'
  }
  // const titulo='Seja bem vindo ao mundo do React Simão'
  // const paragrafo='Aprendendo os primeiros passos em React.js'

  return (
      <>
        <Usuario/>
      </>
  )
})

export default App;