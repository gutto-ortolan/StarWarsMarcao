import React from 'react'
import Banner from '../components/Banner'
import {Card, Row} from 'react-bootstrap'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Home() {

    return (
        <>
            <Banner titulo="Star Wars Cinematic Universe" mensagem="Um portal web para os fãs de Star Wars"/>
            <section id="three" className="wrapper special">
                <div className="inner">
                    <header className="align-center">
                        <h2 className="fonteStarWarsEscritas">Desenvolvedores</h2>
                        <p className="fonteStarWarsEscritas">Informações sobre os desenvolvedores do website</p>
                    </header>

                    <Row className="centralizador">
                        <div>
                            <Card style={
                                {width: '22rem'}
                            }>
                                <Card.Img variant="top"
                                    src={
                                        require('../images/picaugusto.jpg')
                                    }
                                    alt="Pic 01"/>
                                <Card.Body>
                                    <Card.Title>Augusto Ortolan</Card.Title>
                                    <Card.Text>
                                        <b>RA: </b>117993
                                        <br/>
                                        <b>E-mail: </b>augustoortolan02@gmail.com
                                    </Card.Text>
                                </Card.Body>
                                <div>
                                    <a href="https://www.instagram.com/guto.ortolan/" target="_blank"><InstagramIcon className="icones"/></a>
                                    <a href="https://twitter.com/oGutortolan" target="_blank"><TwitterIcon className="icones"/></a>
                                </div>
                            </Card>
                        </div>

                        <div>
                            <Card style={
                                {width: '22rem'}
                            }>
                                <Card.Img variant="top"
                                    src={
                                        require('../images/picbruno.jpg')
                                    }
                                    alt="Pic 01"/>
                                <Card.Body>
                                    <Card.Title>Bruno Santos</Card.Title>
                                    <Card.Text>
                                        <b>RA: </b>1118599
                                        <br/>
                                        <b>E-mail: </b>brunosantttos@gmail.com
                                    </Card.Text>
                                </Card.Body>
                                <div>
                                    <a href="https://www.instagram.com/qbrunosantos/" target="_blank"><InstagramIcon className="icones"/></a>
                                    <a href="https://twitter.com/qbrunosantos" target="_blank"><TwitterIcon className="icones"/></a>
                                </div>
                            </Card>
                        </div>
                    </Row>
                </div>
            </section>
        </>
    )
}
