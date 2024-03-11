import React, { useEffect, useState } from 'react'
import "./Header.css"
import logo from "../../assets/logo.png"
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';
import { BsPersonCircle } from 'react-icons/bs';
import Panier from '../panier/Panier';
import { toast } from 'react-toastify';

const Header = () => {

    const navigate = useNavigate();

    const [valueSearch, setValueSearch] = useState('');

    function handleToHome() {
        navigate("/");
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (valueSearch)
            navigate(`/search/${valueSearch}`);
        else
            toast.error("Veuillez renseigner une donnée à rechercher...")
    };

    const handleRedirectToConnexion = () => {
        navigate('/connexion');
    };

    const [showForm, setShowForm] = useState(false);

    const [windowSize, setWindowSize] = useState(
        window.innerWidth
    );

    useEffect(() => {
        function handleRezise() {
            setWindowSize(window.innerWidth)
        }

        window.addEventListener('resize', handleRezise);

        return () => window.removeEventListener('resize', handleRezise)

    }, [windowSize]);

    console.log(showForm)

    return (
        <nav className='header'>
            {
                !showForm && windowSize <= 740 ?
                    <div className='col1'>
                        <img src={logo} alt="" onClick={handleToHome} style={{ cursor: "pointer" }} />
                    </div> :
                    windowSize > 740 &&
                    <div className='col1'>
                        <img src={logo} alt="" onClick={handleToHome} style={{ cursor: "pointer" }} />
                    </div>
            }

            <form className={showForm ? "form active" : "form"} onSubmit={(e) => handleSearch(e)}>
                <div>
                    <input
                        type="search"
                        placeholder='Rechercher dans magazine courtoisie...'
                        onChange={(e) => setValueSearch(e.target.value)}
                    />
                    <button>
                        <FiSearch color='#fff' />
                    </button>
                </div>
            </form>

            <div className={showForm ? "icons inactive" : "icons"}>
                <div className='hidenIcon'>
                    <button onClick={() => setShowForm(true)}>
                        <FiSearch color='#fff' />
                        <span>Rechercher</span>
                    </button>
                </div>
                <button className='button' onClick={handleRedirectToConnexion}>
                    <BsPersonCircle color='#222' />
                    <span>Connectez-vous</span>
                </button>
                <Panier />
            </div>

            {
                showForm &&
                <div className={showForm ? "iconsSec active" : "iconsSec"}>
                    <button onClick={() => setShowForm(!showForm)}>
                        <FiX size={30} color='#333' />
                    </button>
                </div>
            }
        </nav>
    )
}

export default Header