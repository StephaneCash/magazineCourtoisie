import React, { useContext } from 'react'
import "./Payement.css"
import { ContextApp } from '../../../../AppContext';

const Payement = () => {

    const { step, setStep, setStepsCheck, stepsCheck } = useContext(ContextApp);

    function handleBackStep() {
        setStep(step - 1);
        const filterSteps = stepsCheck && stepsCheck.length > 0 &&
            stepsCheck.filter(val => val !== step)
        setStepsCheck(filterSteps);
    }

    function handleNextStep() {
        setStep(step + 1);
        setStepsCheck([...stepsCheck, step]);
    }

    return (
        <div className='payement'>

            <div className='btnsStepS'>
                <button
                    onClick={handleBackStep}
                    className='suivant'>Retour</button>
                <button
                    onClick={handleNextStep}
                    className='suivant'>Suivant</button>
            </div>
        </div>
    )
}

export default Payement