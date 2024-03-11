import React from 'react'
import "./Pourquoi.css"
import apropos from "../../assets/saint.png"

const Pourquoi = () => {
  return (
    <div className='pourquoi' data-aos="zoom-in-left">
      <h2>A propos de Courtoisie magazine</h2>

      <div className='text'>
        <div className='contentText'>
          <h3>Qui sommes-nous ?</h3>

          Magazine courtoisie est une plateforme dédiée aux amateurs de magazines, offrant un large
          éventail de rubriques couvrant divers sujets et genres.

          <h5 className='mt-1'>Notre mission est de :</h5>

          <ul>
            <li>
              Promouvoir la lecture de Courtoisie Mag : Nous croyons que notre magazine constitue une source d'information et de divertissement précieuse, et nous
              nous engageons à le rendre accessible à tous.
            </li>

            <li>
              Offrir aux lecteurs une multiplicité de rubriques : Notre plateforme propose plusieurs
              rubriques notamment : La mode, décoration, us et coutumes, personnalité, fiscalité congolaise,
              prévention routière, cuisine de chez nous, environnement, événements etc…
            </li>
          </ul>

          <h5 className='mt-1'> Ce que nous offrons :</h5>

          <ul>
            <li>
              Un service d'abonnement flexible : Vous pouvez choisir de vous abonner à notre plateforme
              pour ne rater aucune publication ou acheter notre magazine en format numérique ou physique.
            </li>

            <li>
              Une expérience de lecture intuitive : Notre plateforme est conçue pour offrir
              une expérience de lecture agréable sur tous les appareils.
            </li>
          </ul>

          <h5 className='mt-1'>Pourquoi choisir Courtoisie magazine  ?</h5>

          Le Magazine Courtoisie est un concept original en ce qu'il traite d'une valeur civique universelle,
          qui paradoxalement n'est pas mise en lumière alors qu'elle baigne tous les domaines de la vie.
          La courtoisie c'est comme une fleur d'une bonne senteur dont la présence dans une pièce rend
          agréable le séjour. Elle est aussi comme une eau qui apaise, rafraîchit et apaise les cours. Magazine de bonnes mœurs et manières, COURTOISIE a
          aussi une vocation généraliste, car c'est une valeur cardinale indispensable dans tous les domaines et instants de la vie.
        </div>

        <img src={apropos} alt="" />
      </div>
    </div>
  )
}

export default Pourquoi