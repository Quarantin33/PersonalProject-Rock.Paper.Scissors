/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react'
import Modal from './Modal'

 const Footer = () => {

  const [modal, setModal] = useState(false)

  const toggle = () => {
    setModal(!modal)
  }

  return (
    <>
      <footer className="footer">
          <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://www.linkedin.com/in/josias-pazzelli-086a0921b/" target="_blank">Josías Pazzelli</a>.
          </div>
          <button className="rules" onClick={toggle}>Rules</button>
      </footer>

      {
        modal ? <Modal toggle={toggle}/> : null
      }

    </>
  )
}

export default Footer