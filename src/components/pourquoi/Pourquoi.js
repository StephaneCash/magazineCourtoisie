import React from 'react'
import "./Pourquoi.css"
import apropos from "../../assets/saint.png"

const Pourquoi = () => {
  return (
    <div className='pourquoi' data-aos="zoom-in-left">
      <h2>A props du magazine COURTOISIE</h2>

      <div className='text'>
        <div className='contentText'>
          <h3>Qui sommes-nous ?</h3>

          Magazine courtoisie est une plateforme dédiée aux amateurs de magazines,
          offrant un large éventail d'ouvrages couvrant divers sujets et genres. Notre mission est de :

          <ul>
            <li> Promouvoir la lecture de magazines : Nous croyons que les magazines constituent une source
              d'information et de divertissement précieuse, et nous nous engageons à les rendre accessibles à tous.</li>

            <li>
              Offrir une large sélection de magazines : Notre plateforme propose des magazines pour tous les goûts, des actualités
              et de la mode aux loisirs et à la cuisine.
            </li>

            <li>
              Soutenir l'industrie du magazine : Nous collaborons avec des éditeurs du monde entier pour offrir une
              plateforme de distribution numérique et promouvoir leurs publications.
            </li>
          </ul>

          <h6>Ce que nous offrons :</h6>

          <ul>
            <li>
              Un vaste choix de magazines : Notre catalogue comprend des centaines de magazines en provenance du monde entier,
              disponibles en format numérique et/ou papier.
            </li>

            <li>
              Un service d'abonnement flexible : Vous pouvez choisir de vous abonner à vos
              magazines préférés ou acheter des numéros individuels.
            </li>

            <li>
              Une expérience de lecture intuitive : Notre plateforme est conçue pour offrir
              une expérience de lecture agréable sur tous les appareils.
            </li>
          </ul>


          <h6> Pourquoi choisir  Magazine courtoisie  ?</h6>

          Votre guichet unique pour les magazines : Trouvez tous vos magazines préférés en un seul endroit.
          Des prix abordables : Nous proposons des prix compétitifs sur tous nos magazines.
          Un service client exceptionnel : Notre équipe est toujours disponible pour vous aider.
          Rejoignez notre communauté de passionnés de magazines !

          Créez un compte gratuit pour explorer notre catalogue et découvrir de nouveaux magazines.
          Abonnez-vous à vos magazines préférés et ne manquez jamais un numéro.
          Suivez-nous sur les réseaux sociaux pour rester au courant des dernières actualités et offres.
          Magazine courtoisie est votre source incontournable pour les magazines. Explorez notre univers de lecture dès aujourd'hui !
        </div>

        <img src={apropos} alt="" />
      </div>
    </div>
  )
}

export default Pourquoi