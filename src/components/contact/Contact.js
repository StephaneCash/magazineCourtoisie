import React, { useState } from 'react'
import "./Contact.css"
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi'
import { BsWhatsapp } from "react-icons/bs";
import { toast } from 'react-toastify';

const Contact = () => {

    const [noms, setNoms] = useState("");
    const [email, setEmail] = useState('');
    const [desc, setDesc] = useState('');

    const [clic, setClic] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setClic(true);

        setTimeout(() => {
            toast.success('Votre message a été bien reçu');
            setClic(false);
        }, 2000);
    };

    return (
        <div className='contacts' data-aos="fade-up"
        data-aos-duration="1000">
            <h2>Contacts</h2>

            <div className='mainContact'>
                <div className='column1'>
                    <h5>Contactez-nous par ces adresses : </h5>
                    <div className='adress'>
                        <FiMapPin />
                        <div style={{flex:1}}>immeuble CTC /au croisement des avenues Equateur et Wagenia . Gombe /Kinshasa, 10ème Niveau</div>
                    </div>

                    <div className='adress'>
                        <FiPhoneCall />
                        <span>+243 815 662 413</span>
                    </div>

                    <div className='adress'>
                        <BsWhatsapp />
                        <span>+243 815 662 413</span>
                    </div>

                    <div className='adress'>
                        <FiMail />
                        <div style={{flex:1}}>solangekkabengele@magazinecourtoisie.com</div>
                    </div>
                </div>
                <div className='column2'>
                    <form onSubmit={handleSubmit}>
                        <input
                            id='noms'
                            type="text"
                            placeholder='Votre nom et prénom'
                            value={noms}
                            onChange={(e) => setNoms(e.target.value)}
                        />
                        <input
                            id='email'
                            type="email"
                            placeholder='Votre adresse email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea
                            id='desc'
                            cols="30"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            rows="3" placeholder='Votre message'></textarea>
                        <button
                            disabled={noms && desc && email ? false : true}
                            style={{
                                opacity: noms && desc && email ? 1 : .4
                            }}
                        >
                            {
                                clic ? "Envoi..." : "Envoyer"
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact