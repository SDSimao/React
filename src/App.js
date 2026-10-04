// Importando bibloteca React
import React from 'react'
// Importando imagens para ser utilizado apartir da pasta src
import logo from './componente/img/logo.png.jpg'
import eu from "./componente/img/eu.png.jpg"

const App=(()=>{
  const titulo='Seja bem vindo ao mundo do React Simão'
  const paragrafo='Aprendendo os primeiros passos em React.js'
  return (
    <incio>
    <h1>{titulo}</h1>
    <p>{paragrafo}</p>
    <div class='imgs'>
      <img src={logo}/>
      <img src={eu}/>
    </div>
    </incio>
  )
})

export default App;