import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Startseite</Link></li>
                <li><Link to="/idea-concept">Idee und Konzept</Link></li>
                <li><Link to="/landi-1939">Die Landi 1939</Link></li>
                <li><Link to="/effects">Auswirkungen</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
