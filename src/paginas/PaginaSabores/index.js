import React from 'react';

import Footer from '../../componentes/Rodape';
import Header from '../../componentes/Topo';

import './style.css';
const PaginaSabores = () => {
    return (
        <div className="sabores">
            <Header />

            <main>

                <section className="banner-sabores">
                    <div className="container conteudo-banner">
                        <h1 className="titulo">NOSSOS SABORES</h1>
                    </div>
                </section>

                <section className="container">

                    <h2 className="sabores-titulo">SABORES DE SORVETE</h2>

                    <div className="sabores-cards">

                        <div className="card">
                            <img src="assets\sabor-oreo.png" />
                            <div>
                                <span>Sorvete de Oreo</span>
                                <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                            </div>
                        </div>

                        <div className="card">
                            <img src="assets\sabor-pistache.png" />
                            <div>
                                <span>Sorvete Pistaque</span>
                                <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                            </div>
                        </div>

                        <div className="card">
                            <img src="assets\sabor-cookies-avela.png" />
                            <div>
                                <span>Sorvete Cookies & Avelã</span>
                                <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                            </div>
                        </div>

                        <div className="card">
                            <img src="assets\sorbet-kiwi.png" />
                            <div>
                                <span>Sorvete de Kiwi</span>
                                <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                            </div>
                        </div>

                        <div className="card">
                            <img src="assets\sorbet-morango.png" />
                            <div>
                                <span>Sorvete de Morango</span>
                                <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                            </div>
                        </div>

                        <div className="card">
                            <img src="assets\sorbet-limao.png" />
                            <div>
                                <span>Sorvete de Limão Siciliano</span>
                                <p>O incrível sorvete gourmet de limão siciliano vai te encantar</p>
                            </div>
                        </div>

                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}

export default PaginaSabores;