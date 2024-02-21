import React, { useEffect } from 'react'
import "./Search.css"
import { FaSearch } from 'react-icons/fa'

const Search = ({ setValueSearch, setCategorieId, valueSearch }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    useEffect(()=>{
        setCategorieId("");
    }, [valueSearch, setCategorieId]);

    return (
        <div className='Search'>
            <div className='content'>
                <h5>Savoir-vivre</h5>
                <p>Les bonnes manières servent plus que les beaux habits <br/> pour nous faire estimer par autrui.</p>
                <p>Solange KABENGELE KAZADI </p>
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