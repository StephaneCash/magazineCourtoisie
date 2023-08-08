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
                if (valueSearch)
                    return nom.includes(value);
                else
                    return val
            });
        setMagazineFilter(filterMagazines);
    }, [valueSearch, magazines]);

    useEffect(() => {
        const filterMagazines = magazines && magazines.length > 0 && magazines
            .filter(val => {
                const categorieMagazineId = val && val.categorieMagazineId;
                if (categorieId)
                    return categorieMagazineId === categorieId;
                else
                    return val
            });
        setMagazineFilter(filterMagazines);
    }, [categorieId, magazines]);


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