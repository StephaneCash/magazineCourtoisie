import React from 'react'
import "./Categorie.css"
import { useSelector } from 'react-redux'

const Categorie = ({ setCategorieId, categorieId }) => {

    const categories = useSelector(state => state.categories.value);

    return (
        <div className='Categorie'>
            <h2>Les magazines</h2>

            <hr />

            <div className='grille'>
                {
                    categories ? categories.length > 0 ? categories.map(val => {
                        return <button key={val.id}
                            style={{
                                background: val && val.id === categorieId ? "#084298" : "#fff",
                                color: val && val.id === categorieId ? "#fff" : ""
                            }}
                            className='btn' onClick={() => setCategorieId(val.id)}>
                            {
                                val && val.nom && val.nom.length > 15 ? val && val.nom && val.nom.substring(0, 15) + "..." :
                                    val && val.nom
                            }
                        </button>
                    }) : "Chargement..." : "Connexion impossible"
                }
                <button className='btn' onClick={() => setCategorieId("")}>Toutes les catégories</button>
            </div>
        </div>
    )
}

export default Categorie