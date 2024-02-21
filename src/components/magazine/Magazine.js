import React, { useState } from 'react'
import "./Magazine.css"
import { useSelector } from 'react-redux'
import { baseUrlImage } from '../../bases/basesUrl';
import ReadDoc from './ReadDoc';

const Magazine = ({ categorieId, valueSearch }) => {

    const magazines = useSelector(state => state.magazines.value);

    const [showModalReadDoc, setShowModalReadDoc] = useState(false);
    const [magazine, setMagazine] = useState();


    const magazinesFilter = magazines && magazines.length > 0 && magazines
        .filter(val => {
            const nom = val && val.nom && val.nom.toLowerCase();
            const value = valueSearch && valueSearch.toLowerCase();

            if (categorieId) {
                const categorieMagazineId = val && val.categorieMagazineId;
                if (categorieId)
                    return categorieMagazineId === categorieId;
            } else if (valueSearch) {
                return nom.includes(value);
            } else {
                return val
            }
        });

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
                            const categorie = value && value.categorie;
                            return <div className='card' key={value.id}
                                onClick={() => handleMagazine(value)}>
                                <img src={baseUrlImage + "/" + value.image} alt="" />
                                <div className='descMagazine'>
                                    <div className='contentNom'>
                                        {
                                            value && value.nom && value.nom.length > 20 ? value && value.nom && value.nom.substring(0, 20) + "..." :
                                                value && value.nom
                                        }
                                    </div>
                                    <span className='categorieNom'>
                                        {
                                            categorie && categorie.nom && categorie.nom.length > 20 ?
                                                categorie && categorie.nom && categorie.nom.substring(0, 20) + "..." :
                                                categorie && categorie.nom
                                        }
                                    </span>
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