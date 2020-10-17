import React, { useState, useLayoutEffect, useEffect } from 'react'
import Banner from '../components/Banner'
import { Card } from 'react-bootstrap'
import Requisicoes from '../service/Requisicoes'

const requisicoes = new Requisicoes();

export default function Home() {

    const [films, setFilms] = useState([])

    const getFilms = () => {
        requisicoes.getDados('starships/')
        .then(result => setFilms(result))
        
    }

    useLayoutEffect(() => {
        getFilms()
    }, [])


    return (
        <>
            <Banner titulo="Star Wars Cinematic Universe" mensagem="Um portal web para os fãs de Star Wars" />
            <section id="three" className="wrapper special">
                <div className="inner align-center">
                    <header className="align-center">
                        <h2>Naves</h2>
                        <p>Visualize as naves da série de Star Wars</p>
                    </header>
                    <div className="flex flex-2">
                        {
                            films.map((item, chave) =>
                                <Card style={{ width: '22rem' }} className="box">
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Modelo {item.model }</Card.Subtitle>
                                        <Card.Text>
                                            {item.starship_class }
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
