import React, { useState } from 'react'
import { Modal } from "react-bootstrap";
import "./ReadDoc.css"
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { baseUrlImage } from '../../bases/basesUrl';
import Pdf from "@mikecousins/react-pdf";

const ReadDoc = (props) => {

    const show = props.show;
    let magazine = props.magazine;

    const file = magazine && magazine.urlDOc;

    console.log(file, " FILE ")
    const [page, setPage] = useState(1);


    return (
        <Modal show={show} className='modalReadDoc'>
            <Modal.Header style={{ backgroundColor: '#ddd', color: '#111' }}>
                <button onClick={props.closeModal} className='closeMdalBtn'>
                    <FiX />
                </button>
            </Modal.Header>
            <Modal.Body>
                <div className='readDoc'>
                    <div className='cardShowDoc card page'>

                        <Pdf file={baseUrlImage + "/" + file} page={page}>
                            {({ pdfDocument, pdfPage, canvas }) => (
                                <>
                                    {!pdfDocument && <span>Chargement...</span>}
                                    {canvas}
                                    {Boolean(pdfDocument && pdfDocument.numPages) && (
                                        <ul className="pager">
                                            <li className="previous">
                                                <button
                                                    disabled={page === 1}
                                                    onClick={() => setPage(page - 1)}
                                                >
                                                    <FiChevronLeft />
                                                </button>
                                            </li>
                                            <li className="next">
                                                <button
                                                    disabled={page === pdfDocument.numPages}
                                                    onClick={() => setPage(page + 1)}
                                                >
                                                    <FiChevronRight />
                                                </button>
                                            </li>
                                        </ul>
                                    )}
                                </>
                            )}
                        </Pdf>
                    </div>
                    <div>

                    </div>

                    <div className='descNom'>
                        <h5>{magazine && magazine.nom}</h5>

                    </div>
                </div>

                <div className='detail'>
                    <div className='detailTabs'>
                        <h5>Détails</h5>
                        <h5>Présentation de {magazine && magazine.nom}</h5>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button style={{ border: "1px solid #ddd", padding: "5px", borderRadius: "4px" }} onClick={props.closeModal}>Fermer</button>
            </Modal.Footer>
        </Modal >
    )
}
export default ReadDoc;