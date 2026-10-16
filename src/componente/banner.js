import React from 'react'
import Elemento from './dados'

const banner=(()=>{
    const Nmes='Simão Diasonua Soki Daniel'
    const Ide=23
    const Ncionalidade='Angolana'

    const somar=((v1,v2)=>{
        return v1+v2
    })
    return(
        
            <section>
                <div id='conteudo-banner'>
                    <div id='conteudo-banner-esquerda'>
                        <div id='titulo-banner-esquerda'>
                            <h2>Meu começo</h2>
                            <h1>Aprendendo os conceitos de React.js e aplicando os seus funcionamentos para melhor me preparar no mercado</h1>
                        </div>
                        <div id='paragrafo-banner-esquerda'>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem asperiores soluta tempora molestias delectus veniam omnis, ipsam quisquam. Adipisci recusandae enim porro dolores, consequuntur odio laudantium unde modi quo nostrum.</p>
                        </div>
                    </div>
                </div>
                <Elemento 
                nome={Nmes} 
                idade={Ide} 
                nacionalidade={Ncionalidade}
                somar={somar}
                />
            </section>
    )
})

export default banner;