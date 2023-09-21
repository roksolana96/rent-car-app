import React from 'react';
import xClose from '../../img/xclose.png'
import {CarCard} from '../CarCard/CarCard' 
import { Overlay,
  ModalContainer,
  CloseButton,
 } from './Modal.styled';
export const Modal = ({ open, onClose }) => {
  if (!open) return null;

  const CloseEsc = e => {
    if (e.key === 'Escape') {
      e.preventDefault();
      window.removeEventListener('keydown', CloseEsc);
      onClose();
    }
  };

  window.addEventListener('keydown', CloseEsc);
  return (
    <Overlay onClick={onClose} >
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className='modalRight'>
          <CloseButton src={xClose} alt='/'  
            onClick={onClose}>
          </CloseButton >
          <div className='content'>
              <CarCard/>

          </div>
        </div>
      </ModalContainer>
    </Overlay>
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
//         <div>Catalog123</div>
//         </ModalStyled>
//       </Overlay>,
//       modalRoot
//     );
// }


