import React from 'react'
import ReactDOM  from 'react-dom'

import rules from "../images/image-rules.svg"
import close from "../images/icon-close.svg"

const Modal = ({toggle}) => {
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal__header">
          <h1>Rules</h1>
          <button onClick={toggle}>
            <img src={close} alt="Close" srcSet=''/>
          </button>
        </div>

        <img src={rules} alt="rules" srcSet=''/>
      </div>
    </div> ,

    document.getElementById("modal")
  )
}

export default Modal