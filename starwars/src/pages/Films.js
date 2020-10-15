import React, { useState, useLayoutEffect, useEffect } from 'react'
import Banner from '../components/Banner'
import { Card } from 'react-bootstrap'
import axios from 'axios'
export default function Home() {

    const [films, setFilms] = useState([])
    const [msg, setMsg] = useState("")

    const getFilms = () => {
        axios.get(`https://swapi.dev/api/films/`)
            .then(retorno => {
                setFilms(retorno.data.results)
                setMsg("")
            }).catch(() => setMsg("Erro ao buscar dados!"))
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
                        <h2>Página dos Filmes</h2>
                        <p>Visualize todos os filmes da série de Star Wars</p>
                    </header>
                    <div className="flex flex-2">
                        {
                            films.map((item, chave) =>
                                <Card style={{ width: '22rem' }} className="box">
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Episode {item.episode_id}</Card.Subtitle>
                                        <Card.Text>
                                            {item.opening_crawl}
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
