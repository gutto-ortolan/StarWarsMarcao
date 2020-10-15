import React from 'react'
import Banner from '../components/Banner'
export default function Home() {

    return (
        <>
            <Banner titulo="Star Wars Cinematic Universe" mensagem="Um portal web para os fãs de Star Wars" />
            <section id="three" className="wrapper special">
                <div className="inner">
                    <header className="align-center">
                        <h2>Desenvolvedores</h2>
                        <p>Informações sobre os desenvolvedores do website</p>
                    </header>
                    <div className="flex flex-2">
                        <article>
                            <div className="image fit">
                                <img src={require('../images/picaugusto.jpg')} alt="Pic 01" />
                            </div>
                            <header>
                                <h3>Augusto Krüger Ortolan</h3>
                            </header>
                            <span><b>RA:</b> 1117993</span>
                            <br/>
                            <span><b>E-mail:</b> augustoortolan02@gmail.com</span>
                            <br/><br/>
                        </article>
                        <article>
                            <div className="image fit">
                                <img src={require('../images/picbruno.jpg')} alt="Pic 03" />
                            </div>
                            <header>
                                <h3>Bruno Santos</h3>
                            </header>
                            <span><b>RA:</b> 1118599</span>
                            <br/>
                            <span><b>E-mail:</b> brunosantttos@gmail.com</span>
                            <br/><br/>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}
