import React, { useState, useLayoutEffect} from 'react'
import Banner from '../components/Banner'
import { Card } from 'react-bootstrap'
import Requisicoes from '../service/Requisicoes'

const requisicoes = new Requisicoes();

export default function Home() {

    const [films, setFilms] = useState([])

    const getFilms = () => {
        requisicoes.getDados('species/')
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
                        <h2 className="fonteStarWarsEscritas">Espécies</h2>
                        <p className="fonteStarWarsEscritas">Visualize os espécies da série de Star Wars</p>
                    </header>
                    <div className="flex flex-2">
                        {
                            films.map((item, chave) =>
                                <Card style={{ width: '22rem' }} className="box">
                                    <Card.Body>
                                        <Card.Title><b>{item.name}</b></Card.Title>
                                        <Card.Text className="alinharEsquerda"><b>Classificação: </b>{item.classification  }</Card.Text>
                                        <Card.Text className="alinharEsquerda"><b>Designação: </b>{item.designation   }</Card.Text>
                                        <Card.Text className="alinharEsquerda"><b>Altura: </b>{item.average_height  } centímetros</Card.Text>
                                        <Card.Text className="alinharEsquerda"><b>Idioma: </b>{item.language   }</Card.Text>
                                        <Card.Text className="alinharEsquerda"><b>Média de vida: </b>{item.average_lifespan    } standard days</Card.Text>
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
