import React, { useEffect, useState } from 'react'
import "./Magazine.css"
import { useSelector } from 'react-redux'
import { baseUrlImage } from '../../bases/basesUrl';

const Magazine = ({ categorieId, valueSearch }) => {

    const magazines = useSelector(state => state.magazines.value);
    const [magazinesFilter, setMagazineFilter] = useState([]);

    useEffect(() => {
        const filterMagazines = magazines && magazines.length > 0 && magazines
            .filter(val => {
                const nom = val && val.nom && val.nom.toLowerCase();
                const value = valueSearch && valueSearch.toLowerCase();
                const categorie = val && val.categorieMagazineId;
                console.log(typeof categorie)
                if (categorie === categorieId === true) {
                    return parseInt(categorie) === parseInt(categorieId);
                } else {
                    return nom.includes(value);
                }
            });
        setMagazineFilter(filterMagazines);
    }, [valueSearch, magazines, categorieId]);
    
   // console.log(typeof categorieId)

    return (
        <div className='magazine'>
            <div className='grille'>
                {
                    magazinesFilter && magazinesFilter.length > 0 ? magazinesFilter
                        .map(value => {
                            return <div className='card' key={value.id}>
                                <img src={baseUrlImage + "/" + value.image} alt="" />
                                <div className='contentNom'>{value.nom}</div>
                            </div>
                        }) : "Chargement..."
                }
            </div>

            {
                magazinesFilter && magazinesFilter.length === 0 &&
                <div>0 magazines trouvés</div>
            }
        </div>
    )
}

export default Magazine