import React, { useEffect } from 'react'
import "./MagazineById.css"
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import HTMLFlipBook from 'react-pageflip'
import { useDispatch } from 'react-redux'
import image1 from "../../../assets/image1.png"
import image2 from "../../../assets/image2.png"
import image3 from "../../../assets/image3.png"
import image4 from "../../../assets/image4.png"
import image5 from "../../../assets/image5.png"
import image6 from "../../../assets/image6.png"
import image7 from "../../../assets/image7.png"
import image8 from "../../../assets/image8.png"
import image9 from "../../../assets/image9.png"
import image10 from "../../../assets/image10.png"


import { addToCart } from '../../../features/Cart'
import { FaCartPlus, FaExpand, FaRegShareSquare } from 'react-icons/fa'
import { FiArrowLeft, FiGrid } from 'react-icons/fi'

const MagazineById = () => {

    const location = useLocation();
    const magazine = location && location.state && location.state.val;

    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const navigate = useNavigate();

    return (
        <>
            <Header />

            <div className='mainMagaById'>
                <div>
                    <button
                        onClick={() => navigate(-1)}
                        style={{
                            marginBottom: "1rem",
                            borderRadius: "5px",
                            padding: ".4rem 1rem",
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            border: "1px solid silver"
                        }}>
                        <FiArrowLeft />
                        <span>Retour</span>
                    </button>
                </div>
                <div className='headMagazine'>
                    <h5>Détail de magazine {magazine && magazine.nom}</h5>

                    <div className='head2'>
                        <div className='toolsBar'>
                            <button>
                                <FiGrid />
                            </button>
                            <button onClick={() => {
                            }}>
                                <FaExpand />
                            </button>
                            <button>
                                <FaRegShareSquare />
                            </button>
                        </div>
                        <button
                            onClick={() => {
                                const data = { ...magazine };
                                data.size = 1;
                                dispatch(addToCart(data))
                            }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                border: "1px solid #084298",
                                padding: ".4rem 1rem",
                                borderRadius: "5px",
                                background: "#084298"
                            }}>
                            <FaCartPlus color='#fff' />
                            <span style={{ color: "#fff" }}>Ajouter</span>
                        </button>
                    </div>
                </div>
                <div className='docBook page page-cover'>
                    <HTMLFlipBook
                        width={550}
                        height={500}
                        size="stretch"
                        minWidth={315}
                        maxWidth={1000}
                        minHeight={400}
                        maxHeight={1533}
                        maxShadowOpacity={0.5}
                        showCover={true}
                        mobileScrollSupport={true}
                    >
                        <div className="demoPage" data-density="hard">
                            <img src={image1} alt="" width={"100%"} height={"100%"} style={{ objectFit: "scale-down" }} />
                        </div>
                        <div className="demoPage" data-density="hard">
                            <img src={image2} alt="" width={"100%"} height={"100%"} style={{ objectFit: "scale-down" }} />
                        </div>
                        <div className="demoPage" data-density="hard">
                            <img src={image3} alt="" width={"100%"} height={"100%"} style={{ objectFit: "scale-down" }} />
                        </div>
                        <div className="demoPage" data-density="hard">
                            <img src={image4} alt="" width={"100%"} height={"100%"} style={{ objectFit: "scale-down" }} />
                        </div>
                        <div className="demoPage" data-density="hard">
                            <img src={image5} alt="" width={"100%"} height={"100%"} style={{ objectFit: "scale-down" }} />
                        </div>
                        <div className="demoPage" data-density="hard">
                            <img src={image6} alt="" width={"100%"} height={"100%"} style={{ objectFit: "scale-down" }} />
                        </div>
                        <div className="demoPage" data-density="hard">
                            <img src={image7} alt="" width={"100%"} height={"100%"} style={{ objectFit: "scale-down" }} />
                        </div>
                        <div className="demoPage" data-density="hard">
                            <img src={image8} alt="" width={"100%"} height={"100%"} style={{ objectFit: "scale-down" }} />
                        </div>
                        <div className="demoPage" data-density="hard">
                            <img src={image9} alt="" width={"100%"} height={"100%"} style={{ objectFit: "scale-down" }} />
                        </div>
                        <div className="demoPage" data-density="hard">
                            <img src={image10} alt="" width={"100%"} height={"100%"} style={{ objectFit: "scale-down" }} />
                        </div>
                    </HTMLFlipBook>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MagazineById