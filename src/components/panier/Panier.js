import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import "./Panier.css"
import { useNavigate } from 'react-router-dom'

const Panier = () => {

    const cart = useSelector(state => state.cart.value);

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/panier/detail');
    };

    return (
        <div className='panier'>
            <button onClick={handleRedirect}>
                <div className='contentPanier'>
                    <div>{cart && cart.length}</div>
                    <FiShoppingCart />
                </div>
                <span>Votre panier</span>
            </button>
        </div>
    )
}

export default Panier