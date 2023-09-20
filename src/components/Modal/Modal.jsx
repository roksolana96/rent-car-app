import React from 'react';
import xClose from '../../img/xclose.png'

export const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src={xClose} alt='/' />
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <p>Do you want a</p>
            <h1>$20 CREDIT</h1>
            <p>for your first tade?</p>
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary'>
              <span className='bold'>YES</span>, I love NFT's
            </button>
            <button className='btnOutline'>
              <span className='bold'>NO</span>, thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


// import React, { useEffect} from 'react';
// import { createPortal } from 'react-dom';

// import { Overlay, ModalStyled } from './Modal.styled';

// const modalRoot = document.querySelector('#modal-root');

// export const Modal = ({onClose}) =>{
//   useEffect(()=>{
//     window.addEventListener('keydown', handleKeyDown);
//     return()=> {
//       window.removeEventListener('keydown', handleKeyDown)
//     };
//   });


// const handleKeyDown = e => {
//     if (e.code === 'Escape') {
//     onClose();
//     }
//   };

// const handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//     onClose();
//     }
//   };

//     return createPortal(
//       <Overlay onClick={handleBackdropClick}>
//         <ModalStyled>
//           <div>asd</div>
//         </ModalStyled>
//       </Overlay>,
//       modalRoot
//     );
// }


