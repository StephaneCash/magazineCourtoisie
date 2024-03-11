import React, { useContext } from 'react'
import { ContextApp } from '../../AppContext'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Detail from './detail/Detail';
import InfosPerso from './detail/Forms/InfosPerso';
import Steps from './detail/Steps';
import "./MainCart.css"
import Payement from './detail/Forms/Payement';

const MainCart = () => {

    const { step } = useContext(ContextApp);
    return (
        <>
            <Header />

            <div className='mainCart'>
                <Steps />
                {
                    step === 0 ?
                        <Detail /> : step === 1 ? <InfosPerso /> : step === 2 ? <Payement /> : ""
                }
            </div>
            <Footer />
        </>
    )
}

export default MainCart