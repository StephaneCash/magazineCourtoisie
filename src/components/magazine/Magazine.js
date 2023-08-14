import React, { useEffect, useState } from 'react'
import "./Magazine.css"
import { useSelector } from 'react-redux'
import { baseUrlImage } from '../../bases/basesUrl';
import ReadDoc from './ReadDoc';

const Magazine = ({ categorieId, valueSearch }) => {

    const magazines = useSelector(state => state.magazines.value);
    const [magazinesFilter, setMagazineFilter] = useState([]);

    const [showModalReadDoc, setShowModalReadDoc] = useState(false);
    const [magazine, setMagazine] = useState();

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

    function handleMagazine(val) {
        setShowModalReadDoc(true);
        setMagazine(val);
    };

    function closeModalReadDoc() {
        setShowModalReadDoc(false);
    };

    return (
        <div className='magazine'>
            <div className='grille'>
                {
                    magazinesFilter ? magazinesFilter.length > 0 && magazinesFilter
                        .map(value => {
                            return <div className='card' key={value.id} onClick={() => handleMagazine(value)}>
                                <img src={baseUrlImage + "/" + value.image} alt="" />
                                <div className='contentNom'>
                                    {
                                        value && value.nom && value.nom.length > 20 ? value && value.nom && value.nom.substring(0, 20) + "..." :
                                            value && value.nom
                                    }
                                </div>
                            </div>
                        }) : "Chargement..."
                }
            </div>

            {
                magazinesFilter && magazinesFilter.length === 0 &&
                <div>0 magazines trouvés</div>
            }
            <ReadDoc
                show={showModalReadDoc}
                closeModal={closeModalReadDoc}
                magazine={magazine}
            />
        </div>
    )
}

export default Magazine