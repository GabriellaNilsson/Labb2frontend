import React, { useState, useEffect } from "react";
import portfolio from "../Components/portfolio.css";

export default function Portfolio() {
    const [modals, setModals] = useState([]);

    const toggleModal = (index) => {
        const updatedModals = [...modals];
        updatedModals[index] = !updatedModals[index];
        setModals(updatedModals);
    };

    useEffect(() => {
        const body = document.body;
        modals.forEach((modal, index) => {
            if (modal) {
                body.classList.add(`active-modal-${index}`);
            } else {
                body.classList.remove(`active-modal-${index}`);
            }
        });

        return () => {
            modals.forEach((modal, index) => {
                body.classList.remove(`active-modal-${index}`);
            });
        };
    }, [modals]);

    const popups = [
        { title: "Popup 1", content: "Content for Popup 1" },
        { title: "Popup 2", content: "Content for Popup 2" },
        { title: "Popup 3", content: "Content for Popup 3" },
    ];

    return (
        <>
            <div>
                <header>
                    <h1>My Portfolio</h1>
                </header>
            </div>

            <button onClick={() => toggleModal(0)} className="btn-modal">
                Open Popup 1
            </button>

            <button onClick={() => toggleModal(1)} className="btn-modal">
                Open Popup 2
            </button>

            <button onClick={() => toggleModal(2)} className="btn-modal">
                Open Popup 3
            </button>

            {popups.map((popup, index) => (
                modals[index] && (
                    <div key={index} className={`modal active-modal-${index}`}>
                        <div onClick={() => toggleModal(index)} className="overlay"></div>
                        <div className="modal-content">
                            <h2>{popup.title}</h2>
                            <p>{popup.content}</p>
                            <button
                                className='close-modal'
                                onClick={() => toggleModal(index)}
                            >CLOSE</button>
                        </div>
                    </div>
                )
            ))}
        </>
    );
}
