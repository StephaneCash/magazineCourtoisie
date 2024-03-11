import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import App from './App';
import { baseUrl } from './bases/basesUrl';
//import { useJwt } from "react-jwt";
import { useDispatch } from 'react-redux';

export const ContextApp = createContext();

const AppContext = () => {

    const [userConnected, setUserConnected] = useState(null);

    const [dataCommande, setDataCommande] = useState(null);
    const [step, setStep] = useState(0);
    const [stepsCheck, setStepsCheck] = useState([]);

    const dataUserLocalStorage = localStorage.getItem('userConnected');
    const jwt = dataUserLocalStorage !== "undefined" ? JSON.parse(localStorage.getItem('userConnected')) : "";
   // const { decodedToken } = useJwt(jwt && jwt);

    const dispatch = useDispatch()
/*
    useEffect(() => {
        if (decodedToken) {
            axios.get(`${baseUrl}/clients/${decodedToken.id}`)
                .then(res => {
                    setUserConnected(res.data);
                   // dispatch(addUserIdInObject(res.data && res.data.id))
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [decodedToken, dispatch]);
*/
    return (
        <ContextApp.Provider
            value={{
                userConnected, setUserConnected, step, setStep,
                setDataCommande, dataCommande, setStepsCheck, stepsCheck
            }}
        >
            <App />
        </ContextApp.Provider>
    )
}

export default AppContext