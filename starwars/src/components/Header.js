import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <header id="header">
            <div className="inner">
                {/*<Link to="/" className="logo">Capa </Link>*/}
                <nav id="nav">
                    <Link to="/">HOME</Link>
                    <Link to="/produtos">FILMS</Link>
                    <Link to="/starships">STARSHIPS</Link>
                    <Link to="/people">PEOPLE</Link>
                    <Link to="/planets">PLANETS</Link>
                    <Link to="/species">SPECIES</Link>
                    <Link to="/login">LOGIN</Link>
                </nav>
                <a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
            </div>
        </header>
    )
}
export default Header;
