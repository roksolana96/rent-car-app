import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1200;
`;

export const ModalContainer = styled.div`
  background-color: white;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: 541px;

  min-height: 225px;
  max-height: 80%;

  padding: 40px;

  border-radius: 24px;

  display: flex;
  flex-direction: column;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    // background:transparent
    background: #3e85f3;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: #e7e5e5;
    height: 112px;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #7c7c7c;
  }


`;

export const CloseButton = styled.img`
  padding: 0;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  color: black;

  transition: color 250ms linear, transform 250ms linear;

  &:hover {
    color: #3470ff;
    transform: scale(1.1);
  }
`;