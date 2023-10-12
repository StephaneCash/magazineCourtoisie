import React, { useEffect, useState } from 'react'
import "./Header.css"
import logo from "../../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    function displayMenu() {
        let nav = document.querySelector('nav');
        nav.classList.toggle('active');
    };

    useEffect(() => {
        let nav = document.querySelector('nav');
        let links = document.querySelectorAll('nav li');
        links.forEach((link) => {
            link.addEventListener('click', () => {
                nav.classList.remove("active")
            })
        })
    }, []);

    const navigate = useNavigate();

    function handleToHome() {
        navigate("/");
    };

    return (
        <nav className='header'>
            <div className='col1'>
                <img src={logo} alt="" onClick={handleToHome} style={{cursor:"pointer"}} />
                <ul>
                    <li>
                        <Link to="/pourquoi-magazine-courtoisie" style={{ color: "#333", textDecoration: "none" }}>Pourquoi Magazine Courtoisie ?</Link>
                    </li>
                    <li>Créer</li>
                    <li>Ressources</li>
                    <li>Exemples</li>

                    <li className='liSpecifique'>
                        <select>
                            <option value="" key="">Fr</option>
                            <option value="" key="">En</option>
                        </select>

                        <button>Nous contacter</button>
                    </li>
                </ul>
            </div>
            <div className='col2'>
                <select>
                    <option value="" key="">Fr</option>
                    <option value="" key="">En</option>
                </select>

                <button>Nous contacter</button>
            </div>

            <div id='icons' onClick={() => displayMenu()}></div>
        </nav>
    )
}

export default Header