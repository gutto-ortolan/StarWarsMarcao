import React, { useState, useLayoutEffect} from 'react'
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
                        <h2 className="fonteStarWarsEscritas">Naves</h2>
                        <p className="fonteStarWarsEscritas">Visualize as naves da série de Star Wars</p>
                    </header>
                    <div className="flex flex-2">
                        {
                            films.map((item, chave) =>
                                <Card style={{ width: '22rem' }} className="box">
                                    <Card.Body>
                                        <Card.Title><b>{item.name}</b></Card.Title>
                                        <Card.Text className="alinharEsquerda"><b>Modelo: </b>{item.model}</Card.Text>
                                        <Card.Text className="alinharEsquerda"><b>Classe: </b>{item.starship_class}</Card.Text>
                                        <Card.Text className="alinharEsquerda"><b>Comprimento: </b>{item.length}</Card.Text>
                                        <Card.Text className="alinharEsquerda"><b>Manufaturado: </b>{item.manufacturer}</Card.Text>
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
