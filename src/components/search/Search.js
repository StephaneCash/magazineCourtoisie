import React from 'react'
import "./Search.css"
import { FaSearch } from 'react-icons/fa'

const Search = ({ setValueSearch }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='Search'>
            <div className='content'>
                <h5>Modèles de magazines</h5>
                <p>Vous pouvez choisir parmi une grande variété de modèles de magazines gratuits pour étonner et intriguer votre public. Commencez à zéro si vous voulez et
                    donnez à votre magazine numérique cette touche personnelle que vos lecteurs aiment tant.</p>
                <form className='inputSearch' onSubmit={(e) => handleSubmit(e)}>
                    <div className='svg'>
                        <FaSearch />
                    </div>
                    <input
                        type="search"
                        placeholder='Entrer le nom du magazine que vous cherchez...'
                        className='form-control'
                        onChange={(e) => setValueSearch(e.target.value)}
                    />
                </form>
            </div>
        </div>
    )
}

export default Search