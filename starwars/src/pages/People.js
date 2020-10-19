import React, { useState, useLayoutEffect, useEffect } from 'react'
import Banner from '../components/Banner'
import { Card } from 'react-bootstrap'
import Requisicoes from '../service/Requisicoes'

const requisicoes = new Requisicoes();

export default function Home() {

    const [films, setFilms] = useState([])

    var dateFormat = require('dateformat');

    const getFilms = () => {
        requisicoes.getDados('people/')
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
                        <h2>Personagens</h2>
                        <p>Visualize os personagens da série de Star Wars</p>
                    </header>
                    <div className="flex flex-2">
                        {
                            films.map((item, chave) =>
                                <Card style={{ width: '22rem' }} className="box">
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text className="alinharEsquerda"><b>Gênero: </b>{item.gender}</Card.Text>
                                        <Card.Text className="alinharEsquerda"><b>Nascimento: </b>{item.birth_year }</Card.Text>
                                        <Card.Text className="alinharEsquerda"><b>Altura: </b>{item.height} centímetros</Card.Text>
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
