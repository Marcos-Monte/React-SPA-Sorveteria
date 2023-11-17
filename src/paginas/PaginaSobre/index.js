import React from 'react';

import './style.css';

import Footer from '../../componentes/Rodape';
import Header from '../../componentes/Topo';
const PaginaSobre = () => {
    return (
        <div className="sobre">
            <Header />
            <main>
                <section className="banner-sobre">
                    <div className="container conteudo-banner">
                        <h1 className="titulo">A GELATERIA</h1>
                    </div>
                </section>

                <section className="container sobre-container">

                    <h2>Sobre Nós</h2>

                    <span>Nós simplesmente amamos sorvete!</span>

                    <p>
                        Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
                        sorvete produzido. Fazemos o melhor sorvete para os nossos
                        clientes e gostamos de receber elogios. Estamos operando desde
                        2009 com as melhores matérias-primas para a produção final do
                        sorvete. Vendemos tanto para varejo como para atacado.
                    </p>
                    <p>
                        Nossos clientes podem comprar os nossos sorvetes e degustar na
                        nossa loja ou levar para sua residência e aproveitar junto com a
                        família. Também vendemos para estabelecimentos e criamos eventos
                        como festa de aniversário, formaturas e eventos empresariais. Para
                        contratar os nossos serviços, basta entrar em contato conosco.
                        Iremos proporcionar o melhor atendimento e os melhores produtos
                        para você fazer a sua festa mais saborosa, com o melhor sorvete da
                        cidade.
                    </p>
                </section>
                <section className="sobre-imagens">
                    <img src="assets\sobre-image.jpg" />
                    <img src="assets\sorveteria.jpg" />
                </section>
            </main>
            <Footer />
        </div>

    )
}

export default PaginaSobre;