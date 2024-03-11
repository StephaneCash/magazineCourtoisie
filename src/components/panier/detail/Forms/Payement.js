import React, { useContext, useState } from 'react'
import "./Payement.css"
import { ContextApp } from '../../../../AppContext';
import { toast } from 'react-toastify';
import cardcredit from "../../../../assets/cardcredit.jpg"

const Payement = () => {

    const { step, setStep, setStepsCheck, stepsCheck } = useContext(ContextApp);

    const [modePaiement, setModePaiement] = useState(0);

    function handleBackStep() {
        setStep(step - 1);
        const filterSteps = stepsCheck && stepsCheck.length > 0 &&
            stepsCheck.filter(val => val !== step)
        setStepsCheck(filterSteps);
    }

    function handleNextStep() {
        if (modePaiement && modePaiement !== 0) {
            setStep(step + 1);
            setStepsCheck([...stepsCheck, step]);
        } else {
            toast.error("Veuillez choisir le mode de paiement")
        }
    }

    return (
        <div className='payement'>

            <div className='mainPayement'>
                <label>Choisir le mode de paiement</label>

                <select onChange={(e) => setModePaiement(e.target.value)}>
                    <option value=''>--Choisir un mode de paiement--</option>
                    <option value={1}>Payement mobile</option>
                    <option value={2}>Payement via une carte bancaire</option>
                </select>

                {
                    modePaiement === "2" &&
                    <div className='cardMain'>
                        <img src={cardcredit} alt="" />
                    </div>
                }
            </div>

            <div className='btnsStepS'>
                <button
                    onClick={handleBackStep}
                    className='suivant'>Retour</button>
                <button
                    onClick={handleNextStep}
                    className='suivant'>
                        {
                            modePaiement && modePaiement !== 0 ?
                            "Confirmer" : "Suivant"
                        }
                    </button>
            </div>
        </div>
    )
}

export default Payement