import React from 'react'

export default function Banner(props) {

    return (
        <section id="banner">
            <h1 ><span className="fonteStarWars">{props.titulo}</span></h1>
            <p className="fonteStarWars subtitulo"><span className="fonteStarWars">{props.mensagem}</span></p>
        </section>
    )
}
