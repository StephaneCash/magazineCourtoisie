import React, { useContext } from 'react'
import "./Steps.css"
import { ContextApp } from '../../../AppContext'
import { FiCheck } from 'react-icons/fi';

const Steps = () => {

    const { step, stepsCheck } = useContext(ContextApp);

    return (
        <div className='steps'>
            <div className='content'>
                <div style={{
                    background: stepsCheck && stepsCheck.length > 0 &&
                        stepsCheck.includes(0) ? "#084298" : ""
                }} className={step === 0 ? "contentIcon active" : "contentIcon"}>
                    {
                        stepsCheck && stepsCheck.length > 0 &&
                            stepsCheck.includes(0) ? <div className='numberStep'>
                            <FiCheck color='#fff' size={20} />
                        </div> :
                            <span className='numberStep'>1</span>
                    }
                </div>
                <span className='labelStep'>Détail panier</span>
            </div>
            <hr />
            <div className='content'>
                <div style={{
                    background: stepsCheck && stepsCheck.length > 0 &&
                        stepsCheck.includes(1) ? "#084298" : ""
                }}  className={step === 1 ? "contentIcon active" : "contentIcon"}>
                    {
                        stepsCheck && stepsCheck.length > 0 &&
                            stepsCheck.includes(1) ? <div className='numberStep'>
                            <FiCheck color='#fff' size={20} />
                        </div> :
                            <span className='numberStep'>2</span>
                    }
                </div>
                <span className='labelStep'>
                    Informations personnelles
                </span>
            </div>
            <hr />
            <div className='content'>
                <div style={{
                    background: stepsCheck && stepsCheck.length > 0 &&
                        stepsCheck.includes(2) ? "#084298" : ""
                }} className={step === 2 ? "contentIcon active" : "contentIcon"}>
                    {
                        stepsCheck && stepsCheck.length > 0 &&
                            stepsCheck.includes(2) ? <div className='numberStep'>
                            <FiCheck color='#fff' size={20} />
                        </div> :
                            <span className='numberStep'>3</span>
                    }
                </div>
                <span className='labelStep'>Payer</span>
            </div>
        </div>
    )
}

export default Steps