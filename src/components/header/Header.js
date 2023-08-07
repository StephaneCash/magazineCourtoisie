import React from 'react'
import "./Header.css"
import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className='header'>
            <div className='col1'>
                <img src={logo} alt="" />
                <ul>
                    <li>Pourquoi Magazine Espoir ?</li>
                    <li>Créer</li>
                    <li>Ressources</li>
                    <li>Exemples</li>
                </ul>
            </div>
            <div className='col2'>
                <select>
                    <option value="" key="">Fr</option>
                    <option value="" key="">En</option>
                </select>

                <button>Nous contacter</button>
            </div>
        </div>
    )
}

export default Header