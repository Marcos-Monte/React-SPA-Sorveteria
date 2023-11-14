import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Header() {
    return (
        <header>
            <div className="container topo">

                <img src="assets\logo.png" />
                <nav>
                    <Link className="link" to='/'>Home</Link>
                    <Link className="link" to='/sabores'>Sabores</Link>
                    <Link className="link" to='/sobre'>Sobre</Link>
                </nav>
            </div>
        </header>
    )
}