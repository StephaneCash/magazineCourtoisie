import React from 'react'
import "./Videos.css"
import { FiPlus } from 'react-icons/fi'

const Videos = () => {
    return (
        <div className='videos'  data-aos="zoom-in">
            <h2>Nos récentes videos</h2>

            <div className='grille'>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map(val => {
                        return <div className='card' key={val}>
                            <iframe
                                height="300"
                                src={"https://www.youtube.com/embed?v=3tsB4LbJnQQ"}
                                target="_parent"
                                allow="accelerometer; autoplay; clipboard-write;
                        encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Vidéo"
                                name="inframe"
                            >
                            </iframe>
                        </div>
                    })
                }
            </div>

            <div className='contentBtn'>
                <button>
                    <span>Voir plus</span>
                    <FiPlus />
                </button>
            </div>
        </div>
    )
}

export default Videos