import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <Link to="/">Collections</Link>
                        <Link to="/Men">Men</Link>
                        <Link to="/Women">Women</Link>
                        <Link to="/About">About</Link>
                        <Link to="/Conect">Conect</Link>
                    </ul>
                </nav>
            </header>
        </div>
    );
}