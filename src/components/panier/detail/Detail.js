import React, { useContext, useEffect } from 'react'
import "./Detail.css"
import { useDispatch, useSelector } from 'react-redux';
import { baseUrlImage } from '../../../bases/basesUrl';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { BsTrash3 } from 'react-icons/bs';
import { modifyCart, removeToCart } from '../../../features/Cart';
import { ContextApp } from '../../../AppContext';

const Detail = () => {

    const cart = useSelector(state => state.cart.value);

    const { step, setStep, setStepsCheck, stepsCheck } = useContext(ContextApp);

    const dispatch = useDispatch();

    const handleAddSize = (val, index) => {
        const magazine = { ...val };
        magazine.size = val.size + 1;
        magazine.index = index;
        dispatch(modifyCart(magazine));
    };

    const handleReduceSize = (val, index) => {
        const magazine = { ...val };
        if (val && val.size && val.size > 1) {
            magazine.size = val.size - 1;
        }
        magazine.index = index;
        dispatch(modifyCart(magazine));
    };

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const sommePrix = () => {
        let somme = 0;
        cart && cart.length > 0 &&
            cart.map(val => {
                const prix = val && val.size * 20;
                somme = somme + prix;
                return somme;
            });

        return somme
    };

    const handleNextStep = () => {
        setStep(step + 1);
        setStepsCheck([...stepsCheck, step]);
    };

    return (
        <>
           
            <div className='detail'>
                <div className='head'>
                    <h2>Detail de votre panier</h2>
                    <h4>
                        Prix total : {sommePrix()} USD
                    </h4>
                </div>

                <div className='contentdetail'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Produit</th>
                                <th>Prix</th>
                                <th>Opérations</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                cart && cart.length > 0 ?
                                    cart.map((val, i) => {
                                        const categorie = val && val.categorie;
                                        const prix = 20;
                                        return <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>
                                                <div className='produit'>
                                                    <div className='b1'>
                                                        <img src={baseUrlImage + "/" + val.image} alt="" />

                                                        <div className='details'>
                                                            <span>{val && val.nom}</span>
                                                            <span>{categorie && categorie.nom}</span>
                                                            <span>{prix} USD</span>
                                                            <span>Edition 2023 N° {i + 1}</span>
                                                        </div>
                                                    </div>

                                                    <div className='b2'>
                                                        <button onClick={() => handleAddSize(val, i)}>
                                                            <FiPlus />
                                                        </button>
                                                        <button>{val && val.size}</button>
                                                        <button onClick={() => handleReduceSize(val, i)}>
                                                            <FiMinus />
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                {val && val.size * prix} USD
                                            </td>

                                            <td>
                                                <button
                                                    onClick={() => dispatch(removeToCart(val))}
                                                    style={{
                                                        border: 0,
                                                        background: "#fff"
                                                    }}>
                                                    <BsTrash3 />
                                                </button>
                                            </td>
                                        </tr>
                                    }) : <tr>
                                        <td colSpan={"4px"} style={{ textAlign: "center" }}>Panier vide</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
                {
                    cart && cart.length > 0 &&
                    <button
                        onClick={handleNextStep}
                        className='suivant'>Suivant</button>
                }

            </div>
        </>
    )
}

export default Detail