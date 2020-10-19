import React, { useState, useLayoutEffect} from 'react'
import Banner from '../components/Banner'
import { Card } from 'react-bootstrap'
import Requisicoes from '../service/Requisicoes'

const requisicoes = new Requisicoes();

export default function Home() {

    const [films, setFilms] = useState([])

    var dateFormat = require('dateformat');

    const urlBase = `https://swapi.dev/api/`;

    const getFilms = () => {
        requisicoes.getDados('films/')
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
                        <h2 className="fonteStarWarsEscritas">Filmes</h2>
                        <p className="fonteStarWarsEscritas">Visualize os filmes da série de Star Wars</p>
                    </header>
                    <div className="flex flex-2 ">
                        {
                            films.map((item, chave) =>
                                <Card style={{ width: '22rem' }} className="box">
                                    <Card.Body>
                                        <Card.Title><b>{item.title}</b></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Episódio {item.episode_id}</Card.Subtitle>
                                        <Card.Text className="justificarTexto">{item.opening_crawl}</Card.Text>
                                        <Card.Text className="alinharEsquerda"><b>Diretor:</b> {item.director}</Card.Text>
                                        <Card.Text className="alinharEsquerda"><b>Data:</b> {dateFormat(item.release_date, "dd/mm/yyyy")}</Card.Text>
                                        <Card.Text className="alinharEsquerda"><b>Produzido por: </b>{item.producer}</Card.Text>
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
