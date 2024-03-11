import React, { useState } from 'react'
import "./Auth.css"
import { Link } from 'react-router-dom';
import { FiLock, FiMail } from 'react-icons/fi';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='auth'>
            <h2>Connectez-vous</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <div className='contentInput'>
                        <FiMail />
                        <input
                            type="email"
                            placeholder='Votre adresse email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <br />

                    <div className='contentInput'>
                        <FiLock />
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            placeholder='Votre adresse mot de passe'
                        />
                    </div>

                </div>

                <button
                    disabled={
                        email && password ? false : true
                    }
                    style={{
                        opacity: email && password ? 1 : .6
                    }}
                >Se conneter</button>
            </form>

            <div className='contentPassForget'>
                <div>
                    <span>Vous n'avez pas de compte ?  Créer </span>
                    <Link to="/inscription">ici</Link>
                </div>

                <button>Mot de passe oublié ?</button>
            </div>

            <Link to="/" className='mt-2'>
                Retour à la page d'accueil
            </Link>
        </div>
    )
}

export default SignIn