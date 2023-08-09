import React, { useEffect, useState } from 'react'
import { Modal } from "react-bootstrap";
import "./ReadDoc.css"
import { FiChevronLeft, FiChevronRight, FiDownload, FiGrid, FiX } from 'react-icons/fi';
import { baseUrlImage } from '../../bases/basesUrl';
import Pdf from "@mikecousins/react-pdf";
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { FaExpand, FaRegShareSquare } from 'react-icons/fa';

const ReadDoc = (props) => {

    const show = props.show;
    let magazine = props.magazine;

    const file = magazine && magazine.urlDOc;
    const [page, setPage] = useState(1);

    const [tab, setTab] = useState(1);

    const screen = useFullScreenHandle();

    useEffect(() => {
        let nombrePages = document.getElementById("nbrePages");
        console.log(nombrePages, " NOMBRE PAGES")
    }, [page]);

    return (
        <Modal show={show} className='modalReadDoc'>
            <Modal.Header style={{ backgroundColor: '#ddd', color: '#111' }}>
                <button onClick={props.closeModal} className='closeMdalBtn'>
                    <FiX />
                </button>
            </Modal.Header>
            <Modal.Body>
                <div className='readDoc'>
                    <div className='cardShowDoc card'>
                        <FullScreen handle={screen}>
                            <Pdf file={baseUrlImage + "/" + file} page={page}>
                                {({ pdfDocument, pdfPage, canvas }) => (
                                    <>
                                        {!pdfDocument && <span>Chargement...</span>}
                                        {canvas}
                                        {Boolean(pdfDocument && pdfDocument.numPages) && (
                                            <>
                                                <div id='nbrePages' className='nbrePages'>{page} sur {pdfDocument && pdfDocument.numPages}</div>
                                                <div className='btns'>
                                                    <button
                                                        disabled={page === 1}
                                                        onClick={() => setPage(page - 1)}
                                                    >
                                                        <FiChevronLeft />
                                                    </button>
                                                    <button
                                                        disabled={page === pdfDocument.numPages}
                                                        onClick={() => setPage(page + 1)}
                                                    >
                                                        <FiChevronRight />
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </>
                                )}
                            </Pdf>
                        </FullScreen>
                    </div>

                    <div>
                    </div>

                    <div className='descNom'>
                        <h5>{magazine && magazine.nom}</h5>

                    </div>
                </div>
                <div className='toolsBar'>
                    <button>
                        <FiGrid />
                    </button>
                    <button>
                        <a href={baseUrlImage + "/" + file}>
                            <FiDownload />
                        </a>
                    </button>
                    <button onClick={() => {
                        screen.enter()
                    }}>
                        <FaExpand />
                    </button>
                    <button>
                        <FaRegShareSquare />
                    </button>
                </div>
                <div className='detail'>
                    <div className='detailTabs'>
                        <h5 onClick={() => setTab(1)} className={tab === 1 ? "selected" : ""}>Détails</h5>
                        <h5 onClick={() => setTab(2)} className={tab === 2 ? "selected" : ""}>Présentation de {magazine && magazine.nom}</h5>
                    </div>

                    {
                        tab === 1 ?
                            <p>
                                {
                                    magazine.description
                                }
                            </p>
                            : tab === 2 ? "" : ""
                    }
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button style={{ border: "1px solid #ddd", padding: "5px", borderRadius: "4px" }} onClick={props.closeModal}>Fermer</button>
            </Modal.Footer>
        </Modal >
    )
}
export default ReadDoc;