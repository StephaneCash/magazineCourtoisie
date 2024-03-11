import React from 'react'
import "./Caroussel.css"
import { useSelector } from 'react-redux';
import { baseUrlImage } from '../../bases/basesUrl';
import Carousel from "react-multi-carousel";

const CarousselImagesMag = () => {

    const magazines = useSelector(state => state.magazines.value);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    }

    function handleMagazine() {

    }

    return (
        <div className='homeCaroussel'>
            <div className='overPlay'></div>
            <Carousel
                itemAriaLabel='magazinenom'
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    magazines ? magazines.length > 0 && magazines
                        .map(value => {
                            const categorie = value && value.categorie;
                            return <div className='card' key={value.id}
                                onClick={() => handleMagazine(value)}>
                                <img src={baseUrlImage + "/" + value.image} alt="" />
                                <div className='text'>
                                    <h2>{value && value.nom}</h2>
                                    <h6>{categorie && categorie.nom}</h6>
                                </div>
                            </div>
                        }) : "Chargement..."
                }
            </Carousel>
        </div>
    )
}

export default CarousselImagesMag