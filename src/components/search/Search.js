import React, { useEffect } from 'react'
import "./Search.css"
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { baseUrlImage } from '../../bases/basesUrl'

const Search = () => {

    const params = useParams();
    const valueSearch = params && params.name;

    const magazines = useSelector(state => state.magazines.value);

    const magazinesFilter = magazines && magazines.length > 0 && magazines
        .filter(val => {
            const nom = val && val.nom && val.nom.toLowerCase();
            const value = valueSearch && valueSearch.toLowerCase();

            return nom.includes(value);
        });

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Header />
            <div className='Search'>

                <h5>
                    {magazinesFilter && magazinesFilter.length} résultats trouvés
                </h5>

                <div className='grille'>
                    {
                        magazinesFilter ? magazinesFilter.length > 0 && magazinesFilter
                            .map(value => {
                                const categorie = value && value.categorie;
                                return <Link
                                    style={{ textDecoration: "none" }}
                                    to={{
                                        pathname: `/magazine/${value && value.nom}`
                                    }}
                                    state={{ val: value }}
                                    className='card' key={value.id}>
                                    <img src={baseUrlImage + "/" + value.image} alt="" />
                                    <div className='descMagazine'>
                                        <div className='contentNom'>
                                            {
                                                value && value.nom && value.nom.length > 50 ? value && value.nom && value.nom.substring(0, 50) + "..." :
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

                                        <div>
                                            <span>2024/mars</span> -
                                            <span>N° 23</span>
                                        </div>
                                    </div>
                                </Link>
                            }) : "Chargement..."
                    }
                </div>

                {
                    magazinesFilter && magazinesFilter.length === 0 && <div className>
                        Aucun magazine trouvé avec la recherche {valueSearch && valueSearch}
                    </div>
                }
            </div>
            <Footer />
        </>
    )
}

export default Search