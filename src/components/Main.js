import React, { useEffect, useState } from 'react'
import Search from './search/Search'
import Categorie from './categories/Categorie'
import Magazine from './magazine/Magazine'
import CarousselImagesMag from './caroussel/CarousselImagesMag'
import Videos from './videos/Videos'
import Pourquoi from './pourquoi/Pourquoi'
import Contact from './contact/Contact'
import 'aos/dist/aos.css'
import AOS from 'aos';
import Header from './header/Header'
import Footer from './footer/Footer'

const Main = () => {

    const [categorieId, setCategorieId] = useState('');
    const [valueSearch, setValueSearch] = useState('');

    const [sizeMag, setSizeMag] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, []);

    return (
        <>
            <Header />
            <div className='mainApp'>
                <CarousselImagesMag />
                <Categorie
                    setCategorieId={setCategorieId}
                    categorieId={categorieId}
                    sizeMag={sizeMag}
                />
                <Magazine
                    categorieId={categorieId} valueSearch={valueSearch}
                    setSizeMag={setSizeMag}
                />
                <Videos />
                <Pourquoi />
                <Contact />
            </div>
            <Footer />
        </>
    )
}

export default Main