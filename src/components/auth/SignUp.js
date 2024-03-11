import React, { useState } from 'react'
import "./Auth.css"
import { Link } from 'react-router-dom';
import { FiLock, FiMail, FiPhone, FiUser, FiUserCheck } from 'react-icons/fi';

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [numTel, setNumTel] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='auth'>
      <h2>Inscrivez-vous</h2>

      <form onSubmit={handleSubmit}>

        <div>

          <div className='contentInput'>
            <FiUser />
            <input
              type="text"
              placeholder='Votre nom'
              onChange={(e) => setNom(e.target.value)}
              value={nom}
            />
          </div>
          <br />

          <div className='contentInput'>
            <FiUserCheck />
            <input
              type="text"
              placeholder='Votre prénom'
              onChange={(e) => setPrenom(e.target.value)}
              value={prenom}
            />
          </div>
          <br />

          <div className='contentInput'>
            <FiPhone />
            <input
              type="text"
              placeholder='Votre numéro de téléphone'
              onChange={(e) => setNumTel(e.target.value)}
              value={numTel}
            />
          </div>
          <br />

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
          <span>Avez-vous déjà de compte ?  Connectez-vous </span>
          <Link to="/connexion">ici</Link>
        </div>

      </div>

      <Link to="/" className='mt-2'>
        Retour à la page d'accueil
      </Link>
    </div>
  )
}

export default SignUp