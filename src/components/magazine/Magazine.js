import React, { useEffect, useState } from 'react'
import "./Magazine.css"
import { useSelector } from 'react-redux'
import { baseUrlImage } from '../../bases/basesUrl';
import Carousel from "react-multi-carousel";
import { Link } from 'react-router-dom';

const Magazine = ({ categorieId, setSizeMag, }) => {

    const magazines = useSelector(state => state.magazines.value);

    const magazinesFilter = magazines && magazines.length > 0 && magazines
        .filter(val => {
            if (categorieId) {
                const categorieMagazineId = val && val.categorieMagazineId;
                return categorieMagazineId === categorieId;
            } else {
                return val
            }
        });

    useEffect(() => {
        setSizeMag(magazinesFilter && magazinesFilter.length)
    }, [magazinesFilter, setSizeMag, categorieId]);

    // console.log(sizeMag)

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1260 },
            items: 5,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1260, min: 800 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 800, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const [windowSize, setWindowSize] = useState(
        window.innerWidth
    );


    useEffect(() => {
        function handleRezise() {
            setWindowSize(window.innerWidth)
        }

        window.addEventListener('resize', handleRezise);

        return () => window.removeEventListener('resize', handleRezise)

    }, [windowSize]);

    return (
        <div className='magazine'
            data-aos="zoom-in">
            <h2>Numéros récemment ajoutés</h2>

            <Carousel
                itemAriaLabel='magazinenom'
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                aria
            >
                {
                    magazinesFilter ? magazinesFilter.length > 0 && magazinesFilter
                        .map(value => {
                            const categorie = value && value.categorie;
                            return <Link
                                style={{ textDecoration: "none" }}
                                to={{
                                    pathname: `/magazine/${value && value.nom}`
                                }}
                                state={{ val: value }}
                                className='card' key={value.id}>
                                <img src={baseUrlImage + "/" + value.image} alt="" />
                                <div className='descMagazine'>
                                    <div className='contentNom'>
                                        {
                                            value && value.nom && value.nom.length > 50 ? value && value.nom && value.nom.substring(0, 50) + "..." :
                                                value && value.nom
                                        }
                                    </div>
                                    <span className='categorieNom'>
                                        {
                                            categorie && categorie.nom && categorie.nom.length > 20 ?
                                                categorie && categorie.nom && categorie.nom.substring(0, 20) + "..." :
                                                categorie && categorie.nom
                                        }
                                    </span>

                                    <div>
                                        <span>2024/mars</span> -
                                        <span>N° 23</span>
                                    </div>
                                </div>
                            </Link>
                        }) : "Chargement..."
                }
            </Carousel>

            {
                magazinesFilter && magazinesFilter.length === 0 &&
                <div>0 magazines trouvés</div>
            }
        </div>
    )
}

export default Magazine