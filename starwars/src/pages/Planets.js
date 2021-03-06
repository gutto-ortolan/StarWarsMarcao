import React, { useState, useLayoutEffect} from 'react'
import Banner from '../components/Banner'
import { Card } from 'react-bootstrap'
import Requisicoes from '../service/Requisicoes'

const requisicoes = new Requisicoes();

export default function Home() {

    const [films, setFilms] = useState([])

    const getFilms = () => {
        requisicoes.getDados('planets/')
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
                        <h2 className="fonteStarWarsEscritas">Planetas</h2>
                        <p className="fonteStarWarsEscritas">Visualize os planetas da série de Star Wars</p>
                    </header>
                    <div className="flex flex-2">
                        {
                            films.map((item, chave) =>
                                <Card style={{ width: '22rem' }} className="box">
                                    <Card.Body>
                                        <Card.Title><b>{item.name}</b></Card.Title>
                                        <Card.Text className="alinharEsquerda"><b>População: </b>{item.population }</Card.Text>
                                        <Card.Text className="alinharEsquerda"><b>Clima: </b>{item.climate  }</Card.Text>
                                        <Card.Text className="alinharEsquerda"><b>Diâmetro: </b>{item.diameter } quilômetros</Card.Text>
                                        <Card.Text className="alinharEsquerda"><b>Gravidade: </b>{item.gravity  }</Card.Text>
                                        <Card.Text className="alinharEsquerda"><b>Período Orbital: </b>{item.orbital_period   } standard days</Card.Text>
                                        <Card.Text className="alinharEsquerda"><b>Período Rotacional: </b>{item.rotation_period  } standard days</Card.Text>
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
