import React, { useState } from 'react'
import Search from './search/Search'
import Categorie from './categories/Categorie'
import Magazine from './magazine/Magazine'

const Main = () => {

    const [categorieId, setCategorieId] = useState('');
    const [valueSearch, setValueSearch] = useState('');

    return (
        <>
            <Search setValueSearch={setValueSearch} />
            <Categorie setCategorieId={setCategorieId} />
            <Magazine categorieId={categorieId} valueSearch={valueSearch} />
        </>
    )
}

export default Main