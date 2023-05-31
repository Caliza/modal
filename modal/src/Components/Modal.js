import React, { useState } from "react";
import "./Modal.css"

export default function Modal(){

    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }
   return (
       <>
       <button  
       onClick={toggleModal}
       className="btn-modal">
        Open
        </button>
        <div className="modal">
            <div className="overlay"> </div>
            <div className="modal-content">
                <h2>Modal</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button
                className="close-modal"
                onClick={toggleModal}>
                    Close
                </button>
            </div>
        </div>
       </>
   )
}  