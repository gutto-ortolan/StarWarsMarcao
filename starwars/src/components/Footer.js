import React from 'react'

export default function Footer() {
    return (
    <footer className="footer_area p_120">
        <div className="container">
            <div className="row footer_inner">
                <div className="col-lg-6 col-sm-6">
                    <aside className="f_widget ab_widget">
                        <div className="f_title">
                            <h3>Sobre Nós</h3>
                        </div>
                        <p className="f_title">Você quer saber mais sobre a Saga StarWars? Não fique de fora da nossa comunidade e seja nosso Fã-Clube StarWars Pelo Mundo</p>
                        <p className="f_title">Copyright &copy; Todos os direitos reservador | Esse template tem base no Woodrox e foi modificado por Augusto e Bruno
                        </p>
                    </aside>
                </div>
                <div className="col-lg-6">
                    <aside>
                        <div className="f_title">
                            <h3>Redes</h3>
                        </div>
                        <p className="f_title">Siga-nos nas redes sociais e nos acompanhe nos eventos nacionais e internacionais</p>
                    </aside>
                </div>
            </div>
        </div>
    </footer>
    )
}