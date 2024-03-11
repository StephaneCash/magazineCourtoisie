import React from 'react'
import "./Categorie.css"
import { useSelector } from 'react-redux'

const Categorie = ({ setCategorieId, categorieId, sizeMag }) => {

    const categories = useSelector(state => state.categories.value);

    const magazines = useSelector(state => state.magazines.value);

    return (
        <div className='Categorie' data-aos="zoom-in">

            <div className='head'>
                <h2>{categorieId ? sizeMag : magazines && magazines.length} magazines</h2>
                <button>Voir la liste</button>
            </div>

            <div className='categories-grille'>
                {
                    categories ? categories.length > 0 ? categories.map(val => {
                        return <button key={val.id}
                            style={{
                                background: val && val.id === categorieId ? "#084298" : "#f2f2f2",
                                color: val && val.id === categorieId ? "#fff" : ""
                            }}
                            onClick={() => setCategorieId(val.id)}>
                            {
                                val && val.nom
                            }
                        </button>
                    }) : "Chargement..." : "Connexion impossible, vérifiez vos paramètres réseaux"
                }
                {
                    categories && categories.length > 0 &&
                    <button onClick={() => setCategorieId("")}>Toutes les catégories</button>
                }

            </div>
        </div>
    )
}

export default Categorie