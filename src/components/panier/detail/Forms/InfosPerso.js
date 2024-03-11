import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import "./InfosPerso.css"
import { ContextApp } from '../../../../AppContext';
import { FiCheckCircle, FiCircle } from 'react-icons/fi';
import "react-datetime/css/react-datetime.css";
import Datetime from 'react-datetime';

const InfosPerso = () => {

    const [noms, setNoms] = useState("");
    const [prenom, setPrenom] = useState("");
    const [numTel, setNumTel] = useState("");

    const [email, setEmail] = useState('');
    const [desc, setDesc] = useState('');
    const [adress, setAdress] = useState('');

    const [modeLivraison, setModeLivraison] = useState(0);
    const [dateLivraison, setDateLivraison] = useState(null);

    const { step, setStep, setStepsCheck, stepsCheck } = useContext(ContextApp);

    const handleNextStep = (e) => {
        e.preventDefault()
        if (noms && email && modeLivraison) {
            if (modeLivraison === 2) {
                if (dateLivraison && adress) {
                    setStep(step + 1);
                    setStepsCheck([...stepsCheck, step]);
                } else {
                    toast.error("Veuillez renseiger l'adresse de livraison, date et l'heure.")
                }
            } else {
                setStep(step + 1);
                setStepsCheck([...stepsCheck, step]);
            }
        } else {
            toast.error("Veuillez renseigner les informations demandées !!")
        }
    };

    const handleBackStep = (e) => {
        e.preventDefault()
        setStep(step - 1);
        const filterSteps = stepsCheck && stepsCheck.length > 0 &&
            stepsCheck.filter(val => val !== step)
        setStepsCheck(filterSteps);
    };

    return (
        <div className='infosPerso'>
            <form>
                <div className='modeLivraison'>
                    <h5>Choisir le mode d'achat</h5>
                    <div onClick={() => setModeLivraison(1)} className={modeLivraison === 1 ? "active" : ""}>
                        {
                            modeLivraison === 1 ? <FiCheckCircle /> :
                                <FiCircle />
                        }
                        <label>Télécharger simplement le magazine en format PDF</label>
                    </div>
                    <div onClick={() => setModeLivraison(2)} className={modeLivraison === 2 ? "active" : ""}>
                        {
                            modeLivraison === 2 ? <FiCheckCircle /> :
                                <FiCircle />
                        }
                        <label>Télécharger le magazine en format PDF et faites-vous livre le format physique</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6'>
                        <input
                            id='noms'
                            type="text"
                            placeholder='Votre nom'
                            value={noms}
                            onChange={(e) => setNoms(e.target.value)}
                        />

                        <input
                            id='noms'
                            type="text"
                            placeholder='Votre prénom'
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                        />
                        <input
                            id='email'
                            type="email"
                            placeholder='Votre adresse email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            id='noms'
                            type="text"
                            placeholder='Votre numéro de téléphone'
                            value={numTel}
                            onChange={(e) => setNumTel(e.target.value)}
                        />
                    </div>

                    <div className='col-sm-6'>
                        {
                            modeLivraison === 2 &&
                            <textarea
                                id='desc'
                                cols="20"
                                value={adress}
                                onChange={(e) => setAdress(e.target.value)}
                                rows="1" placeholder='Votre adresse physique'></textarea>
                        }

                        {
                            modeLivraison === 2 &&
                            <>
                                <label>Renseigner votre date de livraison et l'heure</label>
                                <Datetime
                                    onChange={(date) => setDateLivraison(date)}
                                />
                            </>
                        }

                        <textarea
                            id='desc'
                            cols="20"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            rows={modeLivraison === 2 ? 1 : 3} placeholder='Un commentaire...'></textarea>


                    </div>
                </div>

                <div className='btnsStepS'>
                    <button
                        onClick={handleBackStep}
                        className='suivant'>Retour</button>
                    <button
                        onClick={handleNextStep}
                        className='suivant'>Suivant</button>
                </div>
            </form>
        </div>
    )
}

export default InfosPerso