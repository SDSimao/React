// Importando bibloteca React
import React, {useState} from "react";
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

const App=(()=>{
  const [num,  setnum]=useState(0)
  const [ligado, desligado]=useState(false)
  // const titulo='Seja bem vindo ao mundo do React Simão'
  // const paragrafo='Aprendendo os primeiros passos em React.js'

  return (
      <>
        <Relogio/>
        <Header/>
        <Banner/>
        <Contador num={num} setnum={setnum}/> <br/><br/><br/>
        <MudarFoto ligado={ligado} desligado={desligado}/>  <br/><br/><br/>  
        <Hora/>
      </>
  )
})

export default App;