import React from 'react'
import "./Categorie.css"
import { useSelector } from 'react-redux'

const Categorie = ({ setCategorieId }) => {

    const categories = useSelector(state => state.categories.value);

    return (
        <div className='Categorie'>
            <h2>Les magazines</h2>

            <hr />

            <div className='grille'>
                {
                    categories && categories.length > 0 ? categories.map(val => {
                        return <button key={val.id} className='btn' onClick={() => setCategorieId(val.id)}>{val.nom}</button>
                    }) : ""
                }
                <button className='btn' onClick={() => setCategorieId("")}>Toutes les catégories</button>
            </div>
        </div>
    )
}

export default Categorie