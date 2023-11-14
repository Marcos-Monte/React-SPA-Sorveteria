import React from 'react';

export default function Footer() {
    return (
        <footer>
            <div className="container rodape">

                <img src="assets\logo.png"></img>

                <div>
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>

                <div>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>

                <div>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>


            </div>
            <div className="container rodape-dois">
                <p>Gelateria. Orgulhosamente desenvolvido por <a href="https://www.linkedin.com/in/montemarcos/" target="_blank">Marcos Monte</a></p>
            </div>
        </footer>
    )
}